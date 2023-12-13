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

      return true; // Combination found

    }

    if (index === arr.length) {

      return false; 
      // Reached the end of the array without finding a combination

    }

    // Include the current element in the combination

    if (findCombination(index + 1, currentSum + arr[index])) {

      return true;

    }

    // Exclude the current element from the combination
    return findCombination(index + 1, currentSum);
    
  };

  return false;
}




  // const result = [];

  // const findCombo = (combo, arr, sum) => {

  //   if (sum === 0) {

  //     result.push([...combo]);
  //     return

  //   }

  //   for (let i = 0; i < arr.length; i++) {

  //     const num = arr[i];

  //     if (num <= sum) {

  //       combo.push(num);

  //       findCombo(combo, arr.slice(i), sum - num);

  //       combo.pop();

  //     }

  //   }

  // };

  
  // return result;
  



  






  // let arr = [1, 2, 3, 6, 8, 9]

  // let newArr = []

  // let sum = 0

  // let result = 24

  // if (sum === result) {

  //   result.push(newArr);

  //   return

  // }
  
  





module.exports = {
  isEven,
  sum,
  comboSum
}