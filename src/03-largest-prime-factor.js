function largestPrimeFactor(n) {
    let i = 2;
    while (i <= n) {
        console.log(i);
        if (n % i == 0) {
            n = n / i;
        } else {
            i = i + 1;
        }
    }
    return i;
}

console.log(largestPrimeFactor(600851475143));
