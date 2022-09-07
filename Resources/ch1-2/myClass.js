class Human{
    constructor(){
      this.gender  = "male";
    }
    
    printGender(){
      console.log(this.gender);
    }
  }
  
  
  class Person extends Human{
    constructor(){
      super()
      this.name = "nazmul";
      this.gender  = "Female";
      
    }
    
    printMyName(){
      console.log(this.name);
    }
  }
  
  
  const mp = new Person(); 
  mp.printMyName();
  mp.printGender();