const number = 1; // premitive 
const num2 = number; // reference
console.log(num2);


const person = {
    name : "nazmul" //premitive
}
//   const secondPerson = Person; // Reference
  const secondPerson = {
    ...person
};// Reference

person.name = "Manu"
console.log(secondPerson) ;

