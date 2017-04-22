## Notes on Practical JavaScript - 2017 - Part 1
Includes versions 1-3

## Introduction
Most courses focus on syntax and features but don't provide guidelines on how to build

Tools used:
- Chrome  
- [Plnkr.co ](http://plnkr.co/) OR CodePen
- [Todo MVC](http://todomvc.com/examples/vanillajs/)
- [Facebook group](https://www.facebook.com/groups/514043678767094/)

## Version 1: Arrays

Requirements
- Outline requirements for an app, what it should be able to do. Break down the project into little pieces that individual team members can work on one at a time if you're working on a development team
- Requirements give you focus so you work on one specific thing at a time
- Requirements also help you test the application for functionality once the project is completed

To-do app “requirements”:  
_They all start with "It Should" which is just a convention programmers have adopted._
1. It should have a place to store todos   
  - First you'd create a list using an array: `['item 1', 'item 2', 'item 3']`.  
  - In order to reference that array, you'd need to store it in a variable like `var todos = ['item 1', 'item 2', 'item 3']`
2. It should have a way to display todos  
  - Use `console.log(insert string or variable)` to print what you'd like
  - So type `console.log(todos)` or `console.log('My todos:', todos);`
3. It should have a way to add todos  
  - We can add a new item to an array using the .push method of the array. To add a new item you'd do `todos.push('item 4');` and it adds it to the very end. You can also add more `todos.push('item 5')`
4. It should have a way to change todos  
  - To change todos, you need a way to access each item in the array. You can do this by accessing the indices. For the first item, to target the first item you'd type `todos[0]` since computers are zero-indexed based. The second item would be `todos[1];`
  - To actually change the item, you'd reassign it using `todos[0] = 'my first item';` and that will change the content/value of the item stored within that index number
5. It should have a way to delete todos  
  - The `.splice(x, y)` method of the array allows you to delete items
  - Inside the parentheses, you need to add two values, x is the starting position, y is the number of array items you want to delete.
  - So you can add `todos.splice(0, 1)` will delete the first item and only one item
  - To delete the 3rd item you'd type `todos.splice(3, 1)`


## Version 2: Functions

Functions are just recipes (lol). Recipes save time. Anyone can just look at the recipe and follow the instructions. This way it distills to a single command

Recipes save time. Anyone can just look at the recipe and follow the instructions. This way it distills to a single plan

**Sandwich Recipe: makeTurkeySandwich**
1. Get one slice of bread
2. Add turkey
3. Put a slice of bread on top

To convert that to a function, you'd write the following:


```javascript
function makeTurkeySandwich() {
	Get one slice of bread;
	Add turkey;
	Put a slice of bread on top;
}
```

To get someone to make a recipe in English you'd say, "make a sandwich", but in JS you would call the function like `makeTurkeySandwich();`

#### Customizing functions
This saves time so you're not creating multiple recipes when you're just switching out one or two ingredients

makeSandwichWith____ with the blanks representing the type of sandwich/meat used
	1. Get one slice of bread;
	2. Add ______; this blank represents the type of meat used
	3. Put a slice of bread on top;

Our new function would be...
```javascript
function makeSandwichWith(filling) { //replaces the blank with a filling variable and insert it when you're calling the recipe
	Get one slice of bread;
	Add filling;
	Put a slice of bread on top;
}
```
To make a turkey sandwich you'd call `makeSandwichWith("turkey");` and you'd need to create a variable or put the filling in a string

Random notes:
1. The things inside the parenthesis when you're writing the function are called PARAMETERS
2. But when you're using the function, the things you put in the parenthesis are called ARGUMENTS

**random note: HIT SHIFT + ENTER TO WRITE MULTIPLE LINES IN GOOGLE CHROME CONSOLE**

In Version 2 of our app, we'll convert all of the individual statements into actual functions so that we can reuse the code and make it easier. The requirements are as follows:
1. It should have a function to display todos
2. It should have a function to add todos
3. It should have a function to change todos
4. It should have a function to delete todos

##### Requirement 1:
So `var todos = ['item 1', 'item 2', 'item 3'];` and     `console.log(todos)` will now be:
```javascript
function displayTodos() {
    console.log(todos);
}
```
##### Requirement 2:
```javascript
function addTodo() {
    todos.push("new todo");
    displayTodos(); // adding this will actually print the list so that we know a new item was added
}
```
To run this you can type `addTodos();` and it will automatically add the todo to the end of the list

Another way to add a todo is by creating a variable and passing that value into the function when we call it.
```javascript
function addTodo(newtodo) {
    todos.push(newtodo);
    displayTodos(); // adding this will actually print the list so that we know a new item was added
}
```
So when we call the `addTodo();` function we'd need to insert the variable like `addTodo("go grocery shopping");`

##### Requirement 3:
In order to change todos, we could import the previous statement: `todos[2] = "new items who dis"; ` into a function but that would cause every call of the changeTodos() function to only change the array item located at index 2. So we have to think about how to solve this problem in a way that allows us to create code that doesn't hardcode any particular indices into our function.

So we'll use parameters inside of the function. This will allow us to customize the index number and then the value that will be reassigned.
```javascript
function changeTodos(position, newValue) {
    todos[position] = newValue;
}
```
When you run `changeTodos();` you'll need to add the index number and the text as a string as parameters. Once it runs in the browser the todo will change. You can then add the `displayTodos();` function after so that it will display what was changed.


##### Requirement 4:

```javascript
function deleteTodo(){
    todos.splice(1,1); // this will delete the array item at position 1 and only one item
    todos.splice(2,2); //this will delete array item starting at position 2 and then the following one for a total of two items
}
```
##### Review
- Covered adding functions
- Covered creating variables to use as parameters within functions

## Version 3: Objects
You use objects in JS to group related data and functions together.

It helps to visualize them as real objects and what is unique about these real-life objects. For example a computer has:
- operatingSystem windows
- screenSize 14 inches
- purchaseYear 2014

You can translate this list into an object.
Surround the object by curly braces which denotes a new object.  __OBJECT LITERAL NOTATION__

```javascript
{
	operatingSystem: "windows", // each item is a property is separated by commas
	screenSize: "14 inches", // syntax is property:value,
	purchaseYear: 2014

}
```
If you want to use this, create a variable and assign the object to it.
```javascript
var myComputer = {
	operatingSystem: "windows",
	screenSize: "14 inches",
	purchaseYear: 2014
}
```
To just select one property of the object myComputer you can do `objectname.property` so:  
`myComputer.operatingSystem;` // this will return "windows"

##### Objects and functions
What's the relationship between an object and a function???
-You can place functions on objects

For example: create a new object representing a person
```javascript
var akudo = {
    name: "Akudo",
    sayName: function sayName() {
        // the function is a value of the property sayName ; you can leave out the function name if you choose and just call the function using the object's property sayName
    console.log(this); // to reference the object you're on, you use "this" which refers to this person object
    }
}
```

So the above function can also be written as:
```javascript
var akudo = {
    name: "Akudo",
    sayName: function() {
    console.log(this);
    }
}
```

If you call the function akudo.sayName(); it will print out the entire object but we only want the property "name" and it's values
In order to retrieve that you would modify the console.log portion to `this.name` because it refers to this object and the name property - levels of specificity; see below:

```javascript
var akudo = {
    name: "Akudo",
    sayName: function() {
    console.log(this.name);
    }
}
```


This concept of putting a function on an object is so common that it has a name, it's called a method
- a method is an object property that is equal to a function **\*lightbulb\***
- sayName is a method on the akudo object

#### Version 3 requirements

1. It should store the todos array on an object
2. It should have a displayTodos method
3. It should have an addTodo method
4. It should have a changeTodo method
5. It should have a deleteTodo method

##### Requirement 1: It should store the todos array on an object
```javascript
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    // this takes the var todos = [] from V1 and V2 and makes it a property instead of just a variable
}
```

##### Requirement 2: It should have a displayTodos method
```javascript
var todoList = {
    // previous code removed for length

    displayTodos: function() { //anonymous function
        console.log('my todos', this.todos); // will access THIS objects todos property
    },
}
```
##### Requirement 3: It should have an addTodo method
Our original function for adding todos is as follows:
```javascript
function addTodo(newtodo) {
    todos.push(newtodo);
    displayTodos(); // adding this will actually print the list so that we know a new item was added
}
```
And to convert to a method we'll do the following
```javascript
var todoList = {
    // previous code removed for length

    addTodo: function (newtodo) {
        this.todos.push(newtodo); // since we don't have a variable anymore , we can only refer to the array using the Todos property on THIS object
        this.displayTodos(); // this will allow us to run the function displayTodos() similar to the original, but calls it through the property of this object which houses the function
    },
}
```

##### Requirement 4: It should have a changeTodo method
The original `changeTodo` function was:
```javascript
function changeTodos(position, newValue) {
    todos[position] = newValue;
    displayTodos(); // adding this will actually print the list so that we know a new item was added
}
```

Now to convert that to a method we'd need to utilize `this` to refer to the positions of the todo list within THIS OBJECT. See below:
```javascript
var todoList = {
    // previous code removed for length

    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos(); // print the list so that we know a new item was added
    },
}
```

##### Requirement 5: It should have a deleteTodo method
Our original code for deleting a todo is as follows:
```javascript
function deleteTodo(position){
    todos.splice(position,1); // this will delete the array item at position 1 and only one item. One is hardcoded
    displayTodos();
}
```

To change this to a method we'd do:
```javascript
var todoList = {
    // previous code removed for length

    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    },
}
```
Bonus:
```javscript
  insertTodoPriority: function(position, insertValue) { //rBonus: my own function for adding an item at a particular point
	  this.todos.splice(position, 0, insertValue);
	  this.displayTodos();
  }

};
```
To call the methods for this object, you would need to write:`objectname.methodname();`
You can test the functionality of all of these by running the following commands in the console:
```javascript
todoList; // this will return everything within the object, functions and all
todoList.displayTodos();
todoList.addTodo("new todo");
todoList.changeTodo(1,"first"); // That should change the text of the second array item to "first".
todoList.deleteTodo(1); //will delete the item at position number 1
```
