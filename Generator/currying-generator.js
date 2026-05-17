const nat = (
    (x) => (i) =>
        function*() {
            yield i;
            yield* x(x)(i + 1)();
        }
)(
    (x) => (i) =>
        function*() {
            yield i;
            yield* x(x)(i + 1)();
        },
);

const it = nat(0)();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
