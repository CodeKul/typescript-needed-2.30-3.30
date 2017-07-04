let calc = function (num1, num2) {
    return num1 + num2
}

let calcV2 = (num1, num2) => num1 + num2;

let calcV3 = (num1, num2) => {
    console.log('Result is ' + (num1 + num2))

    console.log(` Result is ${num1 + num2} 
        z'cvcl;'z
        szsvz'v
        F";s'd;
    `)
    return 12
}

let arr = [
    'Android', 'Ios', 'Rim', 'Windows', `Palm`, `Web OS`
];

for (let i = 0; i < arr.length; i++) {
    console.log(`${i}`)
}

arr.forEach(function (num) {
    console.log(`${num}`)
});

arr.forEach((num) => console.log(`${num}`))
