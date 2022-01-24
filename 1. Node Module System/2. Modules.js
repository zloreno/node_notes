// In JS in the browser, functions are global objects
// and can be accessed via the window object
function sayHello() {
	console.log('Hello');
}
//window.sayHello();

// Issue is that in different files
// we could have stored functions with the same name
// New definition will override the old one

// Here comes into play MODULARITY
// Functions are private
console.log(module);

// In NODE every file is a module, and the variables and functions defined
// in that file are scoped in that module
