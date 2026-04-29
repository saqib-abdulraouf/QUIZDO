/**
 * Unlock System — SHA-256 encrypted password gate
 * Two modes:
 *   1. Auto-lock: set window.UNLOCK_HASH before loading → locks page on load
 *   2. Programmatic: call window.showUnlock(hash, title, callback) from JS
 * No localStorage — code required every time.
 */
(function() {
  'use strict';

  // SHA-256 hash function
  async function sha256(str) {
    var encoder = new TextEncoder();
    var data = encoder.encode(str);
    var hashBuffer = await crypto.subtle.digest('SHA-256', data);
    var hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');
  }

  // Show unlock modal
  function showUnlockModal(hash, title, onSuccess) {
    // Remove any existing overlay first
    var old = document.getElementById('unlockOverlay');
    if (old) old.remove();

    var overlay = document.createElement('div');
    overlay.className = 'unlock-overlay';
    overlay.id = 'unlockOverlay';
    overlay.innerHTML =
      '<div class="unlock-card">' +
        '<div class="unlock-icon">🔐</div>' +
        '<div class="unlock-title">' + (title || 'Unlock Content') + '</div>' +
        '<div class="unlock-sub">Enter access code to unlock</div>' +
        '<div class="unlock-input-wrap">' +
          '<input type="password" class="unlock-input" id="unlockInput" placeholder="Enter Code" maxlength="20" autocomplete="off" spellcheck="false">' +
          '<button class="unlock-toggle-eye" id="unlockEye" type="button">👁</button>' +
        '</div>' +
        '<button class="unlock-btn" id="unlockBtn">Unlock →</button>' +
        '<div class="unlock-error" id="unlockError">Invalid code — try again</div>' +
        '<div class="unlock-footer">🔒 Encrypted · Secure Access</div>' +
      '</div>';
    document.body.prepend(overlay);
    document.body.style.overflow = 'hidden';

    var input = document.getElementById('unlockInput');
    var btn = document.getElementById('unlockBtn');
    var error = document.getElementById('unlockError');
    var eye = document.getElementById('unlockEye');

    setTimeout(function() { input.focus(); }, 300);

    // Toggle password visibility
    eye.addEventListener('click', function() {
      if (input.type === 'password') {
        input.type = 'text';
        eye.textContent = '🙈';
      } else {
        input.type = 'password';
        eye.textContent = '👁';
      }
    });

    // Verify
    async function verify() {
      var value = input.value.trim();
      if (!value) {
        input.classList.add('shake');
        setTimeout(function() { input.classList.remove('shake'); }, 500);
        return;
      }

      var inputHash = await sha256(value);

      if (inputHash === hash) {
        // Success
        input.classList.add('success');
        btn.textContent = '✅ Unlocked!';
        btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
        error.classList.remove('visible');

        setTimeout(function() {
          overlay.style.opacity = '0';
          overlay.style.transition = 'opacity 0.4s ease';
          setTimeout(function() {
            overlay.remove();
            document.body.style.overflow = '';
            if (onSuccess) onSuccess();
          }, 400);
        }, 600);
      } else {
        // Wrong
        input.classList.add('shake');
        error.classList.add('visible');
        setTimeout(function() { input.classList.remove('shake'); }, 500);
        input.value = '';
        input.focus();
      }
    }

    btn.addEventListener('click', verify);
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') verify();
      error.classList.remove('visible');
    });
  }

  // Expose globally for programmatic use
  window.showUnlock = showUnlockModal;

  // Auto-lock mode: if UNLOCK_HASH is set, lock on DOM ready
  if (window.UNLOCK_HASH) {
    var autoHash = window.UNLOCK_HASH;
    var autoTitle = window.UNLOCK_TITLE || 'Unlock Content';
    function autoInit() {
      showUnlockModal(autoHash, autoTitle, null);
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', autoInit);
    } else {
      autoInit();
    }
  }
})();
