function letterCombinations(digits) {
   const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  
  if (digits.length === 0) {
    return [];
  }
  
  const result = [];
  
  function dfs(current, index) {
    if (index === digits.length) {
      result.push(current);
      return;
    }
    
    const letters = map[digits[index]];
    
    for (let i = 0; i < letters.length; i++) {
      dfs(current + letters[i], index + 1);
    }
  }
  
  dfs('', 0);
  
  return result.sort();
}

module.exports = letterCombinations;
