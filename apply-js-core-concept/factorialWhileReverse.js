function factorialWhile(num) {
    let result = 1;
    while (num > 0) {
      result *= num;
      num--;
    }
    return result;
  }
  
  const output = factorialWhile(5);
  
  console.log(output); // 120