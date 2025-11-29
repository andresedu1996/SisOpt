const { suma, resta } = require('./index.js');

function test() {
    let passed = 0;
    let failed = 0;

    // Test 1: Suma
    if (suma(2, 3) === 5) {
        console.log("Test 1 pasó: suma(2, 3) = 5");
        passed++;
    } else {
        console.log("Test 1 falló");
        failed++;
    }

    // Test 2: Resta
    if (resta(10, 4) === 6) {
        console.log("Test 2 pasó: resta(10, 4) = 6");
        passed++;
    } else {
        console.log("Test 2 falló");
        failed++;
    }

    // Test 3: Suma con negativos
    if (suma(-5, 3) === -2) {
        console.log("Test 3 pasó: suma(-5, 3) = -2");
        passed++;
    } else {
        console.log("Test 3 falló");
        failed++;
    }

    console.log(`\nResultados: ${passed} pasaron, ${failed} fallaron`);
    
    if (failed > 0) {
        process.exit(1); // Salir con código de error
    }
}

test();