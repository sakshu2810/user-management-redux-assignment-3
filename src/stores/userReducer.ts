
import { ADD_USER, UPDATE_USER, DELETE_USER } from "./userActions";

const initialState = {
  users: [], 
};

const userReducer = (state = initialState, action: { type: any; payload: { name: any; mobileNo: any; id: any; }; }) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: state.users.length + 1, 
            name: action.payload.name,
            mobileNo: action.payload.mobileNo,
          },
        ],
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user:any) =>
          user.id === action.payload.id
            ? { ...user, name: action.payload.name, mobileNo: action.payload.mobileNo }
            : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user:any) => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default userReducer;
