let myArray = ['1','2','3','4','5'];
console.log(myArray);

console.log(myArray.length);

console.log(myArray[0] + myArray[1])

myArray.push('6','7');

console.log(myArray);

myArray.pop()

console.log(myArray)

console.log(myArray[myArray.length-1]);

/*myArray.forEach(function(item, index, array){
  let itemIndex = "The index is: " + index + " the value at the index is" + item
  console.log(itemIndex) ;
}); */
let shifted = myArray.shift();

console.log(shifted);

console.log(myArray);

myArray.unshift('1');
console.log(myArray);

console.log(myArray.slice(0));
console.log(myArray.slice(1,5));
console.log(myArray.slice(0,7));
