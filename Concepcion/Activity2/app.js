"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
let sq1 = new classes_1.Square(5, "Red");
sq1.PrintColorAndName();
//let sq2 = new Square(5);
let rect1 = new classes_1.Rectangle(5, 10, "blue");
//let rect2 = new Rectangle(10,20);
console.log("\nThe Area of sq1 is: " + sq1.GetArea());
console.log("The Perimeter of sq1 is: " + sq1.GetPerimeter());
console.log("\nThe Area of rect1 is: " + rect1.GetArea());
console.log("The Perimeter of rect1 is: " + rect1.GetPerimeter());
console.log("The color of rect1 is " + rect1.color);