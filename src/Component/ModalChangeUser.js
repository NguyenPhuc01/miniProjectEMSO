import {
  Box,
  Button,
  Grid,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
export default function ModalChangeUser({
  openModalUpdate,
  setOpenModalUpdate,
  handleCloseModalUpdate,
  dataUpdateUser,
}) {
  console.log(
    "🚀 ~ file: ModalChangeUser.js:31 ~ dataUpdateUser:",
    dataUpdateUser
  );
  const [inputs, setInputs] = useState({
    name: "",
    gender: "",
    email: "",
    status: "",
  });

  //   const dispatch = useDispatch();

  const handleOnchange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setInputs({ name: "", gender: "", email: "", status: "" });
  };
  return (
    <Modal open={openModalUpdate} onClose={handleCloseModalUpdate}>
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ marginTop: 4 }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}
