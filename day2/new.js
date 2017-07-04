var empSal = 1000;

function getSal() {
    return '';
}

empSal = 'xyz';

//ES6 

let st = 10;
if (true) {
    let st = 20;
}
console.log(st);

let tax = function (num1, num2) {
    return num1 * num2;
}

function params(num1, salCalc) {
    salCalc();
}

function funRet() {
    return function () {
        return function () {
            return 'xyz';
        };
    }
}

tax(10, 23);

params(123, function () { });

let ft = funRet();
let ft1 = ft();
console.log('Ft - ' + ft1());
