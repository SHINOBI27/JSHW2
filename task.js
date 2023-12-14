"use strict"

function solveEquation(a,b,c) {
  const result = [];
  const discriminant = Math.pow(b, 2)-(4*a*c);
  
  if (discriminant > 0) {
   let root1 = (-b + Math.sqrt(discriminant) )/(2*a);
   let root2 =  (-b - Math.sqrt(discriminant) )/(2*a);
    result.push(root1,root2);
    console.log(result);
    return result;
  }

  if (discriminant === 0){
  let root0 = -b/(2*a);
  result.push(root0);
    console.log(result);
  return result;
}

else {
  console.log("корней нет" + result)
}

  return result; 
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentMonth = parseInt(percent) / 100 / 12;
	let cont = parseInt(contribution);
	let am = parseInt(amount);
	if (isNaN(percentMonth) || percentMonth < 0) {
		return "false";
	} else {
			let s = am - cont;
			let n = countMonths;
			let pay = s * (percentMonth + percentMonth / (((1 + percentMonth) ** n) - 1));
			let totalAmount = (pay * n).toFixed(2);
			console.log(totalAmount);
			return +totalAmount;
  }
}