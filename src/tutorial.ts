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
let names: string[] = ["tim", "dan"];
function checkName(name: string): boolean {
    return names.includes(name);
}
let nameToCheck = "tim";
if (checkName(nameToCheck)) {
    console.log(`${nameToCheck} is in the list`);
} else {
    console.log(`${nameToCheck} is not on the list`);
}
