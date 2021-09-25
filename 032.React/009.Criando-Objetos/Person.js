class Person{
  
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greetings(){
    console.log(`Hello, how is it going? my name is ${this.name}`);
  }
}

module.exports=Person;