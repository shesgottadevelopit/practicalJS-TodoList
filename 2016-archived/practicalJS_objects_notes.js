// What is an object???
// You use objects in JS to group related data and functions together

// For example: you have a computer

operatingSystem windows
screenSize 14 inches
purchaseYear 2014

{ // objects are included in curly braces - this is OBJECT LITERAL NOTATIN 
	operatingSystem: "windows", // each item is a property is separated by commas
	screenSize: "14 inches", // syntax is property:value, 
	purchaseYear: 2014
	
}
// if you want to use this, create a variable for italics
var myComputer = { // objects are included in curly braces
	operatingSystem: "windows", // each item is a property is separated by commas
	screenSize: "14 inches", // syntax is property:value, 
	purchaseYear: 2014
	
}

// to just select one property of the object myComputer you can do objectname.property

myComputer.operatingSystem; // this will return "windows"

// What's the relationship between an object and a function??? 
// you can place functions on objects

//creating a new object representing a person:

var Akudo = {
name: "Akudo",
sayName: function sayName() { // the function is a value of the property sayName ; you can leave out the function name if you choose
console.log(this); // to reference the object you're on, you use "this" which refers to this person object
}
}

// if you call the function akudo.sayName(); it will print out the entire object but we only want the property "name" and it's values
// in order to retrieve that you would modify the console.log portion to "this.name" because it refers to this object and the name property - levels of specificity; see below

var akudo = {
name: "Akudo",
sayName: function sayName() {
console.log(this.name);
}
}

// this concept of putting a function on an object is so common that it has a name, it's called a method
// a method is an object property that is equal to a function *lightbulb*
// sayName is a method on the akudo object

// V3 requirements

// r1: It should store the todos array on an object
// r2: It should have a displayTodos method
// r3: It should have an addTodo method
// r4: It should have a changeTodo method
// r5: It should have a deleteTodo method

// this is an object
var todoList = {
  todos: ["item1", "item2", "item3"], // r1: It should store the todos array on an object
  displayTodos: function() { // r2: It should have a displayTodos method
    console.log("My Todos:", this.todos);
  },
  addTodo: function(todo) { // r3: It should have an addTodo method
    this.todos.push(todo);
    this.displayTodos(); 
  },
  changeTodo: function(position, newValue) { // r4: It should have a changeTodo method
    this.todos[position] = newValue;
    this.displayTodos(); 
  },
  deleteTodo: function(position) { // r5: It should have a deleteTodo method
    this.todos.splice(position,1);
    this.displayTodos();
    
  },
  insertTodoPriority: function(position, insertValue) { //rBonus: my own function for adding an item at a particular point
	  this.todos.splice(position, 0, insertValue);
	  this.displayTodos();
  }
  
};

//to call the methods for this object, you would need to write:
// objectname.methodname();

todoList.addTodo("new item");
todoList.deleteTodo("1");



