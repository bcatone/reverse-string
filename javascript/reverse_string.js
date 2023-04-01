function reverseString(str) {
  // type your code here
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
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

// 1. Create a string and set it as an empty string
// 2. Find the length of the string passed in
// 3. Loop through the string and concatenate each char to the new string, starting at the end (length - 1)
// 4. Return the new string