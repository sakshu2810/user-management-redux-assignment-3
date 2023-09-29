
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

export const addUser = (name: any, mobileNo: any) => ({
  type: ADD_USER,
  payload: { name, mobileNo },
});

export const updateUser = (id: any, name: any, mobileNo: any) => ({
  type: UPDATE_USER,
  payload: { id, name, mobileNo },
});

export const deleteUser = (id: any) => ({
  type: DELETE_USER,
  payload: { id },
});
