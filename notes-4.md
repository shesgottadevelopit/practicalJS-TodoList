## Notes on Practical JavaScript - 2017 - Understanding "This"

`this` is a variable that changes depending on the situation

### Case 1: when you're in a regular function or no function at all, `this` points to the browser window

```javascript
// type this => will return a window object

function logThis() {
    console.log(this)
}
logThis() // => will return the window object and it's properties

// in strict mode this will be undefined

```

### Case 2: when a function is called as a method, `this` refers to the object on the left side of the dot
```javascript
let myObject = {
    newMethod: function() {
        console.log(this)
    }
}

myObject.newMethod(); // => will return the myObject method

```

### Case 3: When a function is called as a constructor, `this` points to the object that the constructor is creating

```javascript
function NewPrototype(love) {
    this.love = love;
}

let boyfriend = new NewPrototype("him")

```
Constructors are for creating objects. So every constructor generates a new fresh object.
At the very beginning `this` will point to the new object, not the constructor
After a new object is created with a constructor, `this ` is returned automatically, see notes below:

```javascript
function PerfectMan(name) {
    // this = {}
    this.name = name;
    // return this;
}

let boyfriend = new PerfectMan("Idris")
```

### Case 4: When you explicitly set the value of `this` manualy using `bind`, `apply`, or `call`, you determine what `this` means

```javascript
// Regular function:
function logThis() {
    console.log(this)
}
logThis()

// bind is a method on functions that returns a copy of the function it's called on where `this` is set to the first argument passed into bind

let binded = logThis.bind({name: kudo})

// if you call the love function it will return a copy of the new object which was passed in as an argument

binded() // => Object {name: kudo}

// with apply, you put your desired `this` value. It will change the `this` value inside of a function and run it immediately. bind returns a copy that you have to run separately

let applied = logThis.apply({name: kudo})

// with call, you put your desired `this` value. It will change the `this` value inside of a function and run it immediately. bind returns a copy that you have to run separately
let called = logThis.call({name: kudo})

```

So what is the difference between `apply` and `call`?

```javascript
function logThisArgs(name, age) {
    console.log(name, age);
	console.log(this)
}

// call the regular function with arguments
logThisArgs('akudo', 'forever young');

// Now lets use apply, passing in our desired `this` reference
logThisArgs.apply({name: 'kudo'}, ['akudo', 'forever young']) // then you pass in your arguments as an array


// lets use for call
logThisArgs.call({name: 'kudo'}, 'akudo', 'forever young') // you don't need to pass in your arguments as an array, just one by one

```

**PLEASE TAKE NOTE**

Once you `bind` a `this` to an object, you can not change it. It can only be bound once.


Example from PracticalJS:
```javascript

// Note that a function returned from .bind (like `boundOnce` below),
// cannot be bound to a different `this` value ever again.
// In other words, functions can only be bound once.
var boundOnce = logThis.bind({name: 'The first time is forever'});

// These attempts to change `this` are futile.
boundOnce.bind({name: 'why even try?'})();
boundOnce.apply({name: 'why even try?'});
boundOnce.call({name: 'why even try?'});

```

### Case 5: When in a callback function, you need to apply the rules methodically to what might be a tricky scenario


```javascript

//situation 1: regular function passed into another function
    function ourHigherOrderFunction(callback) {
        callback()
    }

    function logThis() {
        console.log(this)
    }
    logThis()

    ourHigherOrderFunction(logThis) // => will return the window object as expected from case 1

//situation 2: call the callback as a method (hmmmmm)
// will render using case 2

    function callAsMethod(callback) {
        let newObject = {
            name: "akudo"
        };

        newObject.callback = callback; // here we're adding a new property
        newObject.callback(); // here we're running that property/method
    }
     callAsMethod(logThis) // => this will return the new object we created

     // it is not clear from just looking what `this` will refer to, so we have to pay attention to what the callback is doing

// situation 3: call the callback as a constructor

    function newConstructor(callback) {
        new callback();
    }

    newConstructor(logThis) //=> this will return an empty object called logThis

    // the higher order function dictates what this will be

// situation 4:  Explicity setting our `this` to a self-defined object

    function callAndBindToKudo(callback) { // a higher order function
        let bindedCallback = callback.bind({name: 'kudo'}); // will return a copy of the function where `this` is bound to what we specify
        bindedCallback();
    }

    callAndBindToKudo(logThis) // => wil return the object we binded

    // once again, we can not bind an object to a function once it's already been bound Explicity
    


```
