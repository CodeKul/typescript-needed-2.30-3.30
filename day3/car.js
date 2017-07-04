//IIFE

let Engine = (function () {
    return {
        bhp: 1700,
        oilCool : true
    };
})();

// Module 1
let Car = ((eng) => {
    return () => console.log(`Bhp ${eng.bhp} OilCool - ${eng.oilCool}`) 
})(Engine);

// Module 2


let my = Car;
my()