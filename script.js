const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {

console.log(hasKey("white")); // true
console.log(hasKey("green")); // true
console.log(hasKey("red")); // false
  //   write your code here
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
