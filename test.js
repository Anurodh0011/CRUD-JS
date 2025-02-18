const num = [1, 2, 3, 4, 5]
const checkEven = num => num % 2 === 0;
const hasEvenNum = num.some(checkEven)
const allEvenNum = num.every(checkEven)
console.log(hasEvenNum, allEvenNum)
