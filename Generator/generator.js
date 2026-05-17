function* nat() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const it = nat();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
