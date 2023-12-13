const split = (str, delim) => {
  
  return str.split(delim);


}

const pairs = (str) => {
  // write code for strings.pairs
  const result = [];

  for (let i = 0; i < str.length - 1; i += 2) {

    const pair = str.slice(i, i + 2);

    result.push(pair);

  }

  return result;
  

}

const reverse = (str) => {
  // write code for strings.reverse
  return str.split('').reverse().join('');


}

module.exports = {
  split,
  pairs,
  reverse
}