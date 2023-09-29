import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { connect } from "react-redux";
import { addUser, updateUser } from "../../stores/userActions";

interface UserModalProps {
  addUser: any;
  updateUser: any;
  user: any;
  onSubmit: any;
  openFilter:any;
  handleClose: () => any; 
}

const UserModal = (props:UserModalProps) => {
  const { addUser, updateUser, user, handleClose,openFilter } = props;
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [mobileNoError, setMobileNoError] = useState("");
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setMobileNo(user.mobileNo);
    } else {
      setName("");
      setMobileNo("");
    }
  }, [user]);

  const handleNameChange = (e:any) => {
    setName(e.target.value);
  };

  const handleMobileNoChange = (e:any) => {
    const newMobileNo = e.target.value;
    setMobileNo(newMobileNo);
  };

  const handleSubmit = () => {
    if (name.trim() === "") {
      setNameError("Name is required.");
      setMobileNoError("");
    } else if (!/^\d{10}$/.test(mobileNo)) {
      setMobileNoError("Invalid mobile number. It should be 10 digits.");
      setNameError("");
    } else {
      setNameError("");
      setMobileNoError("");

      if (user) {
        updateUser(user.id, name, mobileNo);
      } else {
        addUser(name, mobileNo);
      }
     
   handleClose();
    }
  };


  return (
    <Dialog open={openFilter} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{user ? "Edit User" : "Add User"}</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="dense"
          value={name}
          error={Boolean(nameError)}
          helperText={nameError}
          onChange={handleNameChange}
        />
        <TextField
          label="Mobile number"
          variant="outlined"
          fullWidth
          margin="dense"
          value={mobileNo}
          onChange={handleMobileNoChange}
          error={Boolean(mobileNoError)}
          helperText={mobileNoError}
        />
      </DialogContent>
      <DialogActions style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={handleSubmit}>
          {user ? "Update" : "Submit"}
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state: any) => ({
  
});

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  addUser: (name: any, mobileNo: any) => dispatch(addUser(name, mobileNo)),
  updateUser: (id: any, name: any, mobileNo: any) => dispatch(updateUser(id, name, mobileNo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);
