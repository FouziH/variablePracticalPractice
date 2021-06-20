//Declare and initialize a variable

let testVar = 9;

console.log(testVar);
console.log("The value of testVar is", testVar);
testVar = 7654456
console.log(testVar);
console.log("The value of testVar is", testVar);



let fruitName = "banana";

let arrayNum = [];


for(let i = 0; i < fruitName.length; i++){
  if(fruitName[i] == "b"){
    arrayNum.push("b")
  }else if(fruitName[i] ==="a"){
    arrayNum.push("a")
  }else if(fruitName[i] === "n"){
    arrayNum.push("n")
  }else if(fruitName[i] === "s"){
    arrayNum.push("a")
  }else if(fruitName[i] === "n"){
    arrayNum.push("n")
  } else if(fruitName[i] ==="a"){
    arrayNum.push("a")
  }
}


console.log(arrayNum); // output ["b", "a", "n", "a", "n", "a"]

// + operator can concatenate 2 strings to gether or

//Example
  let firstName = " Hamza";
  let lastName = "Mohamed";
//example
  let fullName = firstName + " " + lastName;

  console.log(fullName);
// + add to number together
//Example
let num = 9;
let num1 = 2;
let total = num  + num1;

console.log(total); // output is 11
