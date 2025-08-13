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

// // Functions - Using Objects as Function Parameters
// function createEmployee({ id }: { id: number }): {
//     id: number;
//     isActive: boolean;
// } {
//     return { id, isActive: id % 2 === 0 };
// }
// const first = createEmployee({ id: 1 });
// const second = createEmployee({ id: 2 });
// console.log(first, second);

// // alternative
// function createStudent(student: { id: number; name: string }): void {
//     console.log(`welcome to the course ${student.name.toUpperCase()}!!!`);
// }
// const newStudent = {
//     id: 5,
//     name: "anna",
//     email: "anna@gmail.com",
// };
// createStudent(newStudent);
//     // Gotcha - Excess Property Checks
// createStudent({
//     id: 1,
//     name: "bob",
//     // email: "bobo@gmail.com",
// });

// // Challange

// function processData(
//     input: string | number,
//     config: { reverse: boolean } = { reverse: false }
// ): string | number {
//     if (typeof input === "number") {
//         return input * input;
//     } else {
//         return config.reverse
//             ? input.toUpperCase().split("").reverse().join("")
//             : input.toUpperCase();
//     }
// }

// console.log(processData(10));
// console.log(processData("hello"));
// console.log(processData("hello", { reverse: true }));

// // Type Alias
// type User = { id: number; name: string; isActive: boolean };
// const john: User = {
//     id: 1,
//     name: "john",
//     isActive: true,
// };
// const susan: User = {
//     id: 1,
//     name: "susan",
//     isActive: false,
// };

// function createUser(user: User): User {
//     console.log(`Hello there ${user.name.toUpperCase()} !!!`);
//     return user;
// }

// type StringOrNumber = string | number;
// let value: StringOrNumber;
// value = "hello";
// value = 123;

// type Theme = "light" | "dark";

// let theme: Theme;
// theme = "dark";
// theme = "light";

// function setTheme(t: Theme) {
//     theme = t;
// }
// setTheme("dark");

// // challange
// type Employee = { id: number; name: string; department: string };
// type Manager = { id: number; name: string; employees: Employee[] };
// type Staff = Employee | Manager;

// function printStaffDetails(staff: Staff): void {
//     if ("employees" in staff) {
//         console.log(
//             `${staff.name} is a manager of ${staff.employees.length} employees`
//         );
//     } else {
//         console.log(
//             `${staff.name} is an employee in the ${staff.department} department`
//         );
//     }
// }

// const alice: Employee = { id: 1, name: "alice", department: "Sales" };
// const steve: Employee = { id: 2, name: "steve", department: "HR" };
// const bob: Manager = { id: 1, name: "bobo", employees: [alice, steve] };

// printStaffDetails(alice);
// printStaffDetails(bob);
// printStaffDetails(steve);

// // the intersection type in Union
// type Book = { id: number; name: string; price: number };
// type DiscountedBook = Book & { discount: number };
// const book1: Book = {
//     id: 1,
//     name: "how to cook a dragon",
//     price: 15,
// };
// const book2: Book = {
//     id: 2,
//     name: "the secret life of unicorns",
//     price: 18,
// };
// const discountedBook: DiscountedBook = {
//     id: 2,
//     name: "Gnomes vs. Goblins: The Ultimate Guide",
//     price: 25,
//     discount: 0.15,
// };

// // type alias also supports computed properties
// const propName = "age";
// type Animal = {
//     [propName]: number;
// };
// let tiger: Animal = { [propName]: 5 };

// // Interface type - allow to setup  for objects (only objects)
// interface Book {
//     readonly isbn: number;
//     title: string;
//     author: string;
//     genre?: string;
//     // method
//     printAuthor(): void;
//     printTitle(message: string): string;
//     printSomething: (someValue: number) => number;
// }
// const deepWork: Book = {
//     isbn: 123,
//     title: "deep work",
//     author: "cal newport",
//     // genre: "self-help",
//     // printAuthor() {
//     //     console.log(this.author);
//     // },
//     printTitle(msg) {
//         return `${this.title} ${msg}`;
//     },
//     // first option
//     printSomething: function (someValue) {
//         return someValue;
//     },
//     // second option
//     // printSomething: (someValue) => {
//     //     // console.log(this.)
//     //     console.log(deepWork.author);
//     //     return someValue;
//     // },
//     //third option
//     // printSomething(someValue) {
//     //     return someValue;
//     // },
//     printAuthor: () => {
//         console.log(deepWork.author);
//     },
// };
// // deepWork.printAuthor();
// // const result = deepWork.printTitle("is awesome book");
// // console.log(result);
// console.log(deepWork.printSomething(34));

// // challange - interface
// interface Computer {
//     readonly id: number;
//     brand: string;
//     ram: number;
//     storage?: number;
//     upgradeRam(value: number): number;
// }
// const laptop: Computer = {
//     id: 1,
//     brand: "acer",
//     ram: 4,
//     upgradeRam(value: number) {
//         this.ram += value;
//         return this.ram;
//     },
// };

// console.log(laptop.upgradeRam(8));
// console.log(laptop);
// console.log(laptop.storage);

// // merging interface
// interface Person {
//     name: string;
//     getDetails(): string;
// }
// interface DogOwner {
//     dogName: string;
//     getDogDetails(): string;
// }
// interface Person {
//     age: number;
// }

// const person: Person = {
//     name: "john",
//     age: 12,
//     getDetails() {
//         return `Name: ${this.name}, Age: ${this.age}`;
//     },
// };
// // extned interface (inherit from an interface)
// interface Employee extends Person {
//     employeeID: number;
// }
// const employee: Employee = {
//     name: "jane",
//     age: 28,
//     employeeID: 123,
//     getDetails() {
//         return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeID}`;
//     },
// };

// console.log(person.getDetails());
// console.log(employee.getDetails());

// interface Manager extends Person, DogOwner {
//     managePeople(): void;
// }

// const manager: Manager = {
//     name: "bob",
//     age: 35,
//     dogName: "rex",
//     getDetails() {
//         return `Name: ${this.name}, Age: ${this.age}`;
//     },
//     getDogDetails() {
//         return `Name: ${this.dogName}`;
//     },
//     managePeople() {
//         console.log("Managing people...");
//     },
// };

// manager.managePeople();

// challange - part 1 and part 2
interface Person {
    name: string;
}
interface DogOwner extends Person {
    dogName: string;
}
interface Manager extends Person {
    managePeple(): void;
    delegateTasks(): void;
}

function getEmployee(): Person | DogOwner | Manager {
    const random = Math.random();
    if (random < 0.33) {
        return {
            name: "john",
        };
    } else if (random < 0.66) {
        return { name: "sarah", dogName: "rex" };
    } else {
        return {
            name: "bob",
            managePeple() {
                console.log("Managing people");
            },
            delegateTasks() {
                console.log("Delegating tasks");
            },
        };
    }
}
const employee: Person | DogOwner | Manager = getEmployee();
// console.log(employee);

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
    return "managePeople" in obj;
}

if (isManager(employee)) {
    employee.delegateTasks();
}
