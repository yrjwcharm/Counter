//import * as  types from './actionTypes';
import {INCREMENT,DECREMENT} from './actionTypes'
export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}
