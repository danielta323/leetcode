/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // array manipulation way
  // return (BigInt(digits.join('')) + 1n).toString().split('');
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i] += 1;
      return digits;
    }
    else {
      digits[i] = 0;
    }
  }

  if (digits[0] === 0) digits.unshift(1);
  return digits;
};