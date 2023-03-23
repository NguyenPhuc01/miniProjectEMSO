import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { DeleteUSer } from "../Store/Actions/UserAction";
export default function TableDataUser() {
  const dispatch = useDispatch();

  const allUser = useSelector((state) => state.User.allUser);

  const handleDeleteUSer = (id) => {
    dispatch(DeleteUSer(id));
  };
  const handleUpdateUser = (id) => {
    console.log(id);
  };

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "60vh" }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {/* <TableCell align="center">Id</TableCell> */}
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Btn Function</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUser &&
            allUser?.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                {/* <TableCell align="center">{row.id}</TableCell> */}
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
                  <Button onClick={() => handleUpdateUser(row.id)}>
                    <UpdateIcon />
                  </Button>
                  <Button onClick={() => handleDeleteUSer(row.id)}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
