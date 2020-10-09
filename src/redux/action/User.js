import {
    POST_USER_FAIL,
    POST_USER_SUCCESS,
    GET_USER_FAIL,
    GET_USER_SUCCESS
  } from "./types";


import { API } from "../../config/api";

export const postUser = (
    name,
    tingkat,
    cabang,
    lulus,
    nohp,
  ) => async (dispatch) => {
    
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      name,
      tingkat,
      cabang,
      lulus,
      nohp,
    });

    try {
        const res = await API.post("/user", body, config);
        dispatch({
          type: POST_USER_SUCCESS,
          payload: res.user,
        });
      } catch (err) {
        dispatch({
          type: POST_USER_FAIL,
          payload: 'error'
        });
      }
};

export const getUser = () => async (dispatch)=>{
  try {
    const res = await API.get("/user");
    dispatch({
      type: GET_USER_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: GET_USER_FAIL,
      payload: 'error',
    });
  }
}