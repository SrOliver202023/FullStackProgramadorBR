const redux = require('redux');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const { incrementAction, decrementAction } = require('./actions/CounterActions');
const { addItemAction } = require('./actions/ListActions');
const counterReducer = require('./reducers/CounterReducer');
const listReducer = require('./reducers/ListReducer');

const allReducers = combineReducer({
  counter: counterReducer,
  list: listReducer
})

const store = createStore(allReducers);

// getState().list, getState().counter
console.log(store.getState());
store.subscribe(()=>console.log(store.getState()));

store.dispatch(addItemAction("Um novo Item"))
store.dispatch(incrementAction());
store.dispatch(incrementAction(1));
store.dispatch(incrementAction(5));
