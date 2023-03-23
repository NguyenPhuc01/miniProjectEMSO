const initialState = {
  allUser: [],
  loading: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_USER_SUCCESS":
      return {
        ...state,
        allUser: action.payload,
        loading: false,
      };
    case "GET_ALL_USER_REQUESS":
      return {
        loading: true,
      };
    case "GET_ALL_USER_FAIL":
      return {
        loading: false,
      };
    case "DELETE_USER":
      return {
        ...state,
        allUser: state.allUser.filter((e) => e.id !== action.payload),
      };
    case "ADD_USER":
      return {
        ...state,
        allUser: [action.payload, ...state.allUser],
      };
    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        // allUser: [action.payload, ...state.allUser],
      };

    default:
      return state;
  }
};
export default UserReducer;
