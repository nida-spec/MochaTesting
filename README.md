# MochaTesting
The repository consists of two JS files: 
- index.js: it contains the implementation code
- indexTest.js: it contains the test code of index.js

Index.js has four functions, one for each arithmetic calculation. It includes functions for: addition, subtraction, multiplication and division.
The division function is written as a ternary operation. The four functions are exported using 'module.exports' which is a built-in object in the Node.js runtime environment.

Inside the test file, I have used 'require' to import the assert module. Similarly, to import my functions from index.js I have also used 'require' and stored my index.js file
inside a constant called 'calculator'.
I have grouped my test suites using the describe() block. There is a main describe() block for my index.js testing and nested inside are describe() blocks for the testing of
each of the functions. To make my test suite more expressive, I have used it() blocks for each function describing what the function does.
Assert.strictEqual() is being used to compare values, it performs a '===' comparison. If the result value is strictly equal to the expected value then the test suite will pass,
otherwise the test suite will fail.
