import {Book, Reader} from "./types";

const readers: Reader[] = [
    {
        firstName: "Anna",
        lastName: "Jasielec",
        libraryCardNumber: 1234,
    },
    {
        firstName: "Karol",
        lastName: "Laudanski",
        libraryCardNumber: 5552,
    },
    {
        firstName: "Joanna",
        lastName: "Nowak",
        libraryCardNumber: 3213,
    },
    {
        firstName: "Piotr",
        lastName: "Werner",
        libraryCardNumber: 9991,
    },
]
const catalog: Book[] = [
    {
        title: "Hobbit",
        author: "Tolkien",
        year: 1937,
        borrower: readers[0]
    },
    {
        title: "Wiedźmin",
        author: "Sapkowski",
        year: 1986,
        borrower: readers[0]
    },
    {
        title: "Lśnienie",
        author: "Stephen King",
        year: 1977,
        borrower: readers[1]
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        borrower: null
    },
    {
        title: "Orient Express",
        author: "Agatha Christie",
        year: 1934,
        borrower: readers[3]
    },
    {
        title: "Harry Potter",
        author: "J. K. Rowling",
        year: 2000,
        borrower: null
    },
]

const findBook = (catalog: Book[], title: string) => {
    return catalog.find(book => book.title === title);
}

const getAvailableBooks = (catalog: Book[]) => {
    return catalog.filter(book => book.borrower === null);
}

function borrowBook(book: Book, reader: Reader) {
    book.borrower = reader;
}

console.log("findBook", findBook(catalog, "Hobbit"));
const availableBooks = getAvailableBooks(catalog);
console.log("Available books:", availableBooks);
borrowBook(availableBooks[0], readers[2]);
console.log("Available books (after borrowing):", getAvailableBooks(catalog));



