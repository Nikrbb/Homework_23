let sum = (() => {
    let calc = 0;
    return (param) => {
        return calc += param;
    }
})();

console.log(sum(3)); // 3
console.log(sum(5)); // 8 
console.log(sum(20)); // 28