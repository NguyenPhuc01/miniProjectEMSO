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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../Store/Actions/UserAction";
import { LoadingButton } from "@mui/lab";
import UpdateIcon from "@mui/icons-material/Update";
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
  inputs,
  setInputs,
}) {
  const dispatch = useDispatch();
  const isLoadingUpdate = useSelector((state) => state.User?.loadingUpdate);

  const handleOnchange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(inputs.id, inputs));
    setInputs({ name: "", gender: "", email: "", status: "" });
  };

  useEffect(() => {
    if (!isLoadingUpdate) setOpenModalUpdate(false);
  }, [isLoadingUpdate, setOpenModalUpdate]);
  return (
    <Modal open={openModalUpdate} onClose={handleCloseModalUpdate}>
      <Box sx={style}>
        <Typography
          sx={{ paddingBottom: 3 }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
          align="center"
        >
          Update User
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
              >
                <MenuItem value="active">active</MenuItem>
                <MenuItem value="inactive">inactive</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12}>
              <LoadingButton
                loading={isLoadingUpdate}
                startIcon={<UpdateIcon />}
                loadingPosition="start"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ marginTop: 4 }}
              >
                Update
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}
