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

// // challange - part 1 and part 2
// interface Person {
//     name: string;
// }
// interface DogOwner extends Person {
//     dogName: string;
// }
// interface Manager extends Person {
//     managePeple(): void;
//     delegateTasks(): void;
// }

// function getEmployee(): Person | DogOwner | Manager {
//     const random = Math.random();
//     if (random < 0.33) {
//         return {
//             name: "john",
//         };
//     } else if (random < 0.66) {
//         return { name: "sarah", dogName: "rex" };
//     } else {
//         return {
//             name: "bob",
//             managePeple() {
//                 console.log("Managing people");
//             },
//             delegateTasks() {
//                 console.log("Delegating tasks");
//             },
//         };
//     }
// }
// const employee: Person | DogOwner | Manager = getEmployee();
// // console.log(employee);

// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//     return "managePeople" in obj;
// }

// if (isManager(employee)) {
//     employee.delegateTasks();
// }

// // Tuples
// let person: [string, number] = ["john", 23];

// let date: readonly [number, number, number] = [12, 17, 2001];

// function getPerson(): [string, number] {
//     return ["john", 24];
// }
// let randommPerson = getPerson();
// console.log(randommPerson[0]);
// console.log(randommPerson[1]);

// let susan: [string, number?] = ["susan"];

// // enum

// enum ServerResponseStatus {
//     Success = 200,
//     Error = 500,
// }

// Object.values(ServerResponseStatus).forEach((value) => {
//     if (typeof value === "number") {
//         console.log(value);
//     }
// });

// interface ServerResponse {
//     result: ServerResponseStatus;
//     data: string[];
// }

// function getServerResponse(): ServerResponse {
//     return {
//         result: ServerResponseStatus.Success,
//         data: ["first item", "second item"],
//     };
// }

// const response: ServerResponse = getServerResponse();
// console.log(response);

// // challange
// enum UserRole {
//     Admin,
//     Manager,
//     Employee,
// }
// type User = {
//     id: number;
//     name: string;
//     role: UserRole;
//     contact: [string, string];
// };
// function createUser(u: User): User {
//     return u;
// }
// const user: User = createUser({
//     id: 21,
//     name: "tim",
//     role: UserRole.Admin,
//     contact: ["tim@gmail.com", "097663262878"],
// });

// console.log(user);

// // Type Assertion
// let someValue: any = "this is a string";
// let strLength: number = (someValue as string).length;
// console.log(strLength);

// type Bird = {
//     name: string;
// };

// let birdString = '{"name": "Eagle"}';
// let dogString = '{"breed": "Poodle"}';

// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);

// let bird = birdObject as Bird;
// let dog = dogObject as Bird;

// console.log(bird.name);
// console.log(dog.name);

// enum Status {
//     Pending = "pending",
//     Declined = "declined",
// }

// type User = {
//     name: string;
//     status: Status;
// };
// // save Status.Pending in the DB as a string
// // retrieve string from the DB
// const statusValue = "pending";

// const user: User = { name: "john", status: statusValue as Status };

// // Type - unknown

// let unknownValue: unknown;
// unknownValue = "hello world";
// unknownValue = [1, 2, 3];
// unknownValue = 42;
// unknownValue = false;

// if (typeof unknownValue == "number") {
//     unknownValue.toFixed(2);
// }

// function runSomeCode() {
//     const random = Math.random();
//     if (random < 0.5) {
//         throw new Error("there was an error...");
//     } else {
//         throw "some error";
//     }
// }

// try {
//     runSomeCode();
// } catch (error) {
//     if (error instanceof Error) {
//         console.log(error.message);
//     } else {
//         console.log(error);
//     }
// }

// // Type - Never

// // let someValue: never = 0;

// type Theme = "light" | "dark";

// function checkTheme(theme: Theme): void {
//     if (theme === "light") {
//         console.log("light theme");
//         return;
//     }
//     if (theme === "dark") {
//         console.log("dark theme");
//         return;
//     }
//     theme;
// }

// enum Color {
//     Red,
//     Blue,
//     Green,
// }

// function getColorName(color: Color) {
//     switch (color) {
//         case Color.Red:
//             return "Red";
//         case Color.Blue:
//             return "Blue";
//         case Color.Green:
//             return "Green";
//         default:
//             // at build time
//             let unexpectedColor: never = color;
//             // at run time
//             throw new Error(`Unexpected color value : ${color}`);
//     }
// }

// console.log(getColorName(Color.Red));
// console.log(getColorName(Color.Blue));
// console.log(getColorName(Color.Green));

// //  Modules - Global Scope "Gotcha
// import newStudent, { sayHello, person, type Student } from "./action";

// // import { someValue } from "./example.js";

// sayHello("Typescript");
// console.log(newStudent);
// console.log(person);

// const anotherStudent: Student = {
//     name: "bob",
//     age: 22,
// };
// console.log(anotherStudent);

// // Challenge - "typeof" guard
// type ValueType = string | number | boolean;

// let value: ValueType;
// const random = Math.random();
// value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

// function checkValue(value: ValueType): void {
//     if (typeof value === "string") {
//         console.log(value.toLowerCase());
//         return;
//     }
//     if (typeof value === "number") {
//         console.log(value.toFixed(2));
//         return;
//     }
//     console.log(`boolean: ${value}`);
// }
// checkValue(value);

// // Challenge - Equality Narrowing && Challenge - check for property
// type Dog = { type: "dog"; name: string; bark: () => void };
// type Cat = { type: "cat"; name: string; meow: () => void };
// type Animal = Dog | Cat;

// function makeSound1(animal: Animal) {
//     if (animal.type === "dog") {
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// }

// // The "in" operator in TypeScript is used to narrow down the type of a variable when used in a conditional statement.It checks if a property or method exists on an object. If it exists, TypeScript will narrow the type to the one that has this property.

// function makeSound2(animal: Animal) {
//     if ("bark" in animal) {
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// }

// // Challenge - "Truthy"/"Falsy" guard

// function printLength(str: string | null | undefined) {
//     if (str) {
//         console.log(str.length);
//     } else {
//         console.log("No string provided");
//     }
// }

// printLength("st");
// printLength("");
// printLength(null);
// printLength();
// printLength(undefined);

// // Challenge - "instanceof" type guard
// // try {
// //     throw "This is an error";
// //     throw new Error("This is an error");
// // } catch (error) {
// //     if (error instanceof Error) {
// //         console.log(`Caught an Error object: ${error.message}`);
// //     } else {
// //         console.log("unknown error...");
// //     }
// // }

// function checkInput(input: Date | string): string {
//     if (input instanceof Date) {
//         return input.getFullYear().toString();
//     }
//     return input;
// }
// const year = checkInput(new Date());
// const random = checkInput("2020-05-05");

// console.log(year);
// console.log(random);

// // Type Predicate
// type Student = {
//     name: string;
//     study: () => void;
// };
// type User = {
//     name: string;
//     login: () => void;
// };
// type Person = Student | User;
// const randomPerson = (): Person => {
//     return Math.random() > 0.5
//         ? { name: "john", study: () => console.log("Studying") }
//         : { name: "mary", login: () => console.log("Logging in") };
// };

// // const person = randomPerson();
// const person: Person = {
//     name: "anna",
//     login: () => console.log("study...."),
// };

// function isStudent(person: Person): person is Student {
//     // return "study" as Person;
//     return (person as Student).study !== undefined;
// }

// if (isStudent(person)) {
//     person.study();
// } else {
//     person.login();
// }

// // Challenge - Discriminated Unions and exhaustive check using the never type
// type IncrementAction = {
//     type: "increment";
//     amount: number;
//     timestamp: number;
//     user: string;
// };

// type DecrementAction = {
//     type: "decrement";
//     amount: number;
//     timestamp: number;
//     user: string;
// };

// type Action = IncrementAction | DecrementAction;

// function reducer(state: number, action: Action) {
//     switch (action.type) {
//         case "increment":
//             return state + action.amount;
//         case "decrement":
//             return state - action.amount;
//         default:
//             const unexpectedAction: never = action;
//             throw new Error(`Unexpected action: ${unexpectedAction}`);
//     }
// }
// const newState = reducer(15, {
//     type: "increment",
//     user: "john",
//     amount: 5,
//     timestamp: 123456,
// });

// // Generics - Fundamentals

// // let array1: string[] = ['Apple', 'Banana', 'Mango'];
// // let array2: number[] = [1, 2, 3];
// // let array3: boolean[] = [true, false, true];

// let array1: Array<string> = ["Apple", "Banana", "Mango"];
// let array2: Array<number> = [1, 2, 3];
// let array3: Array<boolean> = [true, false, true];

// // Generic Function and Interface
// function genericFunction<T>(arg: T): T {
//     return arg;
// }

// const someStringValue = genericFunction<string>("hi");
// const someNumberValue = genericFunction<number>(21);
// console.log(someStringValue);
// console.log(someNumberValue);

// interface GenericInterface<T> {
//     value: T;
//     getValue: () => T;
// }

// const genericString: GenericInterface<string> = {
//     value: "Hello",
//     getValue() {
//         return this.value;
//     },
// };
// console.log(genericString);

// // Generics - Promise Example
// async function someFunc(): Promise<string> {
//     return "hello world";
// }

// const result = someFunc();

// // Generics - Generate Array

// function generateStringArray(length: number, value: string): string[] {
//     let result: string[] = [];
//     result = Array(length).fill(value);
//     return result;
// }
// console.log(generateStringArray(3, "hi"));

// function createArray<T>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     result = Array(length).fill(value);
//     return result;
// }

// let arrayStrings = createArray<string>(10, "hi");
// let arrayNumbers = createArray<number>(10, 100);
// console.log(arrayStrings);
// console.log(arrayNumbers);

// // multiple variable types
// function pair<T, U>(param1: T, param2: U): [T, U] {
//     return [param1, param2];
// }
// let result = pair<number, string>(123, "hi");
// console.log(result);

// function processValue<T extends string | number>(value: T): T {
//     console.log(value);
//     return value;
// }

// processValue("hello");
// processValue(123);
// // processValue(true);

// // ## Generics - Type Constraints 2

// type Car = {
//     brand: string;
//     model: string;
// };

// const car: Car = {
//     brand: "ford",
//     model: "mustang",
// };

// type Product = {
//     name: string;
//     price: number;
// };

// const product: Product = {
//     name: "shoes",
//     price: 1.99,
// };

// type Student = {
//     name: string;
//     age: number;
// };

// const student: Student = {
//     name: "peter",
//     age: 20,
// };

// function printName<T extends { name: string }>(input: T): void {
//     console.log(input.name);
// }
// printName(student);
// printName(product);
// // printName(car);

// // Generics - Default Value
// interface StoreData<T = any> {
//     data: T[];
// }
// const storeNumbers: StoreData<number> = {
//     data: [1, 2, 3, 4, 5],
// };

// const randomStuff: StoreData = {
//     data: ["random", 21],
// };

// Fetch Data
const url = "https://www.course-api.com/react-tours-project";

type Tour = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
    something: boolean;
};

async function fetchData(url: string): Promise<Tour[]> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Tour[] = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        const errMsg =
            error instanceof Error ? error.message : "there was an error";
        console.log(errMsg);
        return [];
    }
}

const tours = await fetchData(url);
tours.map((tour) => {
    console.log(tour.something);
});
