import axios from "axios";
import {
  ADD_USER,
  DELETE_USER,
  GET_ALL_USER_FAIL,
  GET_ALL_USER_REQUESS,
  GET_ALL_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
} from "../Types/TypesUser";
const token =
  "c3d6ab434a43fd0b0dc736f5004307af7176c1810279232498f53104738b2045";
const baseUrl = "https://gorest.co.in/public/v2/users";

export const getAllUser = (page) => {
  return async (dispatch) => {
    dispatch({
      type: GET_ALL_USER_REQUESS,
    });
    try {
      const response = await axios.get(`${baseUrl}?page=${page}&per_page=5`);
      dispatch({
        type: GET_ALL_USER_SUCCESS,
        payload: response.data,
      });
      return response.data;
    } catch (error) {
      dispatch({
        type: GET_ALL_USER_FAIL,
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
    const userAdd = await axios.post(`${baseUrl}`, newUser, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: ADD_USER,
      payload: userAdd.data,
    });
  } catch (error) {
    console.log({ error });
  }
};
export const updateUser = (id, newUser) => async (dispatch) => {
  try {
    const userUpdate = await axios.put(`${baseUrl}/${id}`, newUser);

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: userUpdate.data,
    });
  } catch (error) {
    console.log("🚀 ~ file: UserAction.js:73 ~ updateUser ~ error:", error);
  }
};
