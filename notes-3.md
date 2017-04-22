## Notes on Practical JavaScript - 2017 - Part 3
Includes versions 8-11

- introduced Glitch (was previously hyperdev i think)  
[Glitch link](https://rift-music.glitch.me/)

## Overview of Debugging Tools

When your code is not doing what you'd expect and those mistakes are called bugs. To fix those issues you would "debug".

In this section, we're going to "step through" the `displayTodos` method of the `todoList` object. To do this, we're going to type `debugger` within our code:

```javascript
var todoList = {

    todos: [], //emptied the array so it doesn't come with text filled in

    displayTodos: function() {
        // INSERT DEBUGGER HERE ***********************************
        debugger;


        if (this.todos.length === 0) {
            console.log("Your todo list is empty");
        } else {
            console.log('my todos'); // will access THIS objects todos property
            for (var i = 0; i < this.todos.length; i++ ) {


                //adds logic for if the todo item is completed
                if(this.todos[i].completed === true){
                    console.log("(x)", this.todos[i].todoText);
                } else {
                    console.log("( )", this.todos[i].todoText);
                }
            }
        }
    },
}
```
Then you'll run your script in the console. The code will now pause at `debugger`. And then we can use various debugger functions to walk through the code line by line as it executes:

**Various debugger functions:**
- Step Over
- Step Into next function
- Step out off current function


We're going to add debugger at various breakpoints throughout each of the `todoList` methods.

**Tidbits:**
- If you hover over variables and values in the code, you can see more details about each one. So if you hover over `this.todos.length === 0` at the start of this in the debugger, it will tell you the current length will be 0 if you haven't added any todo list items
- Using the various debugger functions allows you to see how various components of your code work on a granular level, especially the inner workings of loops. If you step into a function with a for loop, it will walk you through every condition until the loop can no longer run

---
**Focus on understanding, not building from scratch**
- A lot of tutorials "fail to set reasonable expectations about what your abilities should be. And because they fail to do that, you have these outsized unrealistic expectations and you default to thinking "I should be able to build the app from scratch too". A WORD
- Focus more on understanding
- Trying to memorize everything is a losing battle


## Version 8: Getting Data From inputs

We're going to refactor our code, which is a process of improving non-functional attributes of the app. It will make the code easier to read, not necessarily change functionality.

The way we created our buttons requires too much code repetition. A common concept in programming is DO NOT REPEAT... DRY and our current way of doing that doesn't follow those guidelines.

```javascript
// this is not DRY code
var toggleAllButton = document.getElementById("toggleAllButton");
toggleAllButton.addEventListener("click", function(){
	todoList.toggleAll();
});
```

So we want to create a button that will allow us to easily activate our various buttons (add, delete, change, toggle).

- We'll replace the ID attribute of our HTML buttons with an `onclick` attribute and the value of that attribute will the function we want to run.

Now we're going to create a new object called "handlers" and it will include methods that handle different events inside this object:

```javascript
var handlers = {
    displayTodos:  function(){
    	todoList.displayTodos();
    },
    toggleAllButton: function(){
        todoList.toggleAllButton();
    },
}
```

And these will replace the not DRY addEventListener function I mentioned above. To call this function from HTML, we'll need to call the functions using the following:
```HTML
<!-- display todos button-->
<button onclick="handlers.displayTodos()" class="display-todos">Display Todos</button>

<!-- toggle all button-->
<button onclick="handlers.toggleAll()" class="toggle-all">Toggle All</button>

```
__I had to comment out some of my previous scripts in HTML because I removed the IDs.__

This type of refactoring is important to learn because a lot of times as you continue to learn and develop apps, you will figure out how to make things "just work" which is the primary concern. You won't get everything perfect the first time, so refactoring is like editing and refining your previous logic (similar to writing and essay draft).

**Requirements:**
1. it should have working controls for .addTodo
2. it should have working controls for .changeTodo
3. it should have working controls for .deleteTodo
4. it should have working controls for .toggleCompleted

These different methods require actual inputs so they're different from our previous buttons.

##### Requirement 1: it should have working controls for .addTodo
- Lets start with HTML and add our button
- Then we'll add an input element for our text. On the input tag, we'll also give it a special ID

Then move on to the JS and create a new method on the handlers object for the `addTodos` method of `todoList`

```javascript
addTodo: function() {
    var addTodoTextInput= document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = ""; // this will clear the input after you've added an item
},
```
Note we need to use `.value` on the `addTodoTextInput` variable to access the actual value through the DOM. Using `addTodoTextInput` alone will return the entire element and it's children

Also, we have to add the variable to `todoList.addTodo(variable)` instead of the handlers `addTodo` function because this function only handles events and the other one handles input changes ... I think; sort of like isolation of concerns

And to activate this we'll add the following html: `<button onclick="handlers.addTodo()" type="button" name="button">Add</button>`


##### Requirement 2: it should have working controls for .changeTodo

Now we're going to add the changeTodo button, starting with the HTML:
```HTML
<button onclick="handlers.changeTodo()">Change</button>
<input type="number" id="changeTodoPositionInput">
<input type="text" id="changeTodoTextInput">
```

And now let's create the new method for this on the `handlers` object

```javascript
changeTodo: function() {
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = "";
    changeTodoTextInput.vaue = "";
}
```
For the position of todoList item we want to change, we have to use `valueAsNumber` because that is a different data type so the DOM has a different way of handling that than say just `value` which we can use for plain text.

As we did before, we'll also clear the inputs after we've changed a todo, resetting it.

##### Requirement 3: it should have working controls for .deleteTodo
We'll first create our HTML which will include the button and input (so we can tell which item we want to delete).
```HTML
<button onclick="handlers.deleteTodo()">Delete</button>
<input type="number" id="deleteTodoPositionInput">

```

The JS will include the handlers method we'll use to activate an event listener.
```javascript
deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
}
```

##### Requirement 4: it should have working controls for .toggleCompleted

For `toggleCompleted` we'll do something similar... this is my 2nd attempt at doing it alone. we'll see if it works out:

```HTML
<button onclick="handlers.toggleCompleted()">Toggle Completed</button>
<input type="number" id="toggleCompletedPositionInput">
```

And the JS:
```javascript
toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
}
```

It worked!!

## Version 9: Escape from the Console
In this version we'll see all of our commands on the HTML document and not in the console.


**Requirements:**
1: There should be an `<li>` element for every todo
2: each `<li>` element should contain .todoText property
3: each `<li>` element should display .completed property

In order to do this we'll need to do the following:
- Learn how to insert elements into the DOM
- Learn how to dynamically add/delete items

Let's begin:
First create an unordered list to the document. We won't hardcode the list items into our HTML, we'll use JavaScript to dynamically add that on-the-fly doing the following:

```javascript
var todoLI = document.createElement("li");
// we're using the createElement method to create a new element
```
Then we need to find a way to insert that li item into the document because now it's kind of floating in the interwebs... So we can use the method `querySelector` to grab the existing `<ul>` on the page.

```javascript
var todoUL = document.querySelector("ul");

```
Pause video ... Now to add it to the `<ul>` we'd use `appendChild`? Right ....

BINGO!! I remember that.

```javascript
todoUL.appendChild(todoLI);
```
And that is how we're going to insert a list item for each new todo, but in our code it will happen whenever we activate the addTodo item, versus working in the console


##### Requirement 1: There should be an `<li>` element for every todo

We're going to create a new object in our code called `view` and it will be responsible for what the user sees

```javascript

var views = {
    displayTodos: function(){
        var todosUL = document.querySelector("ul");
        var todoLI = document.createElement("li");
        // all the code from above

        todosUL.appendChild(todoLI);
    }
}

```
Now if you write `views.displayTodos();` in the console. It will create a new list item. But we want this to happen for each list item we create without having to type that into the console, but through say the buttons we created earlier.

So we'll use a loop to iterate through the number of list items and create list item for as many todo list items exist on the list:

```javascript
var views = {
        displayTodos: function(){

        for(var i = 0; i < todoList.todos.length; i++) {
            // here we're targeting the todoList object and the todos property of that object to get it's length, not just the length of the todoList

            // very important since that caused an error in my code


            var todosUL = document.querySelector("ul");
            var todoLI = document.createElement("li");
            // all the code from above

            todosUL.appendChild(todoLI);
        }
    },
}

```
When you call `views.displayTodos();` then you're able to see it creates a list item for each todo. One issue with this is that when you call that method again, it will add another list item. So instead of showing just one list item, it now shows two. We need to find a way to make `displayTodos` only reflect the number of todo list items regardless of how many times we call the method.

To remedy this we're going to move the `var todosUL` outside of the for loop. We're also going to reset the UL at the beginning of the loop so that every call of `displayTodos()` will yield a fresh list. We'll do this by using the `innerHTML` method of the DOM.

```javascript
displayTodos: function(){
    var todosUL = document.querySelector("ul"); // todosUL outside of loop
    todosUL.innerHTML = ""; //clear out the list if one exists

    for(var i = 0; i < todoList.todos.length; i++) {

        var todoLI = document.createElement("li");
        todosUL.appendChild(todoLI);

    }
}
```


##### Requirement 2: each `<li>` element should contain .todoText property
To add the content of the .todoText property which contains the names of our todos, we need to use a DOM method `textContent` that will allow us to apply it.

```javascript
todoLI.textContent = todoList.todos[i].todoText;

```
Easy! Now when you add a todo and then type in the `views.displayTodos()` that todo item will appear on the page and in the console.

Using `textContent` is better than `innerHTML` because the former really only pulls the text content. Depending on the element, `innerHTML` could pull actual HTML tags of child elements.

##### Requirement 3: each `<li>` element should display .completed property

Using this method, we're going to concatenate the completed property with the actual name of the todo, so we need to find a way to retrieve the completed property of each array item and evaluate as true or false and then output a string reflecting that.

Pseudocode
```javascript
        // ( ) or (x) todoText
		var todoTextWithCompletion = "";
		if (todo.completed === true)
			//do this
		else
			// do this

		todoLi.textContent = todoTextWithCompletion;

```

Converting that to actual JS code:

```javascript
var views = {
    displayTodos: function(){
        var todosUL = document.querySelector("ul");
        todosUL.innerHTML = "";

        for(var i = 0; i < todoList.todos.length; i++) {

            var todoLI = document.createElement("li");

            var todoTextWithCompletion = "";
            var todo = todoList.todos[i];

            if(todo.completed === true) {
                // do something
                todoTextWithCompletion =" ( x ) " + todo.todoText;
            } else {
                // do something
                todoTextWithCompletion =" (  ) " + todo.todoText;
            }

            //todoLI.textContent = todoList.todos[i].todoText;
            todoLI.textContent = todoTextWithCompletion;
            todosUL.appendChild(todoLI);

        }
    }
};
```
Above, we replaced the `todoLI.textContent = todoList.todos[i].todoText;` with `todoLI.textContent = todoTextWithCompletion` since we need that completion component.

Wrapping Up:

INSTEAD OF TYPING `view.displayTodos();` in order to refresh the list items, we want a way for this to be automatically updated on the page
- We're going to want to `displayTodos()` after each button event.
- So it makes sense to remove the displayTodos handler method, and insert the `views.displayTodos();` method at the end of each other handler so it automatically updates

Example:
```javascript

var handlers = {
    // COMMENTED OUT THE ORIGINAL DISPLAYTODOS METHOD
    /* displayTodos:  function() {
    	todoList.displayTodos();
    }, */
    addTodo: function() {
        var addTodoTextInput= document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = ""; // this will clear the input after you've added an item
        views.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.vaue = "";
        views.displayTodos();
    },

    // other code truncated
};
```

Now we're out of the console!

Now that we've escaped the console, we can clean up some parts of our code. For example, with `views.displayTodos()` running after each button event, we no longer need a button to actually appear on the page for that type of function.

So we can delete that from the HTML.

We can also delete every reference to `this.displayTodos()`; and the original `displayTodos` method on the todoList  object.

__I commented out everything in V9, will delete in later versions.__


## Review/Interlude: Functions inside of Functions

#### runWithDebugger
Another way to run a debugger is by wrapping a function in a generic function that starts with debugger. So:
```javascript
function runWithDebugger(ourFunction) {
    debugger;
    ourFunction();
}
```
To call this, we'd use:
```javascript
runWithDebugger(
    //INSERT FUNCTION
    function customFunction() {
        console.log("hey");
    }
);

```
With this, you'll be able to step through each statement of the function off jump.



#### setTimeout
If you wrap a function with `setTimeout` it will work as a sort of timer. Example:

```javascript
setTimeout(function() {
    console.log("wake up kudo");
}, 5000);

// what this is saying is that the program will wait 5 seconds before completing the function

```

#### forEach
Sometimes with JavaScript you want to run a function on every item in an array.

`var boys = ["mark", "matthew", "tony", "greg"];`

Then we have a function that logs a name and we want to log the name of every boy's name in the array

```javascript
function namePrint(boysName) {
    console.log(boysName);
}
```

There are a lot of ways to execute that code for each boy's name:
1. `namePrint(boys[1])` ; which will print the second item in the boys array
2. Creating a for loop with the following (this what what I've known to date)
```javascript
for (var i = 0; i < boys.length; i++) {
    namePrint(boys[i]);
}
```

Another option is the `forEach` method for arrays. This run the function you want over an array of items in more simpler syntax.

So the above would b replaced with: `boys.forEach(namePrint);` and it will print everything like it did with the for loop.

And you can write that in a lot of ways:
```javascript
boys.forEach(function namePrint(boysName){
    console.log(boysName);
    });

// or

boys.forEach(function(boysName){ // anonymous function
    console.log(boysName);
    });

```

We can also create our own forEach function that will behave similarly:
```javascript
function forEach(myArray, myFunction) {
    //we want our forEach function to run myFunction  on every array item
    for (var i = 0; i < myArray.length; i++) {
        myFunction(myArray[i]);
    }
}
```

So you could run that as `forEach(boys, namePrint)` and it will print the list of boys names.

Review, play around, and run through the debugger.


#### addEventListener
In Chrome, if you inspect a page element, a `$0` will appear next to it and you can use that in the console to target specific items.

You can save specific page elements as variables using `$0`

We can listen for various types of events using Event Listeners. Below is some code extracted from playing around in the console on the Mozilla JS page:

```javascript
$0 // references the Tutorials header on the page
>> <h2 id=​"Tutorials">​Tutorials​</h2>​

// store that value into a variables
var tutorialsElements = $0;

// if you type in tutorialsElements you'll get
tutorialsElements
>> <h2 id=​"Tutorials">​Tutorials​</h2>​

// you can add an eventlistener that will trigger if you click on Tutorials
tutorialsElements.addEventListener("click", function() {
console.log("tutorials element was clicked");
});

// You can also reference the actual event using something like
tutorialsElements.addEventListener("click", function(event) {
console.log(event);
});

// And that will print out an object with information about the event

```

#### Higher order functions and callback functions

New vocabulary:  
**1. Higher order functions**
  - functions that accept other functions and enhance the behavior of other functions
  - examples: runWithDebugger, setTimeout, addEventListener

**2. Callback functions**
  - functions that are passed into higher order functions

Lets see how that looks with previous functions:

```javascript
setTimeout(function consoleLog () {
    console.log("wake up kudo");
}, 5000);

// setTimeout is a higher Order function
// consoleLog is a callback function
```

## Version 10: Click to Delete

**Understanding the `return` statement**

```javascript
function multiply(x, y) {
    var result = x * y;
}

```

To run that, we'd do: `var product = multiply(2,10)`

But it won't return the result we want which is 20 because we didn't use the `return` statement.

If you don't return a value, by default it will be "undefined".

To fix that you'd add the following line:  
`return result;`

All together:
```javascript
function multiply(x, y) {
    var result = x * y;
    return result;
}

```

Requirements:
1: There should be a way to create delete buttons
2: There should be a delete button for each todo
3: Each li should have an id that has the todo position
4: Delete buttons should have access to the todo ID
5: Clicking delete should update todoList.todos and the DOM


##### Requirement 1: There should be a way to create delete buttons


##### Requirement 2: There should be a delete button for each todo


##### Requirement 3: Each li should have an id that has the todo position


##### Requirement 4: Delete buttons should have access to the todo ID


##### Requirement 5: Clicking delete should update todoList.todos and the DOM





## Version 11: Destroy all for loops
