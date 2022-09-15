import { useReducer } from 'react';
import { ADD_HOME, ADD_TRAVEL, ADD_PLEDGE, REMOVE_PLEDGE } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of 'UPDATE_PRODUCTS', return a new state object with an updated products array

    case ADD_TRAVEL:
      return {
        // ...state,
        // cartOpen: true,
        // cart: [...state.cart, action.product],
      };

    case ADD_HOME:
      return {
        // ...state,
        // cart: [...state.cart, ...action.products],
      };

    case ADD_PLEDGE:
      //   let newState = state.cart.filter((product) => {
      //     return product._id !== action._id;
      //   });

      return {
        //     ...state,
        //     cartOpen: newState.length > 0,
        //     cart: newState,
      };

    case REMOVE_PLEDGE:
      return {
        // ...state,
        // cartOpen: false,
        // cart: [],
      };

    //  if its none of these actions, do not update state at all and kep things the same
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
