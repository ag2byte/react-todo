import { ADD_TODO, REMOVE_TODO } from "./action.types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(action.payload, action);
      return [...state, action.payload];
      break;
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
      break;
  }
};
