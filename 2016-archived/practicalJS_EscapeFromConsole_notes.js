// v9 requirements
// r1: there should be an li element for every todo
// r2: each li element should contain .todoText property
// r3: each li element should display .completed property

// first we need to learn how to insert elements into the DOM
// this will allow us to dynamic add/delete items 

var todoLi = document.createElement("li");
// this allows you to dynamically insert an li tag into a preexisting ul or ol tag

// in order to access the ol or ul, you must querySelector
// this allows you to include a search term and it will do a query for that term whether it's a tag or class name, it's flexible

var todosUl = document.querySelector("ul");

//we're going to use the append child method to add the li to the ul

todosUl.appendChild(todoLi);


// r1: there should be an li element for every todo

// in the console, if you type view.displayTodos(); it will manually create new li items in the ul 
var view = {// responsible for was user sees

displayTodos:function(){
	var todosUl = document.querySelector("ul");
	var todoLi = document.createElement("li");
	todosUl.appendChild(todoLi);
}
	
};

// we're wrapping this in a for loop so that it works whenever we add a new item, it will create a new li

var view = {// responsible for was user sees

displayTodos:function(){
		
	for(var i = 0; i < todoList.todos.length; i++) {
		var todosUl = document.querySelector("ul");
		var todoLi = document.createElement("li");
		todosUl.appendChild(todoLi);
		
	};
}
	
	
	
};

// here we add innerHTML which clears out the list so youre not getting duplicate items - need more clarification

var view = {

displayTodos:function(){
	var todosUl = document.querySelector("ul");
	todosUl.innerHTML = ""; // this is intended to clear out the list before adding a new item if there are existing items on the list
	
	for(var i = 0; i < todoList.todos.length; i++) {
		var todoLi = document.createElement("li");
		todosUl.appendChild(todoLi);
	};
}
	
	
	
};

// r2: each li element should contain .todoText property
// add this line to the for loop within the view object/displayTodos function.
// the textContent is a property that allows you to set the text content
todoLi.textContent = todoList.todos[i].todoText;

// to run this add a new item on the list and then type
view.displayTodos();
// only then will it appear in the list as a bullet point

// r3: each li element should display .completed property

// pseudocode
// ( ) or (x) todoText
		// var todoTextWithCompletion = "";
		// if (todo.comopleted === true)
			//do this
		// else
			// do this
		
		//todoLi.textContent = todoTextWithCompletion;

// first we need to create a way to check to see if the list item was completed
// for the sake of ease, we created a variable for this
// and then we establish the conditions if it's true do this and if it's false (else) do that

// BONUS REQUIREMENT;
// INSTEAD OF TYPING view.displayTodos(); in order to refresh the list items, we want a way for this to be automatically updated on the page

// so were going to get rid of the displayTodos handler method, instead we're going to insert the views.displayTodos(); method at the end of each other handler so it automatically updates

// now we're out of the console
