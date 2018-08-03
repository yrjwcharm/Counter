import * as types from '../actions/actionTypes';

//const initialState = {
//  count: 0
//};

//export default function counter(state={count:0}, action) {
//  const count=state.count;
//  switch (action.type) {
//    case types.INCREMENT:
//      return {count: count + 1};
//    case types.DECREMENT:
//      return {count: count - 1};
//    default:
//      return state;
//  }
//}
//两一种写法
export const counter=(state={count:0}, action)=> {
  const count=state.count;
  switch (action.type) {
    case types.INCREMENT:
      return {count: count + 1};
    case types.DECREMENT:
      return {count: count - 1};
    default:
      return state;
  }
}
