/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  var leftStack = [];

  for (var i = 0; i < s.length; i++) {
      switch (s[i]) {
          case '(':
          case '{':
          case '[':
              leftStack.push(s[i]);
              break;
          case ')':
              if (leftStack[leftStack.length -1] === '(') {
                  leftStack.pop();
              } else {
                  return false;
              }
              break;
          case '}':
              if (leftStack[leftStack.length -1] === '{') {
                  leftStack.pop();
              } else {
                  return false;
              }
              break;
          case ']':
              if (leftStack[leftStack.length -1] === '[') {
                  leftStack.pop();
              } else {
                  return false;
              }
              break;
      }
  }
  if (!leftStack.length) {
      return true;
  }
  return false;
};
