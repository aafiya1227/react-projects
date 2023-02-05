/* eslint-disable default-case */
const initialState = {
  list: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case "REMOVE":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default todoReducer;
