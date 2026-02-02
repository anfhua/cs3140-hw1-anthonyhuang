// Homework 1: JavaScript Fundamentals
// Name: Anthony Huang
// Date: 02/02/2026

// ============ PART 1: ARRAY FUNCTIONS ============
const numbers = [10, 5, 8, 12, 3, 7, 15, 2, 9, 6];

function sum(arr) {
  // Add all numbers in array and return result
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function average(arr) {
  // Returns average from array using sum function
  return sum(arr)/arr.length;
}

function min(arr) {
  // Returns smallest number in arr
  return Math.min(...arr);
}

function max(arr) {
  // Returns largest number in arr
  return Math.max(...arr);
}

// ============ PART 2: STRING FUNCTIONS ============
function capitalize(str) {
  // TODO: Return string with first letter capitalized
  // "hello" -> "Hello"
}

function reverse(str) {
  // TODO: Return the string reversed
  // "hello" -> "olleh"
  // Hint: str.split("").reverse().join("")
}

function countVowels(str) {
  // TODO: Return count of vowels (a, e, i, o, u)
  // "hello" -> 2
}

// ============ PART 3: OBJECT ============
const student = {
  name: "Your Name",
  age: 20,
  grades: [85, 92, 78, 90, 88],
  
  getAverage: function() {
    // TODO: Return average of this.grades
  },
  
  isHonorRoll: function() {
    // TODO: Return true if average > 85
  }
};

// ============ TEST YOUR CODE ============
console.log("=== Part 1: Arrays ===");
console.log("Numbers:", numbers);
console.log("Sum:", sum(numbers));
console.log("Average:", average(numbers));
console.log("Min:", min(numbers));
console.log("Max:", max(numbers));

console.log("\n=== Part 2: Strings ===");
console.log("capitalize('hello'):", capitalize("hello"));
console.log("reverse('hello'):", reverse("hello"));
console.log("countVowels('hello'):", countVowels("hello"));

console.log("\n=== Part 3: Object ===");
console.log("Student:", student.name);
console.log("Grades:", student.grades);
console.log("Average:", student.getAverage());
console.log("Honor Roll:", student.isHonorRoll());