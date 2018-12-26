let obj = {
    message: "A message",
    anotherProperty: "another string"
}


console.log(obj.message); // dot notation
console.log(obj["message"]); // square bracket notation

console.log(obj.mssage); // undefined


console.log(obj.anotherProperty); // dot notation

let book = {
    title: "The Good Parts",
    author: {
        firstName: "Douglas",
        lastName: "Crockford"
    }
}
console.log(book.author.firstName); //"Douglas"


let person = {
    firstName: "Senthil",
    phonenumbers: {
        "work": "12434343433",
        "home": "66456546546"

    },
    getworkphoneno: function () {

        return this.phonenumbers.work;

    },
    getFirstName: function () {
        return this.firstName;

    }
}

console.log("Printing Work Phoneno", person.getworkphoneno());
console.log("Printing FirstName", person.firstName);
console.log("Printing FirstName", person.getFirstName());


let newperson = {};

newperson.firstName = "senthi";
newperson.phonenumbers = {
    "work": "12434343433",
    "home": "66456546546"

}
newperson.getworkphoneno = function () {
    return this.phonenumbers.work;
}

newperson.getFirstName = function () {
    return this.firstName;
}


console.log("Printing Work Phoneno", newperson.getworkphoneno());
console.log("Printing FirstName", newperson.firstName);
console.log("Printing FirstName", newperson.getFirstName());

delete newperson.phonenumbers;

try {
    console.log("Printing Work Phoneno", newperson.getworkphoneno()); //undefined and throws error TypeError: Cannot read property 'work' of undefined
} catch (e) {
    console.log(e);
}

console.log("Printing FirstName", newperson.getFirstName()); // retainning firstname



var objnew = {};
console.log("Object __proto__ is equal to Object.ProtoType", objnew.__proto__ === Object.prototype); //true

//Primitives , Functions, Arrays, Objects
// All having their prototype

var no = 1;
console.log("Number __proto__ is equal to Number.Protype ", no.__proto__ === Number.prototype); //true
console.log("Numbers proto super proto will be equal to Object.proto(Number extends Objects", no.__proto__.__proto__ === Object.prototype); //true

//Strings inherit from String.prototype.

var name = "Senthil";
console.log("String  __proto__ is equal to String.Protype ", name.__proto__ === String.prototype); //true
//Booleans inherit from Boolean.prototype. 

//Arrays inherit from Array.prototype.
var fruits = [];
console.log("Arrays  __proto__ is equal to Array.Protype ", fruits.__proto__ === Array.prototype); //true


//Functions are objects and inherit from Function.prototype. They have methods like bind(), apply() and call().

var myFunc = function () {

}

console.log("Function  __proto__ is equal to Function.Protype ", myFunc.__proto__ === Function.prototype); //true

String.prototype.senthiltrim = function () {
    return "Senthil " + this;
}

let text = "   A text  ";
console.log(text.senthiltrim()); //"A text"

let mytext = "   A text  ";
console.log(mytext.senthiltrim()); //"A text"

Array.prototype.senthilIndexOf = function () {
    return 1;
}

let arr = ["A", "B", "C", "D", "E"];
console.log(arr.indexOf("C")); //2
console.log(arr.senthilIndexOf("C")); //2

//Single Inheritance Example
//Object.create() creates a new object with a specified prototype object. It is used for single inheritance. 

let bookPrototype = {
    getFullTitle: function () {
        return this.title + " by " + this.author;
    }
}
let booknew = Object.create(bookPrototype);
booknew.title = "JavaScript: The Good Parts";
booknew.author = "Douglas Crockford";
console.log(booknew.getFullTitle());//JavaScript: The Good Parts by Douglas Crockford

//Mutiple Inheritance

//Object.assign() copies properties from one or more objects to a target object. It can be used for multiple inheritance

let authorDataService = { getAuthors: function () { console.log("Calling authorDataService") } };

let bookDataService = { getBooks: function () { console.log("Book Data Service") } };

let userDataService = { getUsers: functionstarted () { console.log("Calling userDataService") } };

let dataService = Object.assign({},
    authorDataService,
    bookDataService,
    userDataService
);  // Combined mutiple objects in to one object through composition / multiple inheritance

dataService.getAuthors();
dataService.getBooks();
dataService.getUsers();


//An immutable object is an object that once created cannot be changed.
//Object.freeze() freezes an object. Properties can’t be added, deleted, or changed. The object becomes immutable.
"use strict";
let myimmutablebook = Object.freeze({
    title: "Functional-Light JavaScript",
    author: "Kyle Simpson"
});
myimmutablebook.title = "Other title";//Cannot assign to read only property 'title'
myimmutablebook.test = "123";

console.log(myimmutablebook); // prints same title "Functional-Light JavaScript" and won't change to "Other title"

//Object.freeze() does a shallow freeze. The nested objects can be changed. For deep freeze, recursively freeze each property of type object.

let senthilbook = Object.freeze({
    title: "JavaScript Allongé",
    author: "Reginald Braithwaite"
});
let myclonebook = Object.assign({}, senthilbook); // clone statement

console.log("my clone book", myclonebook);

myclonebook.title = "my new title";

console.log("after channging title clone bstartedook", myclonebook);

let timerPrototype = Object.freeze({
    start: function () { },
    stop: function () { }
});
let timer = Object.create(timerPrototype);
timer.__proto__ === timerPrototype; //true’
//When the prototype is frozen, the objects that inherit from it won’t be able to change the properties defined within. 
//Now, the start() and stop() methods can’t be redefined.
"use strict";
timer.start = function () { console.log("New implementation"); } //Cannot assign to read only property 'start' of object

timer.start();


//Function

function MyNewTimer(){
    this.token = 0;
  }

  MyNewTimer.prototype = {
    start : function() {},
    stop : function() {}
  }  // allow to change the function to override it

  MyNewTimer.prototype = Object.freeze({
    start : function() {},
    stop : function() {}
  }); // freezed. Overridind not allowed

  let mytimer = new MyNewTimer();
console.log(mytimer.__proto__ === MyNewTimer.prototype);

// internally what happens when new Timer is called

function newTimer(){
    let newObj = Object.create(Timer.prototype);
    let returnObj = Timer.call(newObj, arguments);
    if(returnObj) return returnObj;
      
    return newObj;
  }

  class ClassTimer{
    constructor(){
      this.token = 0;
    }
    
    start() { console.log("started")}
    stop() {}  
    myfunc(){

    }
  }
  Object.freeze(ClassTimer.prototype);

  console.log(new ClassTimer().start());