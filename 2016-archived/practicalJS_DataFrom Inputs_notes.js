//Refactoring - the process of restructuring existing computer code - changing the factoring - without changing its external behavior
// sometimes the path between two different options for the same goal is very unclear



// this is not dry code
var toggleAllButton = document.getElementById("toggleAllButton");
toggleAllButton.addEventListener("click", function(){ 
	todoList.toggleAll();
	
	
}); 

// making the above dry

var handlers = {
	//all methods that handle different events will be inside this object 
	displayTodos:function(){ 
		todoList.displayTodos();
	},	
	toggleAll: function(){ 
		todoList.toggleAll();
	}
	
};

//For v8, we have requirements for preexisting methods but no buttons/controls to activate them
// What makes these different is that each of these methods requires user input, text/numbers/etc
//r1: it should have working controls for .addTodo

addTodo: function(){
		var addTodoTextInput = document.getElementById("addTodoTextInput");
		todoList.addTodo(addTodoTextInput.value); //here instead of adding what I add via console, it takes the value from the input tag in the web form
		addTodoTextInput.value = ""; //this will clear the input box after you add the new todo item
	}
// <button onclick="handlers.addTodo()">Add</button> in HTML


//r2: it should have working controls for .changeTodo - learned about a new value type
changeTodo: function(){
		var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
		var changeTodoTextInput = document.getElementById("changeTodoTextInput");
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);//valueAsNumber extracts the value as a number only, not a string - VERY IMPORTANT
		changeTodoPositionInput.value = "";
		changeTodoTextInput.value = "";
		
	}

//r3: it should have working controls for .deleteTodo
deleteTodo: function() {
		var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = "";
	},

//r4: it should have working controls for .toggleCompleted
toggleCompleted: function(){
		var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = "";
		
	}
	

