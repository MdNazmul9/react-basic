class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "nazmul";
  gender = "Female";

  printMyName = () => {
    console.log(this.name);
  };
}

const mp = new Person();
mp.printMyName();
mp.printGender();
