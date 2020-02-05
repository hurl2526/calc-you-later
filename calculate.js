/******************
 * YOUR CODE HERE *
 ******************/

function calculate(num1,num2,operator){
  num1 = Number(num1)
  num2 = Number(num2)
  if (operator === '+' || operator === 'plus' || operator=== 'added to'){
return num1 + num2
  }else if (operator === '-' || operator=== 'minus' || operator === 'subtracted from'){
    return num1 - num2
}else if (operator === 'x' || operator=== 'times' || operator==='X' || operator=== 'multiplied by'){
  return num1 * num2
}
else if (operator === '/' || operator=== '' || operator === 'divided by'){
  return num1 / num2
}
  else if (operator === '%' || operator==='modulus' || operator==='mod'){
    return num1 % num2
  }
  else {
  return "Sorry, that's not a mathematical operation!" 
}
}


/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;