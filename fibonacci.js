const fibonacci = (n, a = [0, 1]) => {
  if (n <= 0) return "Please insert a valid number";
  if (a.length >= n) return a;
  return fibonacci(n, [...a, a[a.length - 2] + a[a.length - 1]]);
};

console.log(fibonacci(8)); //[0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(-1)); // Error
console.log(fibonacci(0)); // Error
