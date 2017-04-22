//v7 requirements
// start crafting user interface vs console

// r1: there should be a "display todos" button and a "toggle all" button in the app
-- this is accomplished via HTML
// r2: clicking "display todos" should run todoList.displayTodos
// r3: clicking "toggle all" should run todoList.toggleAll

// We're going to hear about the DOM - Document Object Model
// HTML is plain text that gives the broswer info about the page but the DOM is what the browser understands this document to be
// The broswers interpretation of your HTML is the DOM
// http://www.w3schools.com/js/js_htmldom.asp
// https://css-tricks.com/dom/
// great explanation: "JavaScript is a language that the browser reads and does stuff with. But the DOM is where that stuff happens. In fact a lot of what you might think of as a "JavaScript Thing" is more accurately a "DOM API"."
// The DOM is organized in a family tree; each element is also referred to as a node

// okay back to requirements
//  you can access the DOM inside of our javascript via the console and typing document
// The DOM has methods that you can use to access various elements on the page
// for example, the document object, has the "getElementbyID" method that allows you to access any element by their id name

// Also, it's best to add your script tag to the bottom of the body tag because otherwise, the script will load before any of the elements needed have been loaded. You can't access something that hasn't been created yet

// r2: clicking "display todos" should run todoList.displayTodos
// we want access to display todos button
var displayTodosButton = document.getElementById("displayTodosButton");


// want to run displayTodos() method when someone clicks the todos button
// to do this, we can use an EventListener, which listens for an event to happen and then it will do "x"
displayTodosButton.addEventListener("click", function(){ 
	// this is a method on the displayTodosButton, and when the click happens it will run the function
	todoList.displayTodos();
	// this will still display in the console but it's activated via the browser user interface
	
}); 

// r3: clicking "toggle all" should run todoList.toggleAll
var toggleAllButton = document.getElementById("toggleAllButton");
toggleAllButton.addEventListener("click", function(){ 
	todoList.toggleAll();
	
	
}); 

// learning which event listeners and DOM methods take arguments 

