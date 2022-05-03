const array = JSON.parse(localStorage.getItem("price"));
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i]);
}
console.log(sum);
document.write(sum);
/*if (price === null) {
    document.write(0)
} else {
    document.write(result);
};*/