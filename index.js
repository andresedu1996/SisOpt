function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

console.log("Aplicación iniciada");
console.log("Suma(5, 3):", suma(5, 3));
console.log("Resta(10, 4):", resta(10, 4));

module.exports = { suma, resta };