let num1 = 2;
let num2 = 5;

function multiply(m, n) {
    let t;
    if(m > n) {
        t=m;
    } else {
        t=n;
    }
    return t;
}
    console.log(multiply(num1, num2));