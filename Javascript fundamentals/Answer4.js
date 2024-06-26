// Function to check for matches and extract groups
function extractGroups(pattern, str) {
    const regex = new RegExp(pattern);
    const match = str.match(regex);
    if (match) {
      return match.groups || match.slice(1); // If named groups are used, return match.groups, otherwise return capturing groups
    } else {
      return null;
    }
  }
  
  // Test cases
  const testCases = [
    {
      description: 'Date in DD-MM-YYYY format',
      pattern: '(\\d{2})-(\\d{2})-(\\d{4})',
      str: 'Today is 25-02-2024',
      expected: ['25', '02', '2024']
    },
    {
      description: 'Date in YYYY/MM/DD format',
      pattern: '(\\d{4})/(\\d{2})/(\\d{2})',
      str: 'The event is scheduled for 2024/04/15',
      expected: ['2024', '04', '15']
    },
    {
      description: 'Date with named groups in YYYY-MM-DD format',
      pattern: '(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})',
      str: 'Deadline is 2024-03-26',
      expected: { year: '2024', month: '03', day: '26' }
    },
    {
      description: 'No date match',
      pattern: '(\\d{2})/(\\d{2})/(\\d{4})',
      str: 'There is no date here',
      expected: null
    }
  ];
  
  // Run test cases
  testCases.forEach(({ description, pattern, str, expected }, index) => {
    const result = extractGroups(pattern, str);
    console.log(`Test ${index + 1}: ${description}`);
    console.log(`Pattern: "${pattern}", String: "${str}", Expected: ${JSON.stringify(expected)}, Result: ${JSON.stringify(result)}`);
    console.log('---');
  });
  