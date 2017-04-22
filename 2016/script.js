// todo list 

		
var todoList = {
  todos: [], // we eliminated the existing array items... not sure why
  
  // displayTodos: function() { //DON'T NEED THIS ANYMORE BECAUSE IT'S IN THE CONSOLE
    // if (this.todos.length === 0) {
		// console.log("Your todo list is empty!")
	// } else { // print as normal is the for loop code, you can't run that unless you know your todo list has items
		// console.log("My Todos:");
		// for (var i = 0; i < this.todos.length; i++) {
	
			// if (this.todos[i].completed === true) { // this checks the status of completed 
			// console.log("(x)", this.todos[i].todoText); 
			// } else {
			// console.log("( )", this.todos[i].todoText); 
			// }
			
			// }
	// }
  // },
  
  addTodo: function(todoText) { // so here you're replacing a string variable w/ a new object that will be created on AddTodo. This new object has 2x properties, with todoText being the string argument and completed, a boolean value by default set to false
    this.todos.push({
		todoText: todoText,
		completed: false // boolean value true or false
		
	});
    //this.displayTodos(); 
  },
  
  changeTodo: function(position, todoText) { // changed the variable name because it's more descriptive
	this.todos[position].todoText = todoText; // this will only change the todoText of the todo object using dot notation 
    //this.displayTodos(); 
  },
  
  deleteTodo: function(position) { // 
    this.todos.splice(position,1);
    //this.displayTodos();
    
  },
  insertTodoPriority: function(position, insertValue) { //rBonus: my own function for adding an item at a particular point
	  this.todos.splice(position, 0, insertValue);
	  //this.displayTodos();
  },
  toggleCompleted: function(position) { // we need the position because it will refer to the object we're modifying
	  var todo = this.todos[position]; // this saves typing, because if we didn't name the variable, we'd have to type this.todos[position].completed and also !this.todos[position].completed
	  todo.completed = !todo.completed; // this will enable us to access the completed property of the position [x] object
	  //this.displayTodos();
  },
  
  toggleAll: function() {
	  var totalTodos = this.todos.length;
	  var completedTodos = 0;
	  for(var i = 0; i < totalTodos; i++) { 
		  if(this.todos[i].completed === true){
			  completedTodos++;
		  }
	  } 
	  //Case 1: if everything's true, make everything else false
	  if(completedTodos === totalTodos){
		  for(var i = 0; i < totalTodos; i++) { 
		  this.todos[i].completed = false;} //this.toggleCompleted(); WHY NOT USE TOGGLE COMPLETED
	  
	  } else { //Otherwise, make everything true 
		for(var i = 0; i < totalTodos; i++) {
		this.todos[i].completed = true;	
		}
	  
  }
//this.displayTodos();  
}
}; // end object


var handlers = {
	//all methods that handle different events will be inside this object -- WE DON'T NEED THIS ANYMORE; SEE VIEW.DISPLAYTODOS
	//displayTodos:function(){ 
	//	todoList.displayTodos();
	//},	
	
	addTodo: function(){
		var addTodoTextInput = document.getElementById("addTodoTextInput");
		todoList.addTodo(addTodoTextInput.value); //here instead of adding what I add via console, it takes the value from the input tag in the web form
		addTodoTextInput.value = ""; //this will clear the input box after you add the new todo item
		view.displayTodos();
	},
	changeTodo: function(){
		var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
		var changeTodoTextInput = document.getElementById("changeTodoTextInput");
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);//valueAsNumber extracts the value as a number only, not a string - VERY IMPORTANT
		changeTodoPositionInput.value = "";
		changeTodoTextInput.value = "";
		view.displayTodos();
		
	},
	deleteTodo: function() {
		var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = "";
		view.displayTodos();
	},
	toggleCompleted: function(){
		var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = "";
		view.displayTodos();
		
	},
	
	toggleAll: function(){ 
		todoList.toggleAll();
		view.displayTodos();
	}
	
	
};

var view = {// responsible for was user sees

displayTodos:function(){
	var todosUl = document.querySelector("ul");
	todosUl.innerHTML = ""; // this is intended to clear out the list before adding a new item
	
	for(var i = 0; i < todoList.todos.length; i++) {
		var todoLi = document.createElement("li");
		var todo = todoList.todos[i];
		var todoTextWithCompletion = "";
		
		if(todo.completed === true) {
			todoTextWithCompletion = "(x) " + todo.todoText;
		}else {
			todoTextWithCompletion = "( ) " + todo.todoText;
		}
		
		todoLi.textContent = todoTextWithCompletion;
		todosUl.appendChild(todoLi);
	};
}
	
	
	
};



