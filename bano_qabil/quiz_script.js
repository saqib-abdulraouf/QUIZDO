// ═══════════════════════════════════════════════════════
// Bano Qabil Competency-Based Test (30 MCQs · 4 Parts)
// ═══════════════════════════════════════════════════════
const ALL_QUESTIONS = [
  // ── BASIC (Q1–Q15) ──
  {q:"Which of the following is the correct way to create a virtual environment in Python?",opts:["python virtual env myenv","python -m venv myenv","python create venv myenv","virtualenv create myenv"],ans:1},
  {q:"What will be the output of the following code?\nx = [1, 2, 3, 4, 5]\ny = x[::-1]\nprint(y)",opts:["[1, 2, 3, 4, 5]","[5, 4, 3, 2, 1]","[None]","Error"],ans:1},
  {q:"Which Python library is commonly used for creating web applications?",opts:["NumPy","Pandas","Django","Matplotlib"],ans:2},
  {q:"What is the correct syntax to define a class in Python?",opts:["class MyClass:","class MyClass {}","class MyClass()","class = MyClass"],ans:0},
  {q:"Which of the following statements will raise an exception?",opts:['x = int("123")','x = int("12.5")','x = int("100")','x = int("-50")'],ans:1},
  {q:"What does the open() function return when opening a file in Python?",opts:["A string containing the file contents","A file object","A boolean value","A list of file lines"],ans:1},
  {q:"Which method is used to add an element to the end of a list?",opts:["add()","insert()","append()","extend()"],ans:2},
  {q:"What is the output of the following code?\ndef func(x=5, y=10):\n    return x + y\nprint(func(y=20))",opts:["15","25","30","Error"],ans:1},
  {q:"Which of the following is a mutable data type in Python?",opts:["Tuple","String","Dictionary","Integer"],ans:2},
  {q:'What will be the output?\nx = "Python"\nprint(x[0:3])',opts:["Pyt","yth","Pytho","Python"],ans:0},
  {q:"Which exception is raised when trying to divide by zero?",opts:["ValueError","ZeroDivisionError","ArithmeticError","OverflowError"],ans:1},
  {q:"What does the isinstance() function do?",opts:["Creates an instance of a class","Checks if an object is an instance of a class","Removes an instance from memory","Prints the instance name"],ans:1},
  {q:"Which of the following is the correct way to handle exceptions?",opts:["try: except","try: catch","test: except","attempt: except"],ans:0},
  {q:"What is the purpose of the __init__() method in a class?",opts:["To initialize object attributes","To define the class name","To define class methods","To close the program"],ans:0},
  {q:"Which import statement correctly imports Flask?",opts:["import flask","from flask import Flask","Both A and B are correct","Neither A nor B is correct"],ans:2},

  // ── INTERMEDIATE (Q16–Q30) ──
  {q:"What will be the output of the following code involving metaclasses?\nclass Meta(type):\n    def __new__(mcs, name, bases, dct):\n        dct['x'] = 10\n        return super().__new__(mcs, name, bases, dct)\nclass MyClass(metaclass=Meta):\n    pass\nprint(MyClass.x)",opts:["AttributeError","10","None","NameError"],ans:1},
  {q:"Which of the following correctly implements the singleton pattern in Python?",opts:["Using a class variable and checking in __init__()","Using a metaclass to control instance creation","Using a decorator that caches instances","All of the above"],ans:3},
  {q:"What is the output of the following code with multiple inheritance (Method Resolution Order)?\nclass A:\n    def method(self):\n        return 'A'\nclass B(A):\n    def method(self):\n        return 'B' + super().method()\nclass C(A):\n    def method(self):\n        return 'C' + super().method()\nclass D(B, C):\n    pass\nprint(D().method())",opts:["BCBA","BCA","CBCA","ABC"],ans:1},
  {q:"What does the following code demonstrate about closures?\ndef outer(x):\n    def inner():\n        return x * 2\n    return inner\nf = outer(5)\nprint(f())",opts:["Function cannot return another function","Inner function captures the variable x from outer function scope","x is garbage collected before inner() is called","This code will raise a NameError"],ans:1},
  {q:"What is the purpose of __slots__ in a Python class?",opts:["To define class methods","To optimize memory usage by restricting instance attributes","To create static variables","To implement abstract methods"],ans:1},
  {q:"Which of the following correctly implements a property descriptor?",opts:["Using @property decorator with getter and setter","Implementing __get__(), __set__(), and __delete__()","Both A and B are valid descriptor implementations","Using __getattr__() and __setattr__()"],ans:2},
  {q:"What will be printed from this asynchronous operation code?\nimport asyncio\nasync def func1():\n    await asyncio.sleep(0.1)\n    return 'Done'\nasync def main():\n    result = await func1()\n    print(result)\nasyncio.run(main())",opts:["None","Done","RuntimeError","NameError"],ans:1},
  {q:"What is the issue in the following code involving circular references?\nclass Node:\n    def __init__(self, value):\n        self.value = value\n        self.parent = None\n        self.child = None\nparent = Node(1)\nchild = Node(2)\nparent.child = child\nchild.parent = parent",opts:["No issue - Python's garbage collector handles circular references","Memory leak due to circular reference","Memory leak due to improper variable declaration","Variables are automatically cleared by Python"],ans:0},
  {q:"What is the correct way to implement context manager protocol?",opts:["Implement __enter__() and __exit__() methods","Use @contextmanager decorator with yield","Both A and B are correct approaches","Use with statement with any class"],ans:2},
  {q:"What will be the output of the following code involving __new__() and __init__()?\nclass MyClass:\n    def __new__(cls):\n        print('new')\n        return super().__new__(cls)\n    def __init__(self):\n        print('init')\nMyClass()",opts:["init new","new init","Only new","Only init"],ans:1},
  {q:"What does the functools.wraps decorator do?\nfrom functools import wraps\ndef my_decorator(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper",opts:["It copies the metadata of the original function to the wrapper","It prevents the wrapper from being called","It forces the wrapper to return the same type as the original function","It automatically generates documentation"],ans:0},
  {q:"Which of the following is true about Python's Global Interpreter Lock (GIL)?",opts:["It allows true parallel execution of threads","It prevents multiple threads from executing Python bytecode simultaneously","It only affects CPU-bound operations","Both B and C are correct"],ans:3},
  {q:"What is the output of the following advanced list comprehension with conditional?\nresult = [x**2 if x % 2 == 0 else x for x in range(5)]\nprint(result)",opts:["[0, 1, 4, 3, 16]","[0, 1, 4, 9, 16]","[0, 2, 4, 6, 8]","[1, 3, 5, 7, 9]"],ans:0},
  {q:"What is the purpose of implementing __missing__() in a dictionary subclass?",opts:["To handle missing values silently","To raise an error when a key is not found","To provide a default value when a key lookup fails","To prevent modifications to the dictionary"],ans:2},
  {q:"Which approach demonstrates proper abstraction using Abstract Base Classes (ABC)?\nfrom abc import ABC, abstractmethod\nclass Base(ABC):\n    @abstractmethod\n    def method(self):\n        pass",opts:["Cannot instantiate Base class directly","Subclasses must implement the abstract method","Provides a contract for subclasses","All of the above"],ans:3},

  // ── UPPER INTERMEDIATE (Q31–Q45) ──
  {q:"What is the output of this decorator with arguments?\ndef repeat(n):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                func(*args, **kwargs)\n        return wrapper\n    return decorator\n@repeat(2)\ndef greet():\n    print('Hello')\ngreet()",opts:["Hello (printed once)","Hello\nHello (printed twice)","None (no output)","Error: missing positional argument"],ans:1},
  {q:"What demonstrates proper use of __enter__() and __exit__()?\nclass FileManager:\n    def __init__(self, filename, mode):\n        self.filename = filename\n        self.mode = mode\n        self.file = None\n    def __enter__(self):\n        self.file = open(self.filename, self.mode)\n        return self.file\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if self.file:\n            self.file.close()\n        return False\nwith FileManager('data.txt', 'r') as f:\n    data = f.read()",opts:["Resource is not properly managed","File is automatically closed when exiting the with block","__exit__() is never called","File remains open after the block"],ans:1},
  {q:"What is the result of Method Resolution Order (MRO) in this case?\nclass A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass\nprint(D.mro())",opts:["[D, B, C, A, object]","[D, C, B, A, object]","[D, A, B, C, object]","[D, B, A, C, object]"],ans:0},
  {q:"What does this generator expression do?\ndef fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\ngen = fibonacci(5)\nprint(list(gen))",opts:["[0, 1, 1, 2, 3]","[0, 1, 2, 3, 5]","[1, 1, 2, 3, 5]","Generator object"],ans:0},
  {q:"What is the output of this closure with mutable default?\ndef make_multiplier(n):\n    def multiplier(x):\n        return x * n\n    return multiplier\ntimes3 = make_multiplier(3)\ntimes5 = make_multiplier(5)\nprint(times3(10), times5(10))",opts:["30 50","30 30","50 50","Error: n is not defined"],ans:0},
  {q:"What demonstrates proper use of *args and **kwargs?\ndef func(a, b, *args, **kwargs):\n    print(f'a={a}, b={b}, args={args}, kwargs={kwargs}')\nfunc(1, 2, 3, 4, x=5, y=6)",opts:["a=1, b=2, args=(3, 4), kwargs={'x': 5, 'y': 6}","Error: too many positional arguments","a=1, b=2, args=(3, 4, 5, 6), kwargs={}","Error: unexpected keyword arguments"],ans:0},
  {q:"What is the output of this property with setter?\nclass Temperature:\n    def __init__(self, celsius):\n        self._celsius = celsius\n    @property\n    def celsius(self):\n        return self._celsius\n    @celsius.setter\n    def celsius(self, value):\n        if value < -273:\n            raise ValueError('Invalid temperature')\n        self._celsius = value\ntemp = Temperature(25)\ntemp.celsius = 30\nprint(temp.celsius)",opts:["25","30","ValueError","AttributeError"],ans:1},
  {q:"What does @staticmethod versus @classmethod do?\nclass MyClass:\n    value = 10\n    @staticmethod\n    def static_method():\n        return 'Static'\n    @classmethod\n    def class_method(cls):\n        return cls.value\nprint(MyClass.static_method(), MyClass.class_method())",opts:["Both receive self as first argument","staticmethod receives nothing, classmethod receives cls","Both are identical in functionality","staticmethod cannot access class variables"],ans:1},
  {q:"What is the purpose of __getattr__() and __getattribute__()?\nclass DynamicClass:\n    def __getattr__(self, name):\n        return f'Attribute {name} not found'\n    def __getattribute__(self, name):\n        return super().__getattribute__(name)\nobj = DynamicClass()\nprint(obj.existing_method)",opts:["Attribute existing_method not found","AttributeError","None","Both methods do the same thing"],ans:0},
  {q:"What demonstrates lazy evaluation in decorators?\ndef lazy_decorator(func):\n    print('Decorating')\n    def wrapper(*args, **kwargs):\n        print('Executing')\n        return func(*args, **kwargs)\n    return wrapper\n@lazy_decorator\ndef my_func():\n    print('Inside function')\nprint('After decoration')\nmy_func()",opts:["Decorating\nAfter decoration\nExecuting\nInside function","Decorating\nInside function\nExecuting","Executing\nInside function","After decoration\nInside function"],ans:0},
  {q:"What is the output with data class comparison?\nfrom dataclasses import dataclass\n@dataclass\nclass Person:\n    name: str\n    age: int\np1 = Person('Alice', 30)\np2 = Person('Alice', 30)\nprint(p1 == p2)",opts:["False (different objects)","True (equal content)","Error: Person is not comparable","None"],ans:1},
  {q:"What does this demonstrate about variable scope?\nx = 10\ndef outer():\n    x = 20\n    def inner():\n        x = 30\n        print(x)\n    inner()\n    print(x)\nouter()\nprint(x)",opts:["30\n20\n10","30\n30\n30","20\n20\n20","Error: x is not defined"],ans:0},
  {q:"What is the result of using __call__() on a class?\nclass Multiplier:\n    def __init__(self, factor):\n        self.factor = factor\n    def __call__(self, x):\n        return x * self.factor\ntriple = Multiplier(3)\nprint(triple(5))",opts:["5 (only stores factor)","15 (calls call method)","Error: Multiplier object is not callable","3"],ans:1},
  {q:"What demonstrates proper use of @lru_cache decorator?\nfrom functools import lru_cache\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n < 2:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\nprint(fibonacci(5))",opts:["5 (correct value)","Error: recursive limit exceeded","None","Caches previous results for performance"],ans:0},
  {q:"What is the output of this super() usage?\nclass Parent:\n    def method(self):\n        return 'Parent'\nclass Child(Parent):\n    def method(self):\n        return super().method() + ' and Child'\nc = Child()\nprint(c.method())",opts:["Parent and Child","Child","Parent","Error: super() requires arguments"],ans:0},
  {q:"What demonstrates proper type hints?\nfrom typing import List, Dict, Optional\ndef process_data(items: List[int], mapping: Dict[str, int]) -> Optional[int]:\n    if not items:\n        return None\n    return sum(items)\nresult = process_data([1, 2, 3], {'key': 1})\nprint(result)",opts:["6 (correct sum)","Error: incorrect types","Type hints are only for documentation","Type hints enforce type checking at runtime"],ans:0},
  {q:"What is the output of chained method calls?\nclass Calculator:\n    def __init__(self, value=0):\n        self.value = value\n    def add(self, n):\n        self.value += n\n        return self\n    def multiply(self, n):\n        self.value *= n\n        return self\n    def get_result(self):\n        return self.value\nresult = Calculator(5).add(3).multiply(2).get_result()\nprint(result)",opts:["5","16","Error: method chaining not supported","10"],ans:1},
  {q:"What demonstrates the Iterator protocol?\nclass CountUp:\n    def __init__(self, max):\n        self.max = max\n        self.current = 0\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.current < self.max:\n            self.current += 1\n            return self.current\n        raise StopIteration\nfor num in CountUp(3):\n    print(num, end=' ')",opts:["1 2 3","0 1 2","Error: StopIteration not handled","Nothing (infinite loop)"],ans:0},
  {q:"What is the output with multiple decorators?\ndef decorator1(func):\n    def wrapper(*args, **kwargs):\n        print('D1 before')\n        result = func(*args, **kwargs)\n        print('D1 after')\n        return result\n    return wrapper\ndef decorator2(func):\n    def wrapper(*args, **kwargs):\n        print('D2 before')\n        result = func(*args, **kwargs)\n        print('D2 after')\n        return result\n    return wrapper\n@decorator1\n@decorator2\ndef my_func():\n    print('Function')\nmy_func()",opts:["D1 before\nD2 before\nFunction\nD2 after\nD1 after","D2 before\nD1 before\nFunction\nD1 after\nD2 after","D1 before\nD1 after\nD2 before\nD2 after","Function (decorators ignored)"],ans:0},
  {q:"What demonstrates proper handling of custom exceptions?\nclass CustomError(Exception):\n    def __init__(self, message, code):\n        self.message = message\n        self.code = code\n        super().__init__(self.message)\ntry:\n    raise CustomError('Invalid input', 400)\nexcept CustomError as e:\n    print(f'Error {e.code}: {e.message}')",opts:["Error 400: Invalid input","Error: Invalid input","CustomError: Invalid input","AttributeError: code not defined"],ans:0},

  // ── ADVANCED (Q51–Q60) — Descriptive Questions ──
  {q:"Explain the difference between a list and a tuple in Python, including mutability implications.",type:"desc",marks:3,answer:"A list is a mutable data structure, meaning its elements can be changed, added, or removed after creation. A tuple is immutable, meaning once created, its elements cannot be modified.\n<pre class=\"q-code\">my_list = [1, 2, 3]\nmy_list[0] = 10        # ✓ Allowed\n\nmy_tuple = (1, 2, 3)\nmy_tuple[0] = 10       # ✗ TypeError</pre>\nTuples are faster and used for fixed data (e.g. coordinates, RGB values). Lists are used for dynamic, changeable collections."},
  {q:"What is a lambda function? Provide an example and explain when you would use it.",type:"desc",marks:3,answer:"A lambda function is a small, anonymous (nameless) single-expression function defined using the <code>lambda</code> keyword. It is used when a short, throwaway function is needed without formally defining it with <code>def</code>.\n<pre class=\"q-code\">square = lambda x: x ** 2\nprint(square(5))    # Output: 25\n\n# Practical use: sorting a list by string length\nnames = [\"Ali\", \"Zara\", \"Bilal\"]\nnames.sort(key=lambda x: len(x))\nprint(names)        # ['Ali', 'Zara', 'Bilal']</pre>\nLambda functions are commonly used with <code>map()</code>, <code>filter()</code>, and <code>sorted()</code>."},
  {q:"How does inheritance work in Python? Explain method overriding with a brief example.",type:"desc",marks:3,answer:"Inheritance allows a child class to acquire the attributes and methods of a parent class, promoting code reuse. Method overriding occurs when a child class redefines a method from the parent class to provide its own specific implementation.\n<pre class=\"q-code\">class Animal:\n    def speak(self):\n        return \"Some sound\"\n\nclass Dog(Animal):\n    def speak(self):           # overriding parent method\n        return \"Woof!\"\n\nclass Cat(Animal):\n    def speak(self):           # overriding parent method\n        return \"Meow!\"\n\nprint(Dog().speak())    # Output: Woof!\nprint(Cat().speak())    # Output: Meow!</pre>\nThe child class method takes priority over the parent class method when called on a child object."},
  {q:"What is the purpose of the requirements.txt file and how do you generate it?",type:"desc",marks:3,answer:"<code>requirements.txt</code> is a file that lists all the external libraries and their specific versions that a Python project depends on. Its purpose is to allow other developers to recreate the exact same environment easily.\n<pre class=\"q-code\"># Generate requirements.txt from current environment:\npip freeze > requirements.txt\n\n# Install all dependencies from the file:\npip install -r requirements.txt</pre>\nExample contents of requirements.txt:\n<pre class=\"q-code\">flask==2.3.0\npandas==2.0.1\nnumpy==1.24.0</pre>\nIt is essential for team collaboration, deployment, and project portability."},
  {q:"Explain exception handling in Python and discuss the difference between different exception types.",type:"desc",marks:3,answer:"Exception handling prevents a program from crashing unexpectedly by catching and managing runtime errors gracefully using <code>try</code>, <code>except</code>, <code>else</code>, and <code>finally</code> blocks.\n<pre class=\"q-code\">try:\n    x = int(\"abc\")           # raises ValueError\nexcept ValueError:\n    print(\"Invalid value entered\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero\")\nexcept Exception as e:       # catches any other exception\n    print(f\"Unexpected error: {e}\")\nelse:\n    print(\"No error occurred\")\nfinally:\n    print(\"This always executes\")</pre>\nCommon exception types:\n• <b>ValueError</b> — wrong value type (e.g. int(\"abc\"))\n• <b>TypeError</b> — wrong data type in operation\n• <b>ZeroDivisionError</b> — division by zero\n• <b>FileNotFoundError</b> — file does not exist\n• <b>IndexError</b> — list index out of range\n• <b>KeyError</b> — dictionary key not found"},
  {q:"What is the difference between == and is operators in Python with examples?",type:"desc",marks:3,answer:"<code>==</code> is the equality operator — it compares the <b>values</b> of two objects. <code>is</code> is the identity operator — it checks whether two variables point to the <b>same object in memory</b>.\n<pre class=\"q-code\">a = [1, 2, 3]\nb = [1, 2, 3]\nc = a\n\nprint(a == b)    # True  — same values\nprint(a is b)    # False — different objects in memory\nprint(a is c)    # True  — c references the same object as a</pre>\nImportant note: Python caches small integers (-5 to 256) and short strings, so <code>is</code> may return True for them even without explicit assignment:\n<pre class=\"q-code\">x = 100\ny = 100\nprint(x is y)    # True — cached by Python</pre>\nIn general, <code>==</code> should be used for value comparison and <code>is</code> for identity checks (e.g. <code>if x is None</code>)."},
  {q:"Describe polymorphism in OOP. How is it achieved in Python?",type:"desc",marks:3,answer:"Polymorphism means \"many forms\" — it allows the same method name to behave differently across different classes. In Python, polymorphism is achieved through method overriding and duck typing.\n<pre class=\"q-code\">class Shape:\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        return 3.14 * self.r ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def area(self):\n        return self.w * self.h\n\nshapes = [Circle(5), Rectangle(4, 6)]\nfor shape in shapes:\n    print(shape.area())    # Each calls its own version of area()</pre>\nThis allows writing generic code that works with objects of different types through a common interface."},
  {q:"What are decorators in Python? Provide one practical use case.",type:"desc",marks:3,answer:"A decorator is a function that wraps another function to extend or modify its behavior without changing its original source code. It is applied using the <code>@</code> symbol.\n<pre class=\"q-code\">import time\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start  = time.time()\n        result = func(*args, **kwargs)\n        end    = time.time()\n        print(f\"{func.__name__} took {end - start:.4f} seconds\")\n        return result\n    return wrapper\n\n@timer\ndef process_data():\n    time.sleep(1)\n    return \"Processed\"\n\nprocess_data()\n# Output: process_data took 1.0011 seconds</pre>\nPractical use cases: logging, authentication checking, execution timing, caching results with <code>@lru_cache</code>."},
  {q:"Explain the difference between shallow copy and deep copy with examples.",type:"desc",marks:3,answer:"A <b>shallow copy</b> creates a new object but does not copy nested objects — it only copies references to them. A <b>deep copy</b> creates a completely independent copy of the object and all nested objects within it.\n<pre class=\"q-code\">import copy\n\n# Shallow Copy\noriginal = [[1, 2], [3, 4]]\nshallow  = copy.copy(original)\nshallow[0][0] = 99\nprint(original)    # [[99, 2], [3, 4]] — original affected!\n\n# Deep Copy\noriginal2 = [[1, 2], [3, 4]]\ndeep      = copy.deepcopy(original2)\ndeep[0][0] = 99\nprint(original2)   # [[1, 2], [3, 4]] — original safe</pre>\nRule of thumb: Use deep copy when working with nested or complex objects that must remain independent."},
  {q:"What is a context manager? Mention two practical applications.",type:"desc",marks:3,answer:"A context manager is an object that properly manages resources by automatically performing setup and cleanup operations using the <code>with</code> statement. It implements <code>__enter__()</code> and <code>__exit__()</code> methods internally.\n<pre class=\"q-code\"># Syntax\nwith open(\"file.txt\", \"r\") as f:\n    data = f.read()\n# file is automatically closed here — no need to call f.close()</pre>\nTwo practical applications:\n\n<b>1. File Handling:</b>\n<pre class=\"q-code\">with open(\"data.txt\", \"w\") as f:\n    f.write(\"Hello World\")\n# File is closed automatically even if an error occurs</pre>\n<b>2. Database Connection:</b>\n<pre class=\"q-code\">import sqlite3\nwith sqlite3.connect(\"mydb.db\") as conn:\n    cursor = conn.cursor()\n    cursor.execute(\"SELECT * FROM users\")\n# Connection is committed and closed automatically</pre>\nContext managers prevent resource leaks and make code cleaner and safer."},
];

// ── STATE ──
const PARTS = [
  {label:"Basic",              cls:"p1", color:"#22c55e", range:[0,15]},
  {label:"Intermediate",       cls:"p2", color:"#38bdf8", range:[15,30]},
  {label:"Upper Intermediate", cls:"p3", color:"#f5c518", range:[30,50]},
  {label:"Advanced",           cls:"p4", color:"#a855f7", range:[50,60]},
];

let currentPart = 0;
let questions = [];
let current = 0;
let answers = []; // null=unanswered, -1=skipped, 0..3=chosen index
let score = 0;
let totalAnswered = 0;

// ── PROGRESS PERSISTENCE SYSTEM ──
function getProgressKey() {
  return 'banoqabil_' + currentPart;
}

function getUserProgressStore() {
  if (!currentUser) return null;
  try {
    return JSON.parse(localStorage.getItem('qm_progress_' + currentUser.email) || '{}');
  } catch(e) { return {}; }
}

function saveProgress() {
  if (!currentUser) return;
  const store = getUserProgressStore() || {};
  const key = getProgressKey();
  store[key] = {
    answers: answers,
    current: current,
    score: score,
    totalAnswered: totalAnswered,
    timestamp: Date.now()
  };
  localStorage.setItem('qm_progress_' + currentUser.email, JSON.stringify(store));
}

function loadProgress(key) {
  if (!currentUser) return null;
  const store = getUserProgressStore();
  if (!store || !store[key]) return null;
  return store[key];
}

function clearProgressKey(key) {
  if (!currentUser) return;
  const store = getUserProgressStore() || {};
  delete store[key];
  localStorage.setItem('qm_progress_' + currentUser.email, JSON.stringify(store));
}

function getPartQuestions(partIdx) {
  const [s, e] = PARTS[partIdx].range;
  return ALL_QUESTIONS.slice(s, e);
}

function startPart(partIdx) {
  // Guard: prevent starting parts with no questions
  const [s, e] = PARTS[partIdx].range;
  if (s === e) return;
  currentPart = partIdx;
  questions = getPartQuestions(partIdx);
  current = 0;
  answers = new Array(questions.length).fill(null);
  score = 0;
  totalAnswered = 0;

  // Restore saved progress if logged in
  const saved = loadProgress('banoqabil_' + partIdx);
  if (saved && saved.answers && saved.answers.length === questions.length) {
    answers = saved.answers;
    current = saved.current || 0;
    score = saved.score || 0;
    totalAnswered = saved.totalAnswered || 0;
  }

  document.getElementById("homePage").style.display = "none";
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("resultsPage").style.display = "none";
  document.getElementById("quizPage").style.display = "flex";
  document.getElementById("partBadgesWrap").style.display = "flex";
  document.querySelectorAll(".part-badge").forEach((b,i) => b.classList.toggle("active", i === partIdx));
  buildDots();
  renderQ();
}

function buildDots() {
  const inner = document.getElementById("dotsInner");
  inner.innerHTML = questions.map((_, i) => `<div class="dot" id="dot${i}" onclick="jumpTo(${i})"></div>`).join("");
}

function updateDot(i) {
  const dot = document.getElementById(`dot${i}`);
  if (!dot) return;
  dot.className = "dot";
  if (i === current) dot.classList.add("current");
  // Check if locked: all previous questions must be answered to unlock
  let locked = false;
  for (let j = 0; j < i; j++) {
    if (answers[j] === null) { locked = true; break; }
  }
  if (locked) {
    dot.classList.add("locked");
    return;
  }
  if (answers[i] === null) return;
  if (answers[i] === -1) dot.classList.add("skipped");
  else if (questions[i].type === "desc") dot.classList.add("answered"); // descriptive = read
  else if (answers[i] === questions[i].ans) dot.classList.add("answered");
  else dot.classList.add("wrong");
  if (i === current) dot.classList.add("current");
}

function renderQ() {
  const q = questions[current];
  const globalNum = current + 1;
  const isDesc = q.type === "desc";

  const part = PARTS[currentPart];
  document.getElementById("qNum").textContent = `Q${globalNum}`;
  const tag = document.getElementById("qPartTag");
  tag.textContent = part.label;
  tag.style.color = part.color;
  tag.style.borderColor = part.color + "44";

  // Render question text with code blocks properly formatted
  const qTextEl = document.getElementById("qText");
  const qParts = q.q.split('\n');
  if (qParts.length > 1) {
    const questionLine = qParts[0];
    const codeLines = qParts.slice(1).join('\n');
    qTextEl.innerHTML = questionLine + '<pre class="q-code">' + codeLines.replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</pre>';
  } else {
    qTextEl.textContent = q.q;
  }

  const fb = document.getElementById("feedbackBox");
  const optionsWrap = document.getElementById("optionsWrap");

  if (isDesc) {
    // ── DESCRIPTIVE QUESTION — simple toggle, no progress tracking ──
    const marksBadge = `<div class="desc-marks-badge">📝 ${q.marks} Marks</div>`;
    let answerHtml = '';
    if (q.answer) {
      const formatted = q.answer.split(/(<pre[\s\S]*?<\/pre>)/g).map(part => {
        if (part.startsWith('<pre')) return part;
        return part.replace(/\n/g, '<br>');
      }).join('');
      answerHtml = `<div class="desc-answer-box" id="descAnswerBox" style="display:none;">
          <div class="desc-answer-label">📖 Answer</div>
          <div class="desc-answer-text">${formatted}</div>
        </div>`;
    } else {
      answerHtml = `<div class="desc-answer-box coming-soon" id="descAnswerBox" style="display:none;">
          <div class="desc-answer-label">📖 Answer</div>
          <div class="desc-answer-text">Answer coming soon — jald update hoga!</div>
        </div>`;
    }
    optionsWrap.innerHTML = marksBadge +
      `<button class="desc-read-btn" id="descReadBtn" onclick="toggleAnswer()">📖 Read Answer</button>` +
      answerHtml;
    fb.style.display = "none";
    // Auto-mark descriptive as done (so it doesn't block quiz flow)
    if (answers[current] === null) { answers[current] = 1; saveProgress(); }
  } else {
    // ── MCQ QUESTION ──
    const opted = answers[current];
    const revealed = opted !== null && opted !== -1;

    optionsWrap.innerHTML = q.opts.map((o, i) => {
      let cls = "";
      if (revealed) {
        if (i === q.ans) cls = "correct";
        else if (i === opted && i !== q.ans) cls = "wrong";
      }
      const letters = ["A","B","C","D"];
      return `<button class="opt-btn ${cls}" onclick="choose(${i})" ${revealed?"disabled":""}><span class="opt-letter">${letters[i]}</span>${o}</button>`;
    }).join("");

    if (revealed) {
      const opted = answers[current];
      const correct = opted === q.ans;
      fb.className = `feedback-box ${correct ? "correct" : "wrong"}`;
      fb.style.display = "block";
      fb.textContent = correct ? "✅ Correct!" : `❌ Wrong! Correct answer: ${["A","B","C","D"][q.ans]}`;
    } else {
      fb.style.display = "none";
    }
  }

  const done = answers.filter(a => a !== null).length;
  const pct = Math.round((done / questions.length) * 100);
  document.getElementById("progressLabel").textContent = `Q${globalNum} of ${questions.length}`;
  document.getElementById("progressPct").textContent = pct + "%";
  document.getElementById("progressFill").style.width = pct + "%";

  // Score: only count MCQ questions
  let mcqCorrect = 0, mcqAnswered = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].type === "desc") continue;
    if (answers[i] !== null && answers[i] !== -1) {
      mcqAnswered++;
      if (answers[i] === questions[i].ans) mcqCorrect++;
    }
  }
  document.getElementById("scoreBox").textContent = `Score: ${mcqCorrect} / ${mcqAnswered}`;

  document.getElementById("btnPrev").disabled = current === 0;
  document.getElementById("btnNext").disabled = current === questions.length - 1 || (answers[current] === null && !isDesc);
  document.getElementById("btnSkip").disabled = answers[current] !== null;

  for (let i = 0; i < questions.length; i++) updateDot(i);
  const dotEl = document.getElementById(`dot${current}`);
  if (dotEl) dotEl.scrollIntoView({inline:"center", behavior:"smooth", block:"nearest"});

  if (answers.every(a => a !== null)) showResults();
}

function choose(idx) {
  if (answers[current] !== null) return;
  answers[current] = idx;
  saveProgress();
  renderQ();
}

function toggleAnswer() {
  const box = document.getElementById("descAnswerBox");
  const btn = document.getElementById("descReadBtn");
  if (!box) return;
  if (box.style.display === "none") {
    box.style.display = "block";
    btn.textContent = "🔽 Hide Answer";
    btn.classList.add("active");
  } else {
    box.style.display = "none";
    btn.textContent = "📖 Read Answer";
    btn.classList.remove("active");
  }
}

function skipQ() {
  if (answers[current] !== null) return;
  answers[current] = -1;
  saveProgress();
  if (current < questions.length - 1) {
    current++;
    saveProgress();
    renderQ();
  } else {
    renderQ();
  }
}

function navigate(dir) {
  const next = current + dir;
  if (next < 0 || next >= questions.length) return;
  // Going forward: current must be answered first
  if (dir > 0 && answers[current] === null) return;
  current = next;
  saveProgress();
  renderQ();
}

function jumpTo(i) {
  // Can always go back to already-answered questions
  if (i <= current) {
    current = i;
    saveProgress();
    renderQ();
    return;
  }
  // Going forward: all questions before target must be answered
  for (let j = 0; j < i; j++) {
    if (answers[j] === null) return; // silently block
  }
  current = i;
  saveProgress();
  renderQ();
}

function showResults() {
  setTimeout(() => {
    const mcqOnly = questions.filter(q => q.type !== "desc");
    const descOnly = questions.filter(q => q.type === "desc");
    const isAllDesc = mcqOnly.length === 0;

    let correct = 0, wrong = 0, skipped = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].type === "desc") continue; // skip descriptive for scoring
      if (answers[i] === -1) skipped++;
      else if (answers[i] !== null && answers[i] === questions[i].ans) correct++;
      else if (answers[i] !== null) wrong++;
    }
    const total = isAllDesc ? questions.length : mcqOnly.length;
    const readCount = descOnly.filter((_, i) => {
      const realIdx = questions.indexOf(descOnly[i]);
      return answers[realIdx] === 1;
    }).length;

    if (isAllDesc) {
      // All descriptive — show review summary
      document.getElementById("quizPage").style.display = "none";
      document.getElementById("resultsPage").style.display = "flex";
      document.getElementById("resGrade").textContent = "✅";
      document.getElementById("resGrade").style.color = "#a855f7";
      document.getElementById("resLabel").textContent = `Review Complete · Bano Qabil — ${PARTS[currentPart].label}`;
      document.getElementById("resCorrect").textContent = readCount;
      document.querySelector("#resCorrect + .stat-lbl").textContent = "READ";
      document.getElementById("resWrong").textContent = descOnly.length - readCount;
      document.querySelector("#resWrong + .stat-lbl").textContent = "SKIPPED";
      document.getElementById("resSkipped").textContent = descOnly.length;
      document.querySelector("#resSkipped + .stat-lbl").textContent = "TOTAL";
      document.getElementById("resTotal").parentElement.style.display = "none";
    } else {
      // MCQ or mixed
      const pct = Math.round((correct / total) * 100);
      let grade, color;
      if (pct >= 90) { grade = "A+"; color = "#22c55e"; }
      else if (pct >= 80) { grade = "A"; color = "#86efac"; }
      else if (pct >= 70) { grade = "B"; color = "#38bdf8"; }
      else if (pct >= 60) { grade = "C"; color = "#f5c518"; }
      else { grade = "F"; color = "#ef4444"; }

      document.getElementById("quizPage").style.display = "none";
      document.getElementById("resultsPage").style.display = "flex";
      document.getElementById("resGrade").textContent = grade;
      document.getElementById("resGrade").style.color = color;
      document.getElementById("resLabel").textContent = `${pct}% · Bano Qabil — ${PARTS[currentPart].label}`;
      document.getElementById("resCorrect").textContent = correct;
      document.getElementById("resWrong").textContent = wrong;
      document.getElementById("resSkipped").textContent = skipped;
      document.getElementById("resTotal").textContent = total;
      // Reset labels in case they were changed by descriptive
      document.querySelector("#resCorrect + .stat-lbl").textContent = "CORRECT";
      document.querySelector("#resWrong + .stat-lbl").textContent = "WRONG";
      document.querySelector("#resSkipped + .stat-lbl").textContent = "SKIPPED";
      document.getElementById("resTotal").parentElement.style.display = "";
    }
  }, 400);
}

function retryPart() {
  clearProgressKey(getProgressKey());
  const idx = currentPart;
  currentPart = idx;
  questions = getPartQuestions(idx);
  current = 0;
  answers = new Array(questions.length).fill(null);
  score = 0; totalAnswered = 0;
  document.getElementById("homePage").style.display = "none";
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("resultsPage").style.display = "none";
  document.getElementById("quizPage").style.display = "flex";
  buildDots(); renderQ();
}

// ── NAVIGATION ──
function goLanding() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("quizPage").style.display = "none";
  document.getElementById("resultsPage").style.display = "none";
  document.getElementById("landingPage").style.display = "flex";
  document.body.classList.remove('quiz-active');
  const fpi = document.getElementById('floatingPartIndicator');
  if (fpi) fpi.classList.remove('visible');
  const rc = document.getElementById('rightControls');
  if (rc) rc.style.display = 'none';
}

function goHome() {
  document.getElementById("quizPage").style.display = "none";
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("resultsPage").style.display = "none";
  document.getElementById("homePage").style.display = "flex";
  document.body.classList.remove('quiz-active');
  const fpi = document.getElementById('floatingPartIndicator');
  if (fpi) fpi.classList.remove('visible');
  const rc = document.getElementById('rightControls');
  if (rc) rc.style.display = 'none';
}

function openBook(id) {
  if (id === 'banoqabil') {
    goLanding();
  } else if (id === '300q') {
    window.location.href = '../book1/book_index.html';
  } else if (id === 'agentfactory') {
    window.location.href = '../book2/book_index.html';
  }
}

// ── AUTH SYSTEM ──
let currentUser = null;

function getUsers() {
  try { return JSON.parse(localStorage.getItem('qm_users') || '{}'); } catch(e) { return {}; }
}
function saveUsers(u) { localStorage.setItem('qm_users', JSON.stringify(u)); }
function saveSession(user) { localStorage.setItem('qm_session', JSON.stringify(user)); }
function loadSession() { try { const s = localStorage.getItem('qm_session'); if (s) return JSON.parse(s); } catch(e) {} return null; }

function updateLoginBtn(user) {
  currentUser = user;
  const container = document.getElementById('authButtons');
  if (!container) return;
  if (user) {
    const initial = user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase();
    container.innerHTML = '<div class="user-circle" onclick="handleLogout()" title="'+(user.name||user.email)+'">' + initial + '</div>';
  } else {
    container.innerHTML = '<button class="btn-auth-login" onclick="openLoginModal()">Log in</button><button class="btn-auth-signup" onclick="openLoginModal(); switchTab(\'signup\')">Sign up for free</button>';
  }
}

function handleLogout() {
  const s = loadSession();
  const name = s ? (s.name || s.email) : 'User';
  if (confirm('Logged in as: ' + name + '\n\nLogout karna chahte hain?')) {
    localStorage.removeItem('qm_session');
    currentUser = null;
    updateLoginBtn(null);
  }
}

function openLoginModal() { document.getElementById('loginModal').classList.add('open'); }
function closeLoginModal() { document.getElementById('loginModal').classList.remove('open'); }
function closeLoginModalOutside(e) { if (e.target === document.getElementById('loginModal')) closeLoginModal(); }

function switchTab(tab) {
  // Not used in this simplified modal but kept for compatibility
}

// SHA-256 password hashing utility
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function goToStep2() {
  const email = document.getElementById('authEmail').value.trim();
  const msg = document.getElementById('authMsg1');
  if (!email || !email.includes('@')) {
    msg.className = 'modal-msg err'; msg.textContent = 'Valid email likho.'; return;
  }
  const users = getUsers();
  if (users[email]) {
    // Existing user → login
    document.getElementById('authStep1').style.display = 'none';
    document.getElementById('authStep2').style.display = 'block';
    document.getElementById('step2Email').textContent = email;
  } else {
    // New user → signup
    document.getElementById('authStep1').style.display = 'none';
    document.getElementById('authStep3').style.display = 'block';
    document.getElementById('step3Email').textContent = email;
  }
}

function backToStep1() {
  document.getElementById('authStep1').style.display = 'block';
  document.getElementById('authStep2').style.display = 'none';
  document.getElementById('authStep3').style.display = 'none';
}

async function doLogin() {
  const email = document.getElementById('step2Email').textContent;
  const pass = document.getElementById('loginPass').value;
  const msg = document.getElementById('loginMsg');
  if (!pass) { msg.className='modal-msg err'; msg.textContent='Password zaruri hai.'; return; }
  const users = getUsers();
  const user = users[email];
  if (!user) { msg.className='modal-msg err'; msg.textContent='Account nahi mila.'; return; }
  const hashed = await hashPassword(pass);
  if (user.pass === btoa(pass)) {
    // Migrate old base64 password
    users[email].pass = hashed;
    saveUsers(users);
  } else if (user.pass !== hashed) {
    msg.className='modal-msg err'; msg.textContent='Password galat hai.'; return;
  }
  msg.className='modal-msg ok'; msg.textContent='✅ Login successful!';
  const u = {email, name: user.name}; saveSession(u); updateLoginBtn(u);
  setTimeout(closeLoginModal, 800);
}

async function doSignup() {
  const email = document.getElementById('step3Email').textContent;
  const name = document.getElementById('signupName').value.trim();
  const pass = document.getElementById('signupPass').value;
  const msg = document.getElementById('signupMsg');
  if (!name||!pass) { msg.className='modal-msg err'; msg.textContent='Sab fields fill karo.'; return; }
  if (pass.length<6) { msg.className='modal-msg err'; msg.textContent='Password 6+ chars ka ho.'; return; }
  const users = getUsers();
  if (users[email]) { msg.className='modal-msg err'; msg.textContent='Email already registered hai.'; return; }
  const hashed = await hashPassword(pass);
  users[email]={name,pass:hashed}; saveUsers(users);
  msg.className='modal-msg ok'; msg.textContent='✅ Account bana gaya!';
  const u = {email, name}; saveSession(u); updateLoginBtn(u);
  setTimeout(closeLoginModal, 800);
}

// Init
currentUser = loadSession();
updateLoginBtn(currentUser);
document.addEventListener('keydown', e => { if (e.key==='Escape') closeLoginModal(); });
