// const myArray2 = ["A"]
// console.log(myArray2)

// console.clear()
// for (let i = 0; i < 4; i++) {
//     console.log("salaam", i);
// }

// for (let i = 10; i > 0; i--) {
//     console.log("salaam", i);
// }

// for(let i = 1; i <=10; i++){
//     console.log("10 x" + i + "=" + i*10);
// 
// prompt("hello")

// const perfume = 9000.4
// const totalAmount = Math.round(perfume);

// console.log(totalAmount,perfume)

// const randomNumber = Math.random()
// console.log(randomNumber)

const userNumber = prompt("enter your number");
const randomNumber = Math.random()

const computerNumber = Math.ceil(randomNumber*6)
console.log(computerNumber)

let totalScore = 0;

if (userNumber === computerNumber){
    alert("ohh out by computer (dumb Machine)");
}
else{
    totalScore += userNumber;
    alert("your total is:" + totalScore);
}





















