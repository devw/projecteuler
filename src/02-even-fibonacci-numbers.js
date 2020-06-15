// https://projecteuler.net/problem=2

https: var memo = {
    1: 1,
    2: 2,
};
var fib = (n) =>
    n in memo ? memo[n] : (memo[n] = fib(n - 1) + fib(n - 2)) && memo[n];

var sum = 0;
for (let n = 1; fib(n) < 4000000; n++) if (fib(n) % 2 === 0) sum += fib(n);
console.log(sum);
