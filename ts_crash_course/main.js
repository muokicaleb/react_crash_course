"use strict";
exports.__esModule = true;
var message = 'Hello World';
console.log(message);
// variable declaration.
/**
 * let and const
 *
 * let for when vars can change.
 * const for constants
 *
 * let variable doesn't need to be init
 * const had to be init */
var age = 10;
var year = 2001;
// variable types
// let varName: vartype = varValue
var isBeginner = true;
var total = 0;
var name = "John";
var sentence = "My name is ".concat(name, "\nI am a beginner in Typescript");
console.log(sentence);
// null and undefined are subtypes.
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = "string long";
// type unknown
var myVariable = "Joey";
// type assersion/casting 
myVariable = myVariable.toUpperCase();
console.log(myVariable);
// multitype
var multiType;
multiType = 20;
multiType = true;
