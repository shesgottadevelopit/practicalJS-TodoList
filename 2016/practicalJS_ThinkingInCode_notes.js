//v6 requirements
// r1: .toggleAll: If eveerything's true, make everything else false
// r2: toggleAll: Otherwise, make everything true 

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
this.displayTodos();  
}

// struggled with the semicolons and brackets, not sure how to fix 
// explores thinking through a problem and finding a solution for it