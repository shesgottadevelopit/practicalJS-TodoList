// Loops of Logic

//"for" loops - repeats code

// i = 0  --> //called Initialized; you need to create a variable to keep track of how many times you're doing something
// Say "hey" if i < 3 // Condition; If this is true, keep going; otherwise stop
// Increase i by 1 / Final-expression; this will happen after each round
// it will then print hey starting from a count of 0 until you've reached 3 and then it won't print anymore

//Basic format
for (initialization; condition; final-expression {
	console.log("hey");
}

for (var i = 0; i < 3; i++) { // i++ is shorthand for i = i + 1
	console.log("hey");
}

// there is no shorthand for i + 2, you have to write it outer

for (var i = 0; i < 3; i++) { // i++ is shorthand for i = i + 1
	console.log(i); // this will just return the actual numbers
}

// loops & arrays
var testArray = ['item1', 'item2', 'item3']
for (var i = 0; i < 3; i++) { // i++ is shorthand for i = i + 1
    console.log(testArray[i]);// this will print out each array item
}

var testArray = ['item1', 'item2', 'item3']
for (var i = 0; i < testArray.length; i++) { // using the .length property for arrays is better than hardcoding a number because it's more dynamic. In this case, it will equal to 3
    console.log(testArray[i]);// this will print out each array item
}

// v5 requirements:
// .displayTodos should show .todoText
// .displayTodos should tell you if .todos is empty
// .displayTodos should show .completed

// basic format - for loop 
for (var i = 0; i < this.todos.length; i++) {
	
	console.log(this.todos[i].todoText);
	
}

//.displayTodos should show .todoText 

displayTodos: function() { 
    console.log("My Todos:"); // we're deleting " console.log("My Todos:", this.todos)" because we don't need it displaying the Objects in the console, just the todoText
	for (var i = 0; i < this.todos.length; i++) {
	
	console.log(this.todos[i].todoText);
	
}
  },

  
  
 // .displayTodos should tell you if .todos is empty
 // it will use an if/else statement 
 
 // an if statement format is
 if (condition) {
	 // code that runs if this is true;
 }

 // if todos.length = 0
	// console.log("Your todo list is empty!");
	// else
		//print the todos list as normal
	
// that pseudocode translates to 
 if (this.todos.length === 0) {
		console.log("Your todo list is empty!")
	}
	else { // print as normal is the for loop code, you can't run that unless you know your todo list has items
	 console.log("My Todos:");
	for (var i = 0; i < this.todos.length; i++) {
	
	console.log(this.todos[i].todoText);
		
	}
	
// .displayTodos should show .completed
// write pseudocode to check if completed is true or false
if (this.todos[i].completed === true) {
	// do this; 
} else {
	// do this 
}	
// more specific
if (this.todos[i].completed === true) {
	console.log("(x)", this.todos[i].todoText); 
} else {
	console.log("()", this.todos[i].todoText); 
}

// how i tried to complete the code; IT DIDN'T WORK THE WAY I WANTED, PRINTED ON SEPARATE LINES
// if (this.todos.completed !== false) {
			// return "Not completed";
		// } else {
			// return "Completed";
		// }
		// console.log(this.todos[i].completed + ":" + this.todos[i].todoText);

// concepts covered in this course:
// for loops
// if/else logic statements
// .length property
// the i variable

