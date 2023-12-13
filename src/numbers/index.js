const isEven = (num) => {
  // write code for numbers.isEven

  return num % 2 === 0;

}

const sum = (arr) => {
  // write code for numbers.sum

  let sum = 0; 

    for(var i = 0; i < arr.length; i++) {

      if(typeof arr[i] === `number`) sum += arr[i]
    }

    return sum

  
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum


  const findCombination = (index, currentSum) => {

    if (currentSum === sum) {

      return true; 

    }

    if (index === arr.length) {

      return false; 
     

    }

    

    if (findCombination(index + 1, currentSum + arr[index])) {

      return true;

    }

    
    return findCombination(index + 1, currentSum);

  };

  return false
 
}

// Couldn't get it to run successfully and return false without just saying false. I may have misunderstood what combination sum is.



  

  
  





module.exports = {
  isEven,
  sum,
  comboSum
}