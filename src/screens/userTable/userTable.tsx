import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import UserModal from "../userModal/userModal";
import { connect } from "react-redux";
import { deleteUser } from "../../stores/userActions";

const UserTable = (props: { userData: any; deleteUser: any; }) => {
  const { userData, deleteUser } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUpdate = (user: React.SetStateAction<null>) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleClose=()=>{
    setIsModalOpen(!isModalOpen);
      setSelectedUser(null);
  }

  const handleDelete = (id: React.Key | null | undefined) => {
    deleteUser(id);
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleModalSubmit = (name: any, mobileNo: any) => {
    if (selectedUser) {
      setIsModalOpen(false);
      setSelectedUser(null);
    } 
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                User Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Mobile number
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {userData.map((user:any) => (
              <TableRow key={user.id}>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.mobileNo}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleUpdate(user)}>Update</Button>
                  <Button onClick={() => handleDelete(user.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isModalOpen && (
  <UserModal
    openFilter={isModalOpen}
    handleClose={handleClose}
    user={selectedUser}
    onSubmit={(name: any, mobileNo: any) => handleModalSubmit(name, mobileNo)}
  />
)}

    </>
  );
};

const mapStateToProps = (state: { user: { users: any; }; }) => ({
  userData: state.user.users,
});

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  deleteUser: (id: any) => dispatch(deleteUser(id)),
  // You can add more actions here if needed
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
