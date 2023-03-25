const initialState = {
  allUser: [],
  loading: false,
  loadingUpdate: false,
  loadingAddUser: false,
  errAddUSer: "",
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
    case "ADD_USER_SUCCESS":
      return {
        ...state,
        allUser: [action.payload, ...state.allUser],
        loadingAddUser: false,
      };
    case "ADD_USER_REQUEST":
      return {
        ...state,
        loadingAddUser: true,
      };
    case "ADD_USER_FAIL":
      // console.log("err", action.payload.message);
      return {
        ...state,
        errAddUSer: action.payload.message,
        loadingAddUser: false,
      };
    case "UPDATE_USER_SUCCESS":
      const useUpdate = state.allUser.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        } else {
          return user;
        }
      });
      return {
        ...state,
        allUser: useUpdate,
        loadingUpdate: false,
      };
    case "UPDATE_USER_REQUEST":
      return {
        ...state,
        loadingUpdate: true,
      };
    case "UPDATE_USER_FAIL":
      return {
        ...state,
        loadingUpdate: false,
      };

    default:
      return state;
  }
};
export default UserReducer;
