import { ADD, LESS, CATEGORIES } from './action_type';

export const reducer = (state = {count: 0, data: {}}, action) => {
    switch (action.type) {
      case ADD:
        return {
            ...state,
            count: ++state.count
        };
      case LESS:
        return {
            ...state,
            count: --state.count
        };
      case CATEGORIES: 
        return {
            ...state,
            data: action.data
        }
      default:
        return state;
    }
};