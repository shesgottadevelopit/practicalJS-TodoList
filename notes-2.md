## Notes on Practical JavaScript - 2017 - Part 2
Includes versions 4-7

Link to asking the right questions [here](https://medium.com/@gordon_zhu/how-to-be-great-at-asking-questions-e37be04d0603).

## Version 4: Booleans

Requirements:
1. todoList.addToto should add objects; right now it's only adding text; will change from an array of text to an array of objects. these new objects will have to properties that describe aspects of the object
2. todoList.changeTodo should change the todoText property
3. todoList.toggleCompleted should change the completed property on the object, between true (completed) and false (not completed)

##### Requirement 1: Convert todoList.addTodo from adding arrays of text to arrays of objects
One reason we're doing this is because objects allow us to represent more data than just text

```javascript
= {
    todoText: "item 1",
    completed: false, // boolean value
}
```
First step is to delete the items in the `todos` array and make it an empty array
```javascript
var todoList = {
// r1 : todoList.addTodo should add objects
    todos: [], // it previously was ['item 1', 'item 2', 'item 3']
}
```

And then modify the addTodo function/property of the todoList object:
```javascript
addTodo: function (todoText) {
    // here we're replacing the variable "newtodo" with an object with properties of todoText and completed.
    this.todos.push({
        todoText: todoText, // the user will input this and it will be stored in the object
        completed: false;
    });
    this.displayTodos();
},
```
##### Requirement 2: todoList.changeTodo should change the todoText property
Now we want to change make sure that the `changeTodo` function/property of todoList only changes the todoText property of `addTodo`. It's important because we now also have the completed property and we don't want to target that here yet.

Below we're changing the second parameter in the function so that it references the todoText value established above

```javascript
changeTodo: function(position, todoText) { // new parameter
    //this.todos[position] = newValue; CHANGES TO BELOW

    this.todos[position].todoText = todoText;  // here we're targeting the object within an object and that property of todoText so we can extract the value of todoText which is a user inputted variable
    this.displayTodos();
},
```
##### Requirement 3: todoList.toggleCompleted should change the completed property on the object, between true (completed) and false (not completed)

So here we're creating a new method called toggleCompleted.

```javascript
toggleCompleted: function(position) {//we need to be able to target that specific object item
    var todo = this.todos[position]; // targets the specific object in an array of objects at a particular position
    // also this saves typing, because if we didn't name the variable, we'd have to type this.todos[position].completed and also !this.todos[position].completed below

    todo.completed = !todo.completed; // this accesses the completed property of that object and swtiches it to the opposite of that using a boolean value
    this.displayTodos();
}

```
## Version 5: Loops of Logic

Review `for` Loops
Below is an example of how a `for` loop would operate in real life:

```javascript
i = 0  --> // called Initialized; you need to create a variable to keep track of how many times you're doing something
Say "hey" if i < 3 // Condition; If this is true, keep going; otherwise stop
Increase i by 1 // Final-expression; this will happen after each round
it will then print hey starting from a count of 0 until you've reached 3 and then it won't print anymore
```
This is how this would look if it ran:
---
0 "hey"
1 "hey"
2 "hey"
3 - stops because the count has reached 3 and the condition is no longer true

To convert this human loop to code we'd do the following format:

```javascript
//Basic format
for (initialization; condition; final-expression) {
	console.log("hey");
}
```

Then then becomes
```javascript
for (var i = 0; i < 3; i ++) {
    console.log("hey");
}
```

###### Looping over Arrays
This allows us to use the for loop to iterate through items in an array and then print  the contents of an array as well

```javascript
var testArray = ['item1', 'item2', 'item3']
for (var i = 0; i < 3; i++) { // i++ is shorthand for i = i + 1
    console.log(testArray[i]);// this will print out each array item
}

var testArray = ['item1', 'item2', 'item3']
for (var i = 0; i < testArray.length; i++) { // using the .length property for arrays is better than hardcoding a number because it's more dynamic. In this case, it will equal to 3
    console.log(testArray[i]);// this will print out each array item
}
```

**Version 5 requirements:**
1. .displayTodos should show .todoText
2. .displayTodos should tell you if .todos is empty
3. .displayTodos should show .completed


##### Requirement 1: .displayTodos should show .todoText

The basic LOOP format
```javascript
for (var i = 0; i < this.todos.length; i++) {

	console.log(this.todos[i].todoText);
}
```
Now let's edit the todoText that we want to displayTodos

```javascript
displayTodos: function() {
    console.log("my todos:"); // we're deleting " console.log("My Todos:", this.todos)" because we don't need it displaying the Objects in the console, just the actual todoText
	for (var i = 0; i < this.todos.length; i++) {

	console.log(this.todos[i].todoText); // this will allow us to access the actual text and not just the item in the array and print that text

}
  },
```

##### Requirement 2: .displayTodos should tell you if .todos is empty

 An if/else statement will be helpful here to evaluate this condition.

 ```javascript
 // an if statement format is
 if (condition) {
	 // code that runs if this is true;
 } else {
     // code that runs something else
 }
```

Now let's try some pseudocode:
```javascript
if todos.length = 0
	console.log("Your todo list is empty!");
else
	print the todos list as normal
```
**That pseudocode translates to:**

```javascript
if (this.todos.length === 0) { // this is the strictest form of comparison
		console.log("Your todo list is empty!");
	} else {
        // print as normal, you can't run that unless you know your todo list has items
    	console.log("my Todos:");
    	for (var i = 0; i < this.todos.length; i++) {

    	console.log(this.todos[i].todoText);

    	}
    }
```
##### Requirement 3: .displayTodos should show .completed
Now we're going to create a faux toggle to display whether a todo item is completed or not. This will also involve an if/else statement. So we're adding logic to our for loop to check if completed is true or nah

Let's start with pseudocode:
```javascript
if (this.todos[i].completed === true) {
	// do this;
} else {
	// do this
}
```

Converting that to actual code:

```javascript
if (this.todos[i].completed === true) {
	console.log("(x)", this.todos[i].todoText);
} else {
	console.log("()", this.todos[i].todoText);
}
```

We'll need to delete the following line from the code above since the output `todoText` will already be included right next to the text indicating whether the item is completed or not.
`console.log(this.todos[i].todoText);`

So basically:
1. First it checks to see if the list is empty or not. And if it is, it just outputs a string saying "your list is mad empty"
2. If the list is not empty, then it checks the length of the list and begins looping through.
3. While looping through each item, it will check to see if the todo is completed and then output both the todoText and the completed status.

Now to test this, add some todo items and it will list everything. You can also use the `todoList.toggleCompleted(0)` it will toggle between whether the item is completed or not.


##### Review:
Concepts covered in this course:
1. for loops
2. if/else logic statements
3. the length property on arrays

## Version 6: Thinking in Code
In this section, we're adding a new feature that allows us to toggle all the todo items as completed or not completed.

Gordon reviewed the TodoMVC example on the site and explained how toggling all will turn everything to completed if the list is partially completed. It will toggle as incomplete only if all list items are already listed as completed

It's helpful to understand what you're trying to do before beginning the coding process, to know limitations and to help you get a grasp of how you'll structure your code

**Version 6 requirements:**
1. .toggleAll: If everything's true, make everything else false
2. .toggleAll: Otherwise, make everything true

First we'll need to be able to compare how many todos are marked as completed versus total number of todos period. So we use a comparison operator:  
```javascript
if (completedTodos === totalTodos){
    //make everything false
} else {
    //make everything true
}
```

The only issue now is that we have these variables that represent numbers but they don't already exist in our code, so we have to initialize them and declare them.

```javascript
var totalTodos = this.todos.length;
```
For `completedTodos` we'll need to iterate/loop through each todoList item and increase by one if it is completed, since there is no property that will automatically tell us this value.

We're starting at 0 for completedTodos and then use a for loop to count everything
```javascript

var completedTodos = 0;
for (var i = 0; i < totalTodos; i++) {
    if(this.todos[i].completed === true) {
        completedTodos++;
    }
}
 ```
So we're using the `i` variable to help us loop through the object/array completed property. If it finds that a completed property is true, then it will add that to the counter and store that value in the `completedTodos` variable for later.

All of the above is just helping us get actual numbers to work with for our comparison. Now that we've initialized and defined those variables we can return to this:
```javascript
if (completedTodos === totalTodos){
    //make everything false
} else {
    //make everything true
}
```
We'll need to loop through again now that we have variables holding the values and compare.

```javascript
if (completedTodos === totalTodos){
    for(var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
    }
    //make everything false
} else {
    //make everything true
}
```
And then make sure to add `displayTodos()` after the if statement so that it will show us the changes.

Now for the else statement, we'll have to loop through the list of todo items and change everything to true, so of course we'll need to utilize the for loop again. The difference here is the output is now true.

```javascript
else { //Otherwise, make everything true
      for(var i = 0; i < totalTodos; i++) {
      this.todos[i].completed = true;
      }
  }
```
**It feels like using `this.todos[i].completed = true` should be sufficient but without the loop, it doesn't give us the opportunity to go through each list item and actually change it the completed property. Without that loop, it is just a statement with no action.**

## Interlude: Data types and comparisons

In this section we review various data types, two main categories:

1. Objects (can be as complex as you want)
  - { denote an object }; include arrays, functions
  They can be as complicated as we need them to be

2. Primitives (simple building blocks of the language). They have one form so you can't make them super complicated
    - String // "Hello World"
    - Number // 1, 2, 3, 4
    - Boolean // true, false
    - Undefined // value that hasn't been set
    - Null // explicitly means "Nothing"

**Comparisons w/ primitives**  
- Works the same as it would w/ basic math comparison 1 === 1; true === true; etc
- JS compares the actual values of the data

**Comparisons w/ objects**  
They are completely different from comparisons with primitives.

If you add the following into your console `{} === {};` which is a comparison of objects. It will return as false, even though both are empty.  

**Why is this?**
- JS is not concerned with how the object appears; it's concerned with if it's the same object
- when you create an object, JS saves the object at a unique place in the memory, ie memory address also called `references`
- The only time when an object comparison will be true is when it's the same object, see example below where we've stored an object in a variable name which makes it easier to compare them

**Comparing the same object**  
```javascript
var houseA = {};
houseA === houseA
>> true
```
This will be helpful to know later when I come across "passing things by values" and "passing things by references".

## Version 7: HTML and the DOM

We've reached our limit on what we can do in the web console, so now we need to start transitioning to a user interface because we don't expect the users of our todo list app to work inside the console.

**Version 7 requirements:**
1. there should be a "display todos" button and a "toggle all" button in the app; this is accomplished via HTML
2. clicking "display todos" should run todoList.displayTodos
3. clicking "toggle all" should run todoList.toggleAll

DOM - Document Object Model
- HTML is plain text that gives the browser info about the page but the DOM is what the browser understands this document to be
- The browser's interpretation of your HTML is the DOM

**The Lynda.com JS Essential course helps explain what the DOM is and how it relates to HTML and JS. So if anyone is reading this, I'd suggest you check out their resource**

This course's explanation: "JavaScript is a language that the browser reads and does stuff with. But the DOM is where that stuff happens. In fact a lot of what you might think of as a "JavaScript Thing" is more accurately a "DOM API"."

- The DOM is organized in a family tree; each element is also referred to as a node
- You can access the DOM inside of our javascript via the console and document
- The DOM has methods that you can use to access various elements on the page, for example, the document object, has the "getElementbyID" method that allows you to access any element by their id name

__Aside: It's best to add your script tag to the bottom of the body tag because otherwise, the script will load before any of the elements needed have been loaded. You can't access something that hasn't been created yet__

Now to actually work on our project requirements:

##### Requirement 1: there should be a "display todos" button and a "toggle all" button in the app
We'll accomplish this in HTML using the following:

```HTML
<!-- display todos button-->
<button id="displayTodosButton" class="display-todos">Display Todos</button>

<!-- toggle all button-->
<button id="toggleAllButton" class="toggle-all">Toggle All</button>
```

##### Requirement 2: clicking "display todos" should run todoList.displayTodos
We need to figure out how we can access the buttons through JS. If you type document in the console, it will print the actual document

Two steps of this requirement include:
1. we want access to display todos button
2. we want to run displayTodos method when a user clicks this button

To access the displayTodos button, we'll need to create a variable in our JS file and then use the document's METHODS to select specific elements:

```javascript
var displayTodosButton = document.getElementById("displayTodosButton");
```
Insert this at the bottom of our JS file outside of the object and test using `console.log(displayTodosButton);`

Next we need to run the `displayTodos();` method on a user click. We can do that with an event listener.

```javascript
displayTodosButton.addEventListener("click", function(){
	// this is a method on the displayTodosButton, and when the click happens it will run the function
	todoList.displayTodos(); // this will still display in the console but it's activated via the browser user interface

});
```

##### Requirement 3: clicking "toggle all" should run todoList.toggleAll

This will follow a very similar formula as the previous requirement:
```javascript
var toggleAllButton = document.getElementById("toggleAllButton");

toggleAllButton.addEventListener("click", function() {
    todoList.toggleAll();
});

```
