// Function to search for specific character classes in a string
function findMatches(pattern, str) {
    const regex = new RegExp(pattern, 'g');
    return str.match(regex) || [];
  }
  
  // Test cases
  const testCases = [
    { description: 'Digits', pattern: '\\d', str: 'Hello123World', expected: ['1', '2', '3'] },
    { description: 'Uppercase Letters', pattern: '[A-Z]', str: 'Hello123World', expected: ['H', 'W'] },
    { description: 'Lowercase Letters', pattern: '[a-z]', str: 'Hello123World', expected: ['e', 'l', 'l', 'o', 'o', 'r', 'l', 'd'] },
    { description: 'Special Characters', pattern: '[^a-zA-Z0-9]', str: 'Hello@123#World!', expected: ['@', '#', '!'] }
  ];
  
  // To Run test cases
  testCases.forEach(({ description, pattern, str, expected }, index) => {
    const result = findMatches(pattern, str);
    console.log(`Test ${index + 1}: ${description}`);
    console.log(`Pattern: "${pattern}", String: "${str}", Expected: ${expected}, Result: ${result}`);
    console.log('---');
  });
  