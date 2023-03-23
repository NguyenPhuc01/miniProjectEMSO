import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Stack,
  Pagination,
  PaginationItem,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { DeleteUSer } from "../Store/Actions/UserAction";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ModalChangeUser from "./ModalChangeUser";
export default function TableDataUser({ handleChange }) {
  const [open, setOpen] = React.useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [dataUpdateUser, setDataUpdateUser] = useState("");

  const dispatch = useDispatch();
  const [getId, setGetId] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseModalUpdate = () => {
    setOpenModalUpdate(false);
  };

  const allUser = useSelector((state) => state.User.allUser);
  const isLoadingGetUser = useSelector((state) => state.User.loading);

  const handleConfirmDelete = () => {
    dispatch(DeleteUSer(getId));
    setOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: "60vh" }}>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Btn Function</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoadingGetUser ? (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ height: 300 }}>
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : (
              allUser &&
              allUser?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.gender}</TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: row.status === "active" ? "#1ED961" : "red" }}
                  >
                    {row.status}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => {
                        // handleUpdateUser(row.id);
                        setOpenModalUpdate(true);
                        setDataUpdateUser(row);
                      }}
                    >
                      <UpdateIcon />
                    </Button>
                    <Button
                      onClick={() => {
                        setOpen(true);
                        setGetId(row.id);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <ModalChangeUser
          openModalUpdate={openModalUpdate}
          setOpenModalUpdate={setOpenModalUpdate}
          handleCloseModalUpdate={handleCloseModalUpdate}
          dataUpdateUser={dataUpdateUser}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="alert-dialog-title">
            Bạn có chắc chắn muốn xoá không?
          </DialogTitle>

          <DialogActions>
            <Button onClick={handleClose}>Không</Button>
            <Button onClick={handleConfirmDelete} autoFocus>
              Có
            </Button>
          </DialogActions>
        </Dialog>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          paddingTop: 4,
        }}
      >
        <Stack spacing={2}>
          <Pagination
            count={5}
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </Box>
    </>
  );
}
