import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import "./App.css";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUser } from "./Store/Actions/UserAction";
import TableDataUser from "./Component/TableDataUser";
import FormUser from "./Component/FormUser";

const useStyles = makeStyles({
  dataTable: {
    height: "100vh",
  },
  btnFunc: {
    display: "flex",
    justifyContent: "end",
    width: "100%",
  },
  tableDataUser: {
    paddingTop: 40,
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className={classes.dataTable}>
      <Grid container>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={10}>
          <Box>
            <Typography variant="h4">Data User</Typography>
          </Box>
          <Box className={classes.btnFunc}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={handleOpen}>
                Add User
              </Button>
              <Button variant="outlined">Export</Button>
            </Stack>
            <FormUser open={open} handleClose={handleClose} setOpen={setOpen} />
          </Box>

          <Box className={classes.tableDataUser}>
            <TableDataUser />
          </Box>
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
      </Grid>
    </Box>
  );
}

export default App;
