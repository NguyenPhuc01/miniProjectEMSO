import axios from "axios";
import { ADD_USER, DELETE_USER, GET_ALL_USER } from "../Types/TypesUser";
const token =
  "c3d6ab434a43fd0b0dc736f5004307af7176c1810279232498f53104738b2045";
const baseUrl = "https://gorest.co.in/public/v2/users";

export const getAllUser = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://gorest.co.in/public/v2/users`);
      dispatch({
        type: GET_ALL_USER,
        payload: response.data,
      });
      return response.data;
    } catch (error) {
      dispatch({
        payload: error,
      });
    }
  };
};
export const DeleteUSer = (id) => async (dispatch) => {
  try {
    await axios.delete(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
export const addUser = (newUser) => async (dispatch) => {
  try {
    const newUserUpdate = await axios.post(`${baseUrl}`, newUser, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: ADD_USER,
      payload: newUserUpdate.data,
    });
  } catch (error) {
    console.log({ error });
  }
};
// export const updateUser = (id, newUser) => async (dispatch) => {
//   dispatch({
//     type: PUT_USER_REQUEST,
//   });
//   try {
//     await axios.put(`${baseUrl}/users/${id}`, newUser);

//     dispatch({
//       type: UPDATE_USER,
//       payload: newUser,
//     });
//   } catch (error) {
//     dispatch({
//       type: PUT_USER_FAIL,
//       payload: error,
//     });
//   }
// };
