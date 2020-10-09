import {
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    POST_USER_FAIL,
    POST_USER_SUCCESS} from '../action/types'


    const initialState = {
        loading: true,
        user: [],
        error:null,
      };

      export default function (state = initialState, action) {
        const { type, payload } = action;
      
        switch (type) {
          case GET_USER_SUCCESS:
            return {
              ...state,
              loading: false,
              user: payload,
            };
         case GET_USER_FAIL:
             return{
                ...state,
                loading:true,
                user:payload
             };
         case POST_USER_SUCCESS:
             return{
                 ...state
             }
         case POST_USER_FAIL:
             return{
                 ...state
             }
        default:
            return state;
        }
      }
      