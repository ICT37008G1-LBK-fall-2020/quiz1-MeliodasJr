function getPositiveNumbersAverage(numbers) {
    const positivenumbers = numbers.filter((number) => {
      return number > 0;
    });
  
    const positiveNumbersSum = positivenumbers.reduce((acc, number) => {
      return acc + number;
    }, 0);
  
    return positiveNumbersSum / positivenumbers.length;
  }
  
  console.log(getPositiveNumbersAverage([4, -8, 8]));