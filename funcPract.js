function add(num1, num2){
  return num1 + num2
}

console.log(add(2,3));

function multiply(num1, num2){
  return num1 * num2;
}

console.log(multiply(34,87));

function stringify(str1,str2){
  return str1+str2;
};

console.log(stringify("donovan","curt"));

function whoCares(){
  return "I care!";
};
console.log(whoCares());

/* declarations with function expressions, anonymous function*/

const meAndYou= function(str1,str2){
  return str1+str2;
}

console.log(meAndYou("daniel","Donny"));

/*ES 6 STYLE in the case of a single variable you shouldnt use parentheses*/

const justYou = name=>{
  return name;
};

console.log(justYou("Donny"));
