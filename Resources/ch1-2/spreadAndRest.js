// ... it is spread and rest operator

// # Array spread
const numbers = [1,2, 3];
const newNumbers = [...numbers, 4]
console.log(newNumbers);

// # Object spread
const Person = {
    name : "Md Nazmul Hossain"
}
const newPerson = {
    ...Person,
    age: 24
}

console.log(newPerson);


const filter = (...args) => {
    return args.filter(el => el===1)
}

console.log(filter(1,2,3));

