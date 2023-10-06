// console.log("Fizz Buzz");

// creamo il ciclo FOR 
for (i = 0; i < 100; i++){
    // console.log("questo è il valore di i", i);
    let n = i + 1;
    // console.log("questo è il valore di n", n);
    
    const divisore3 = n % 3;
    const divisore5 = n % 5;
    
    // console.log("divisore 3", divisore3);
    if (divisore3 === 0) {
        n = "fizz";
        // console.log("questo n è multiplo di 3", n);
        // console.log(n);
    } else if (divisore5 === 0) {
        n = "buzz";
        // console.log(n);
    } else if (divisore3 === 0 && divisore5 === 0) {
        n = "fizz buzz";
        // console.log("m-3-5",n);
    }
    console.log(n);
}