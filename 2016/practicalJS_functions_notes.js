//functions are like recipes
// Recipes save time. Anyone can just look at the recipe and follow the instructions. This way it distills to a single plan

//Sandwich Recipe
// makeTurkeySandwich
	// Get one slice of bread;
	// Add turkey;
	// Put a slice of bread on top;


function makeTurkeySandwich() {
	Get one slice of bread;
	Add turkey;
	Put a slice of bread on top;
}

// to get someone to make a recipe in English you'd say, "make a sandwich" 
// but in JS you would cal the function like

makeTurkeySandwich();

//Customizing functions - saves time so you're not creating multiple recipes when you're just switching out one or two ingredients

// makeSandwichWith____ ... the blanks representating the type of sandwich/meat used
	// Get one slice of bread; 
	// Add ___; this blank represents the type of meat used
	// Put a slice of bread on top;
	
	
// Our new function would be... 
	
function makeSandwichWith(filling) {
	Get one slice of bread;
	Add filling;
	Put a slice of bread on top;
}

makeSandwichWith("turkey"); // you'd need to create a variable or put the filling in a string

// the things inside the parathesis when you're writing the function are called PARAMETERS
// BUT when you're using the function, the things you put in the parathesis are called ARGUMENTS
// interesting...

Now back to the to-do
V2 To-do app “requirements”:
// It should have a place to store todos; done // var todos = [“item1”, “item2”, “item3”]
// It should have a way to display todos; done //console.log(todos)
// It should have a way to add todos; done // variable.push(“item4”)
// It should have a way to change todos; done; accessed the array using indices and reassigned value // todos[0] = itemFirst
// It should have a way to delete todos; done // splice(x,y); x is the starting position, y is the number of array items you want to delete

// HIT SHIFT + ENTER TO WRITE MULTIPLE LINES IN GOOGLE CHROME CONSOLE


