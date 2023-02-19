function reverseString(str) {
  // type your code here
  let reversedString = "";
  let length = str.length;

  for (let i = length; i >= 0; i--) {
    reverseString = str[i];
  };

  return reverseString;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// 1. Create an empty string
// 2. Get the length of the string
// 3. Set i to one less than the length of the string in a for-loop
// 4. Get the char at that index
// 5. Concatenate the char to the string
// 6. Decrement i by 1
