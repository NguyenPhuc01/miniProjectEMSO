import axios from "axios";
import { GET_ALL_USER } from "../Types/User";

const baseUrl = "https://gorest.co.in/public/v2/users";

export const getAllUser = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}`);
    dispatch({
      type: GET_ALL_USER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      payload: error,
    });
  }
};
// export const removeUser = (id) => async (dispatch) => {
//   dispatch({
//     type: DELETE_USER_REQUEST,
//   });
//   try {
//     await axios.delete(`${baseUrl}/users/${id}`);
//     // console.log();
//     dispatch({
//       type: REMOVE_USER,
//       payload: id,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_USER_FAIL,
//       payload: error,
//     });
//   }
// };
// export const addUser = (newUser) => async (dispatch) => {
//   dispatch({
//     type: POST_USER_REQUEST,
//   });
//   try {
//     await axios.post(`${baseUrl}/users`, newUser);
//     dispatch({
//       type: ADD_USER,
//       payload: newUser,
//     });
//   } catch (error) {
//     dispatch({
//       type: POST_USER_FAIL,
//       payload: error,
//     });
//     console.log({ error });
//   }
// };
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
