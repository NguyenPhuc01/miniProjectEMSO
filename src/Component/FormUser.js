import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Modal,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Store/Actions/UserAction";
const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  maxWidth: "400px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};
export default function FormUser({ open, handleClose, setOpen }) {
  const [inputs, setInputs] = useState({
    name: "",
    gender: "",
    email: "",
    status: "",
  });
  const dispatch = useDispatch();
  const isLoadingAddUser = useSelector((state) => state.User?.loadingAddUser);
  const errAddUser = useSelector((state) => state.User?.errAddUSer);
  console.log("🚀 ~ file: FormUser.js:39 ~ FormUser ~ errAddUser:", errAddUser);
  const handleOnchange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(inputs));

    setInputs({ name: "", gender: "", email: "", status: "" });
  };
  useEffect(() => {
    if (!!isLoadingAddUser) {
      setOpen(false);
    }
  }, [isLoadingAddUser, setOpen]);

  useEffect(() => {
    if (errAddUser !== undefined && errAddUser !== "") {
      alert("loi");
    }
  }, [errAddUser]);
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
            gutterBottom
          >
            Add User
          </Typography>
          <form onSubmit={(data) => handleSubmit(data)}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  placeholder="Enter Name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  required
                  value={inputs.name}
                  onChange={handleOnchange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  value={inputs.email}
                  name="email"
                  onChange={handleOnchange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  value={inputs.gender}
                  name="gender"
                  label="gender"
                  fullWidth
                  onChange={handleOnchange}
                  required
                >
                  <MenuItem value="female">female</MenuItem>
                  <MenuItem value="male">male</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={inputs.status}
                  name="status"
                  label="active"
                  fullWidth
                  onChange={handleOnchange}
                  required
                >
                  <MenuItem value="active">active</MenuItem>
                  <MenuItem value="inactive">inactive</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12}>
                <LoadingButton
                  loading={isLoadingAddUser}
                  startIcon={<GroupAddIcon />}
                  loadingPosition="start"
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 4 }}
                >
                  Add
                </LoadingButton>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
