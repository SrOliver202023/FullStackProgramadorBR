const jwt = require('jsonwebtoken');

const user = {
  id: "20",
  name: "Joao",
  email: "joao@gmail.com",
  password: "1234567"
}

function test(){
  const secret = "fsklasdj33209anfdfko";
  const token = jwt.sign({id: user.id, name:user.name, email:user.email},secret, {expiresIn:1});
  let count = 0;
  let timeIn = setInterval(() => {
    try{
      const validData = jwt.verify(token, secret)
      // console.log(token)
      // console.log(validData);
      console.log(`${++count}-OK!`);
    } catch(error){
      console.log('Error!');
      clearInterval(timeIn);
    }
  }, 1);

}
test();