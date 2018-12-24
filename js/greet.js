

// Assigning function to a variable
var greet = function (person, greeting) {

    var text = greeting + "-" + person;
    console.log(text);
}

greet("Senthil", "Hi");

// Default returns undefined
function greetUndefined() {
    //return "123";
    // return undefined;
}

console.log("greetUndefined = " + greetUndefined());


function callMe(a, b, c) {
    console.log("c is " + typeof c);
}


callMe("Learn", "JavaScript");  // eventhough 3 rd agrum missing it is called . Because loosely coupled

callMe("Learn", "JavaScript", "Functions");  // all args passed and used typeof keyword used

function power(base, exponent) {
    if (exponent == undefined) {
        exponent = 2;
    }
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(4));
console.log(power(4, 3));


function callMeArgs() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    console.log("Total arguments passed: " + arguments.length);
}

callMeArgs(1, 2, 3, 1);

//annonymous function with out name

// Function can take input of another function and after taking that input  we can call that function
function useAnnonFunction(funcRef) {
    var ref = funcRef();
    console.log(ref);
}

useAnnonFunction( function () {
    return "I am from Annon function"
}

);

function recursion(){

    
    recursion();
}

var products =  ["Mobile", "Laptop", "Data Card", "Power bank"];


products.forEach(function (prdName, index){
console.log(++index  + ". " + prdName); 

});

//IIFE for encapsulation

(function() { 
    var msg = "Hello"; 
     console.log(msg); 
  }) (); 

 


  //closures - encapsulation / module

  function init() {
    var localName = "Java Script";
      function innerDisplayName() {
          console.log("Nested Method"+localName);
        } 
  innerDisplayName();
  }
  
  init();

