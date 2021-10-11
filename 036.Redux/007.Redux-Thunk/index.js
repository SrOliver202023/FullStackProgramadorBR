const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const fetch = require('cross-fetch');


const initialState = [];

const addItem = (item) => { return { type:"ADD_ITEM", payload:item } }

const loadItemAndAdd = ()=>{
  return(dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res=>res.json())
      .then(json=>{
        dispatch(addItem(json));
      });
  }
}

const listReducer = (state = initialState, action)=>{
  switch(action.type){
    case 'ADD_ITEM':
      if(initialState.length > 0){
        return[...state, action.payload];
      }else{
        return[action.payload];
      }
    default:
      return state;
  }
}
const store = createStore(listReducer, applyMiddleware(thunk));
// store.dispatch(addItem({id:1, title:"New Item", completed: true}));
store.dispatch(loadItemAndAdd());

store.subscribe(()=>{ console.log(store.getState()) })