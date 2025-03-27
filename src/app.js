import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");


  // arrays and loops
  // arrays are type of data structure
  // review MDN Web Docs for all of the tools you can use on arrays

  // declaring an empty array
  let myArray=[];

  // declaring an array and initializing with elements
  let firstNames = ['Sam','Rick','Tommy','Andrew'];
  
  // accessing an element in the firstNames array
  let name1 = firstNames[0];

  console.log(firstNames);
  console.log(firstNames[0]);

  // updating an element in firstNames array
  firstNames[3] = false;

  console.log(firstNames);

  // adds/appends or "pushes" a new element to the end of the array
  firstNames.push("Conner");
  console.log(firstNames);

  // .pop() removes the last element in an array
  firstNames.pop();
  console.log(firstNames);

  // .unshift() appends to the front of the array
  firstNames.unshift('Ana');
  console.log(firstNames);

  // .shift() removes the first element of an array
  firstNames.shift();
  console.log(firstNames);

  // .slice(a,b) needs to be set to a new array variable
  // keeps the specified elements, starting location inclusive, ending location not included
  let newFirstNames = firstNames.slice(1,3);
  console.log(newFirstNames);

  // .splice(a,b) updates the existing array
  // a is starting location, b is number of elements to keep
  let newNewFirstNames = [...firstNames]; // ... is the spread operator, the proper way to copy an array to a new variable/array name
  newNewFirstNames.splice(1,2);           // review pass by reference (bad) vs. pass by value (good)
  console.log(newNewFirstNames);
  console.log(firstNames);

  // looping, standard for loop
  for (let i = 0; i < firstNames.length; i++) {
    console.log(firstNames[i]);
  }

  // looping, using for..in
  for (let i in firstNames) {
    console.log(firstNames[i])
  }

  // create a function that returns an array of only numbers
  let array1 = ['Rick',1,'Ana',2,'Clyde',6.8, 'Rose',-321.1,52,6];
  function numberFilter(arr) {
    let onlyNumbers = [];
    for (let i in arr){
      if (typeof arr[i] === 'number'){
        onlyNumbers.push(arr[i]);
      }
    }
    return onlyNumbers;
  }

  console.log(numberFilter(array1));
};
