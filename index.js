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
  // Returns string with first letter capitalized
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  // Returns the string reversed "hello" -> "olleh"
  return str.split("").reverse().join("");
}

function countVowels(str) {
  // Returns number of vowels in the string
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// ============ PART 3: OBJECT ============
const student = {
  name: "Anthony Huang",
  age: 20,
  grades: [85, 92, 78, 90, 88],
  
  getAverage: function() {
    // Returns average of grades 
    return average(this.grades);
  },
  
  isHonorRoll: function() {
    // Returns true if average > 85
    return this.getAverage() > 85;
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