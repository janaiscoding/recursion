function fib(n){
    const array = [0]
    let fibo = 0;
    let first = 0;
    let second = 1;
    while (array.length < n){
        fibo = second;
        second += first;
        first = fibo;
        array.push(fibo)
    }
    console.log(array)
}

function fibsR(n) {

    if(n <= 0) {
      return 'Must be greater than 0';
      } else if (n <= 1) {
        return [0]
      } else if (n <= 2) {
        return [0, 1];
      } else {
        return [...fibsR(n-1), fibsR(n-1)[n-2] + fibsR(n-1)[n-3]]
      }
  
  }