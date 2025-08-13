// functions in typescript

// function sayHi(name: string) {
//     console.log(`Hello there ${name.toUpperCase()}`);
// }
// sayHi("Tim");
// sayHi(3)

// function calculateDiscount(price: number): number {
//     const hasDiscount = true;
//     if (hasDiscount) {
//         return price;
//     }
//     return price * 0.9;
// }

// const finalPrice = calculateDiscount(200);
// console.log(finalPrice);

// why to be careful of any
// function addThree(number: any) {
//     let anotherNumber: number = 3;
//     return number + anotherNumber;
// }
// const result = addThree(3);
// const someValue = result;

// run time error
// someValue.myMethod();

// challange functions
// let names: string[] = ["tim", "dan"];
// function checkName(name: string): boolean {
//     return names.includes(name);
// }
// let nameToCheck = "tim";
// if (checkName(nameToCheck)) {
//     console.log(`${nameToCheck} is in the list`);
// } else {
//     console.log(`${nameToCheck} is not on the list`);
// }

// optional and default parameters in functions

// //optional parameter
// function calculatePrice(price: number, discount?: number): number {
//     return price - (discount || 0);
// }

// let priceAfterDiscount = calculatePrice(100, 20);

// // default parameter
// function calculateScore(
//     initialScore: number,
//     penaltyPoints: number = 0
// ): number {
//     return initialScore - penaltyPoints;
// }

// let scoreAfterPenalty = calculateScore(100, 20);
// let scoreWithoutPenalty = calculateScore(300);

// rest parameter
function sum(message: string, ...numbers: number[]): string {
    const doubled = numbers.map((num) => num * 2);
    console.log(doubled);
    let total = numbers.reduce((prev, current) => {
        return prev + current;
    }, 0);
    return `${message} ${total}`;
}
let result = sum("The total is: ", 1, 2, 3, 4, 5);
console.log(result);
