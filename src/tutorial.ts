// objects
let car: { brand: string; year: number } = {
    brand: "toyota",
    year: 2020,
};
car.brand = "ford";
// car.color = "blue";

let car1: { brand: string; year: number } = {
    brand: "audi",
    year: 2022,
};

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

items[0].title = "new boook";
