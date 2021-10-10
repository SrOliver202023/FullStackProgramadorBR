module.exports = function counterReducer(state = 6, action){
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;      
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}


