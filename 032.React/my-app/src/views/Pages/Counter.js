import React, { useEffect, useState } from 'react';

function Counter(props){

  const [count, setCount] = useState(0);

  useEffect(()=>{
    const receive = parseInt(localStorage.getItem("state"));
    receive !== Number ? setCount(receive): setCount(props.iCount);
  },[])

  useEffect(()=>{
    document.title = props.iCount;
    localStorage.setItem("state", JSON.stringify(count));
  })

  function add(){
    setCount(count => count + 1);
  }

  const styled = {padding:10, fontSize:20};
  return(
      <div>
        <h1>Counter: {props.iCount}</h1>
        <button style={styled} onClick={add}>add</button>
      </div>
  )
}

































// class Counter extends React.Component{
  // constructor(props){
  //   super(props)

  //   this.state = {count: 0};
  //   this.add = this.add.bind(this);
  // }
  // Só posso alterar os valores diretamente, quando estiver
  // atribuindo valores. como no constructor
  // add(){
    // this.setState({ count: this.state.count + 1 })
//     this.setState((state)=> {return{count: state.count + 1 }},()=>{
//       localStorage.setItem("state", JSON.stringify(this.state));
//     });
//   }

//   componentDidMount(){
//     this.setState((state)=>JSON.parse(localStorage.getItem("state")));

//   }
//   componentWillUnmount(){

//   }

//   render(){
//     return(
//       <div>

//         <h1>Counter: {this.state.count}</h1>
//         <button onClick={this.add}>--ADD--</button>
//       </div>
//     )
//   }
// }





// function Counter(){
//   return(
//     <div>
//       Hello Counter!
//     </div>
//   )
// }

export default Counter;

