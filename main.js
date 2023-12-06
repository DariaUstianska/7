function createSumFunction() {
    let previousValue = 0;
  
    function sum(value) {
      previousValue += value;
      return previousValue;
    }
  
    return sum;
  }
  
const sum = createSumFunction();
console.log=(sum)