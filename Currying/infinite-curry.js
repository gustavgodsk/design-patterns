const sum =
    (acc = 0) =>
        (x) =>
            x === undefined ? acc : sum(acc + x);

const sum2 = (x) => (y) => x + y;

console.log(sum()(1)(2)(3)(5)()); // 11
console.log(sum()()); // 0
console.log(sum2(1)()); // NaN
console.log(sum2(1)(1)); // 2
