var todos = ['item 1', 'item 2', 'item 3'];
console.log(todos);
todos.push('item 4');
todos.push('item 5');
todos[2]; //this will print the content holding the 3rd position of the array
todos[2] = "new items who dis"; // will reassign the content
todos.splice(1,1); // this will delete the array item at position 1 and only one item
todos.splice(2,2); //this will delete array item starting at position 2 and then the following one for a total of two items 
