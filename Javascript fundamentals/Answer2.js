// Function to check if a string matches a regex pattern
function isMatch(pattern, str) {
    const regex = new RegExp(pattern);
    return regex.test(str);
  }
  
  // Test cases
  const tests = [
    { pattern: '^hello', str: 'hello world', expected: true },
    { pattern: 'world$', str: 'hello world', expected: true },
    { pattern: '\\d+', str: 'There are 123 numbers', expected: true },
    { pattern: 'abc', str: 'xyz', expected: false },
    { pattern: '[a-z]+', str: 'ABC123', expected: false }
  ];
  
  // To Run test cases
  tests.forEach(({ pattern, str, expected }, index) => {
    const result = isMatch(pattern, str);
    console.log(`Test ${index + 1}: Pattern: "${pattern}", String: "${str}", Expected: ${expected}, Result: ${result}`);
  });
  