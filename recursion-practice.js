// Counting Ship
// Write a recursive function that counts the number of ships
// Input: 3
// Output:
//      3: Another sheep jumps over the fence
//      2: Another sheep jumps over the fence
//      1: Another sheep jumps over the fence
//      All sheep jumped over the fence
const countShip = function (number_of_ships) {
  // Base case
  if (number_of_ships === 0) {
    console.log(`All sheep jumped over the fence`);
    return;
  }
  // General case
  console.log(`${number_of_ships}: Another sheep jumps over the fence`);
  return countShip(number_of_ships - 1);
};

let ships = 3;
console.log(`COUNT SHIPS`);
countShip(ships);
console.log(`\n`);

// Power Calculator
// Write a recursive function called powerCalculator() that takes two parameters, an integer as a base,
// and another integer as an exponent.
// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0
const powerCalculator = function (base, exponent) {
  // Check exponente is greater than 0
  if (exponent < 0) {
    return `exponent should be >= 0`;
  }
  // Base Case
  else if (exponent === 0) {
    return 1;
  }
  // General case
  return base * powerCalculator(base, exponent - 1);
};

console.log(`POWER CALCULATOR`);
console.log(powerCalculator(2, 3));
console.log(powerCalculator(2, -2));
console.log(`\n`);

// Reverse String
// Write a function that reverses a string. Take a string as input,
// reverse the string, and return the new string.
const reverseString = function (string_input) {
  // Base Case
  if (string_input.length === 0) {
    return string_input;
  }
  // General case
  return string_input.slice(-1) + reverseString(string_input.slice(0, -1));
};

console.log(`REVERSE STRING`);
console.log(`Reversed 'josue' is: ${reverseString("josue")}`);
console.log(`Reversed 'this is' is: ${reverseString("this is")}`);
console.log(`\n`);

// Calculate the nth triangular number.
const nthTriangularNumber = function (nth_number) {
  // Base case
  if (nth_number === 1) {
    return nth_number;
  }
  // General case
  return nth_number + nthTriangularNumber(nth_number - 1);
};

console.log(`NTH TRIANGULAR NUMBER`);
let nth_number = 3;
console.log(
  `Nht triangular number of ${nth_number} is: ${nthTriangularNumber(
    nth_number
  )}`
);
nth_number = 10;
console.log(
  `Nht triangular number of ${nth_number} is: ${nthTriangularNumber(
    nth_number
  )}`
);
console.log(`\n`);

// String Splitter
// Write a recursive function that splits a string based on a separator
const stringSplitter = function (string_input, separator) {
  let index = string_input.indexOf(separator);
  // Base case
  if (index === -1) {
    return [string_input];
  }
  // General case
  return [
    string_input.slice(0, index),
    ...stringSplitter(string_input.substring(index + 1), separator),
  ];
};

console.log(`STRING SPLITTER`);
let string_value = "02/10/2021";
console.log(
  `Input string ${string_value} result:`,
  stringSplitter(string_value, "/")
);
string_value = "02/20/2020";
console.log(
  `Input string ${string_value} result:`,
  stringSplitter(string_value, "/")
);
console.log(`\n`);

// Fibonacci
const fibonacci = function (n) {
  if (n === 1) {
    return [0, 1];
  }
  var s = fibonacci(n - 1);
  s.push(s[s.length - 1] + s[s.length - 2]);
  return s;
};

console.log(`FIBONACCI`);
let value = 9;
console.log(`Fibonacci sequence of ${value} result:`, fibonacci(value));
value = 7;
console.log(`Fibonacci sequence of ${value} result:`, fibonacci(value));
console.log(`\n`);

// Factorial
// Write a recursive function that finds the factorial of a given number.
const factorial = function (n) {
  if (n === 1) {
    return 1;
  }
  
  return n * factorial(n-1);
};

console.log(`FACTORIAL`);
value = 9;
console.log(`Factorial of ${value} is:`, factorial(value));
value = 7;
console.log(`Factorial of ${value} is:`, factorial(value));
console.log(`\n`);

// Find a way out of the maze
/*
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
*/
// start at 1, 1. Move to 1,2 or 2,1. If next is a star change direction
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let escape = function(maze, pos=0, row=0, col=0, dir='S' , path = []) {
  if (col < 0 || row < 0) return;
  else if (col >= maze[0].length || row >= maze.length) return;
  
  path[pos] = dir;
  pos++;

  if(maze[row][col] === 'e'){
    console.log(path);
    return;
  }

  if(maze[row][col] === ' '){
    // The current cell is free. Mark it as visited
    maze[row][col] = 's';
    // Invoke recursion or explore all possible directions
    escape(maze, pos, row - 1, col, 'U', path); // Up
    escape(maze, pos, row, col + 1, 'R', path); // Right
    escape(maze, pos, row + 1, col, 'D', path); // Down
    escape(maze, pos, row, col - 1, 'L', path); // Left
  }
  // Remove the last direction from the path
  pos--;
}

console.log(`\nEscape Maze`)
escape(mySmallMaze)

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', 'e'],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', 'e', ' ', ' ', ' ', ' ']
];

escape = function(maze, pos=0, row=0, col=0, dir='S' , path = []) {
  if (col < 0 || row < 0) return;
  else if (col >= maze[0].length || row >= maze.length) return;
  
  path[pos] = dir;
  pos++;

  if(maze[row][col] === 'e'){
    console.log(path);
    return;
  }

  if(maze[row][col] === ' '){
    // The current cell is free. Mark it as visited
    maze[row][col] = 's';
    // Invoke recursion ot explore all possible directions
    escape(maze, pos, row - 1, col, 'U', path); // Up
    escape(maze, pos, row, col + 1, 'R', path); // Right
    escape(maze, pos, row + 1, col, 'D', path); // Down
    escape(maze, pos, row, col - 1, 'L', path); // Left
    // Mark back the current cell as free
    maze[row][col] = ' ';
  }
  // Remove the last direction from the path
  pos--;
}

console.log(`\nEscape Maze show all routes`)
escape(maze)

function anagram(word) {
    let results = []; // store the results in an array
    // base case
    if (word.length <= 1) {
        return [word];
    }
    const str = word.split(''); // splits word into an array of single letters
    // console.log('str =', str); 
    str.forEach((letter, idx) => {
        let charLeft = [...str.slice(0, idx), ...str.slice(idx + 1)].join('');
        const permutations = anagram(charLeft);
        permutations.forEach(permutation => {
            results.push(letter + permutation);
        });
    });
    return results;
}

console.log(`\nANAGRAM`)
console.log(anagram('east')); // returns 24 strings

// Binary representation
function binary(num) {
    // base case
    if (num < 1) {
        return '';
    } else {
        return binary(num / 2) + Math.floor(num % 2);
    }
}

console.log(`\nBinary Representation`)
console.log(binary(3)); // 11
console.log(binary(25)); // 11001