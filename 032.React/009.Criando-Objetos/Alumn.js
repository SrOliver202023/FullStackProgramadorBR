const Person = require('./Person');

class Alumn extends Person{

  constructor(name, age, team){
    super(name, age);
    this.team = team;
  }
}

module.exports=Alumn;