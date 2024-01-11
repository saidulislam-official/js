function factorialWhile(number) {
  let num = 1;
  let result = 1;
  while (num <= number) {
    result *= num;
    num++;
  }
  return result;
}

const output = factorialWhile(5);

console.log(output); // 120