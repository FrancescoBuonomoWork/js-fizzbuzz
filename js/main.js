// console.log("Fizz Buzz");

// bonus 1
const gridDOMElement = document.querySelector('.grid')
console.log(gridDOMElement)

// creamo il ciclo FOR 
for (i = 0; i < 100; i++){
    // console.log("questo è il valore di i", i);
    let n = i + 1;
    // console.log("questo è il valore di n", n);
    
    
    // const divisore3 = n % 3;
    // const divisore5 = n % 5;
    // console.log("divisore 3", divisore3);
    
    if (n % 3 === 0 && n % 5 === 0) {
        n = "fizz buzz";
        // console.log("m-3-5",n);
    } else if (n % 3 === 0) {
        n = "fizz";
        // console.log("questo n è multiplo di 3", n);
        // console.log(n);
    } else if (n % 5 === 0) {
        n = "buzz";
        // console.log(n);
    } 
    // soluzione main esercizio 
    console.log(n);

    // bonus 1
    const boxDOMElement = document.createElement('div');
    console.log(boxDOMElement);
    boxDOMElement.classList.add('box');
    boxDOMElement.innerHTML = n;
    gridDOMElement.append(boxDOMElement)
    
    
}