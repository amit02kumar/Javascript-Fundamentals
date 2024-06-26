function outerFunction(outerParam) {
    let outerVar = 'variable from the outer function';
  
    function innerFunction(innerParam) {
      console.log(`Outer parameter: ${outerParam}`);
      console.log(`Outer variable: ${outerVar}`);
      console.log(`Inner parameter: ${innerParam}`);
    }
  
    return innerFunction;
  }
  
  // Example usage
  const myInnerFunction = outerFunction('Outer parameter value');
  myInnerFunction('Inner parameter value');
  