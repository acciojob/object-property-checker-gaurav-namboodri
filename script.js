const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
	
  return key in sampleObject;


console.log(hasKey("name")); // true
console.log(hasKey("occupation")); // false
  //   write your code here
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
