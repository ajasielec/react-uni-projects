export type PositionType = "Developer" | "Manager" | "Designer";

export type Employee = {
    firstName: string,
    lastName: string,
    age: number,
    position: PositionType,
    programmingLanguage: string[]
}

export type Reader = {
    firstName: string,
    lastName: string,
    libraryCardNumber: number
}

export type Book = {
    title: string,
    author: string,
    year: number,
    borrower: Reader | null,
}