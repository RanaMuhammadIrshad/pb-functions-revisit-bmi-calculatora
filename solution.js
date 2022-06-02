"use strict";
/* 1. **calculateBMI** takes three arguments: a `name` string, a `weight` number and a `height` number. It returns a string with the name and BMI number */

console.log(`--------1-------`);
const calculateBMI = function (name, weight, height) {
  return `Name:${name} and BMI: ${Math.floor(weight / (height * height))}`;
};

const valBMIMark = calculateBMI("Mark", 72, 1.65);
const valBMIJohn = calculateBMI("John", 90, 1.95);
console.log(valBMIMark);
console.log(valBMIJohn);

/* 2. **whoIsBiggest** takes four arguments: two `name` strings and two `bmi` numbers. It returns the name string of the bigger person */

console.log(`--------2-------`);

const whoIsBiggest = function (name1, name2, bmi1, bmi2) {
  if (bmi1 > bmi2) return `${name1} BMI (${bmi1} is grater)`;
  else if (bmi2 > bmi1) return `${name2} BMI (${bmi2} is grater)`;
  else return `MBIs are same`;
};

const greaterBMI = whoIsBiggest("Mark", "John", 26, 23);
console.log(greaterBMI);

/* **Bonus**
- Rewrite the **whoIsBiggest** function to take six arguments: `Person 1 name`, `Person 2 name`, `Person 1 weight`, `Person 2 weight`, `Person 1 height`, `Person 2 height`
- The **whoIsBiggest** function should use the **calculateBMI** function to calculate the BMI for both people, before comparing them and returning the name of the person with the bigger BMI (that means that in the global scope only the **whoIsBiggest** function is called) */

console.log(`--------3-------`);

const whoIsBiggest2 = function (
  per1Name,
  per2Name,
  per1Weight,
  per2Weight,
  per1Height,
  per2Height
) {
  const per1BMI = Math.floor(per1Weight / (per1Height * per1Height));
  const per2BMI = Math.floor(per2Weight / (per2Height * per2Height));

  if (per1BMI > per2BMI) return `${per1Name} BMI (${per1BMI} is grater)`;
  if (per2BMI > per1BMI) return `${per2Name} BMI (${per2BMI} is grater)`;
  else return `MBIs are same`;
};

const biggerBMI = whoIsBiggest2("Mark", "John", 72, 90, 1.65, 1.95);
console.log(biggerBMI);
