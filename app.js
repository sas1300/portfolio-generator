const fs =require('fs');
const generatePage = require('./src/page-template.js');
// console.log('Hello Node!');

// console.log(document);

// var message = 'Hello Node!';
// var sum = 5 + 3;
// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// The foloowing would not work because a const can not be reassigned.  Would throw error.  
// const message = 'Hello Node!';
// message = 'Goodbye Node!';

// const sum = 5 + 3;
// sum += 1;

// Const behaves differently with arrays.  This would not throw an error because const isn't being reassigned.  The content inside those variables is being edited.
// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
//   name: 'Lernantino',
//   age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';

//Arrow Functions
// Using regular function expression syntax
// const addNums = function(numOne, numTwo) {
//     return numOne + numTwo;
//  };

// Using new arrow function syntax
//   const addNums = (numOne, numTwo) => {
//     return numOne + numTwo;
//   };

//==========================================================================

//const profileDataArgs = process.argv.slice(2, process.argv.length);
//     console.log(profileDataArgs);

//     //Notice the lack of prentheses around the 'profileDataArr' parameter
//     const printProfileData = profileDataArr => {
//         //This...
//         for (let i = 0; i< profileDataArr.length; i += 1) {
//             console.log(profileDataArr[i]);
//     }
//     console.log('=======================');
//     //Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

//     printProfileData(profileDataArgs);


//This is the array that holds user command-line arguments
//profileDataArgs is the array index that holds the user command-line arguments
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);
  console.log('Portfolio complete! Check out index.html to see the output!');
});