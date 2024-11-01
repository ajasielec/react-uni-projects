import {Employee} from "./types";

const employees: Employee[] = [
    {
        firstName: "Adam",
        lastName: "Król",
        age: 36,
        position: "Developer",
        programmingLanguage: ["C#", "JavaScript", "TypeScript"]
    },
    {
        firstName: "Piotr",
        lastName: "Jurkiewicz",
        age: 29,
        position: "Developer",
        programmingLanguage: ["C#", "JavaScript", "C++"]
    },
    {
        firstName: "Anna",
        lastName: "Jasielec",
        age: 21,
        position: "Manager",
        programmingLanguage: ["C++", "JavaScript", "Java"]
    },
    {
        firstName: "Marta",
        lastName: "Myszka",
        age: 31,
        position: "Designer",
        programmingLanguage: ["Java", "PHP", "Python"]
    },
    {
        firstName: "Anita",
        lastName: "Młot",
        age: 22,
        position: "Developer",
        programmingLanguage: ["Python", "PHP", "C++"]
    },
    {
        firstName: "Jordan",
        lastName: "Smith",
        age: 31,
        position: "Designer",
        programmingLanguage: ["Go", "Java", "C++"]
    }
]

const getDevelopers = (employees: Employee[]) => {
    return employees.filter(e => e.position === "Developer");
}

const findEmployee = (employees: Employee[], name: string) => {
    return employees.find(e => e.firstName.includes(name) || e.lastName.includes(name))
}

function addExperience(employee: Employee, lang: string) {
    employee.programmingLanguage.push(lang);
}

function addExperiences(employee: Employee[], lang: string) {
    return employee.map(e => e.programmingLanguage.push(lang));
}

console.log("employees", employees);
const developers = getDevelopers(employees);
console.log("developers", developers);
const anna = findEmployee(employees, "Anna");
console.log("anna", anna);
if (anna) {
    addExperience(anna, "TypeScript");
}
console.log("anna", anna);
addExperiences(developers, "C");
console.log("developers", developers);

