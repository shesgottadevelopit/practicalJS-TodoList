// Explore JS data types
// Objects (can be as complext as you want)
- {}; // arrays, functions, 

// Primitives (building blocks)
- String // "Hello World"
- Number // 1, 2, 3, 4
- Boolean // true, false
- Undefined // value that hasn't been set
- Null // explicitly means "Nothing"

// Comparisons w/ primitives
// Works the same as it would w/ basic math comparison 1 === 1; true === true; etc

// Comparisons w/ objects
// {} === {}; both objects are empty
// false ; will equal false

// why is this?
// JS is not concerned with how the object appears; it's concerned with if it's the same object
// when you create an object, JS saves the object at a unique place in the memory, ie memory address also called a reference

// comparing the same object
var houseA = {};
houseA === houseA
true
