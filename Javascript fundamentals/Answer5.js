function getEstimatedDeliveryTime(packageType) {
    let deliveryTime;
  
    switch (packageType.toLowerCase()) {
      case 'standard':
        deliveryTime = '3-5 days';
        break;
      case 'express':
        deliveryTime = '1-2 days';
        break;
      case 'overnight':
        deliveryTime = 'next day';
        break;
      default:
        deliveryTime = 'Invalid package type';
    }
  
    return deliveryTime;
  }
  
  // Test cases
  const packageTypes = ['standard', 'express', 'overnight', 'invalid'];
  
  packageTypes.forEach(type => {
    console.log(`Package type: ${type} => Estimated delivery time: ${getEstimatedDeliveryTime(type)}`);
  });
  