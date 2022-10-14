const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = str.split('');
  let s = '';
  let count = 1;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i+1]) {
      count++;    
    } else {
      if (count > 1) {
        s += count + array[i];
        count = 1;
      } else {
        s += array[i];
      }
    }
 }
  return s;
}

module.exports = {
  encodeLine
};
