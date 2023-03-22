const initialState = {
  allUser: [],
};

const User = (state = initialState, action) => {
  // console.log("action", action.payload);
  switch (action.type) {
    case "GET_ALL_USER":
      return {
        ...state,
        allUser: action.payload,
      };

    default:
      return state;
  }
};
export default User;
