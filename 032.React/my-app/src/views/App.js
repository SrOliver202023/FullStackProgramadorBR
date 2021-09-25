import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
// import Header from './Utils/Header/Header';
import Counter from '../views/Pages/Counter';

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  let time = 0;

  useEffect(()=>{
    let timer = setInterval(()=>{
      time++;
      setCount(time);
      if(time > 205){
        clearInterval(timer);
        setShow(false);
      }
    }, 100);
  },[])

  if(show){
    return (
      <div>
        {/* <Header name="ProgBr" namePage={"Home"}></Header> */}
        <Counter iCount={count}></Counter>
      </div>
    )
  }else{
    return (
      <div>
        Sem contador...
      </div>
    )
  }
}

export default App;
