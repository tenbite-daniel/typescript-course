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
// function sum(message: string, ...numbers: number[]): string {
//     const doubled = numbers.map((num) => num * 2);
//     console.log(doubled);
//     let total = numbers.reduce((prev, current) => {
//         return prev + current;
//     }, 0);
//     return `${message} ${total}`;
// }
// let result = sum("The total is: ", 1, 2, 3, 4, 5);
// console.log(result);

// functions - void return type
// function logMessage(message: string): void {
//     console.log(message);
//     // return 'hello world'
// }
// logMessage("Hello, TypeScript");

// Functions - Using Union Types as Function Parameters
// Challenge

// function processInput(input: string | number) {
//     if (typeof input === "number") {
//         input = input * 2;
//         console.log(input);
//     } else {
//         input = input.toUpperCase();
//         console.log(input);
//     }
// }

// processInput(20);
// processInput("tim");

// Functions - Using Objects as Function Parameters
function createEmployee({ id }: { id: number }): {
    id: number;
    isActive: boolean;
} {
    return { id, isActive: id % 2 === 0 };
}
const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

// alternative
function createStudent(student: { id: number; name: string }): void {
    console.log(`welcome to the course ${student.name.toUpperCase()}!!!`);
}
const newStudent = {
    id: 5,
    name: "anna",
    email: "anna@gmail.com",
};
createStudent(newStudent);
createStudent({
    id: 1,
    name: "bob",
    // Gotcha - Excess Property Checks
    // email: "bobo@gmail.com",
});
