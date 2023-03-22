import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import "./App.css";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "./Store/Actions/User";
import { TableVirtuoso } from "react-virtuoso";

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
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  const allUser = useSelector((state) => state.User.allUser);
  console.log("🚀 ~ file: App.js:23 ~ App ~ allUser:", allUser);

  const sample = [
    ["Frozen yoghurt", 159, 6.0, 24, 4.0],
    ["Ice cream sandwich", 237, 9.0, 37, 4.3],
    ["Eclair", 262, 16.0, 24, 6.0],
    ["Cupcake", 305, 3.7, 67, 4.3],
    ["Gingerbread", 356, 16.0, 49, 3.9],
  ];

  function createData(id, name, email, gender, status) {
    return { id, name, email, gender, status };
  }
  const columns = [
    {
      width: 200,
      label: "name",
      dataKey: "name",
    },
    {
      width: 120,
      label: "Calories\u00A0(g)",
      dataKey: "calories",
      numeric: true,
    },
    {
      width: 120,
      label: "Fat\u00A0(g)",
      dataKey: "fat",
      numeric: true,
    },
    {
      width: 120,
      label: "Carbs\u00A0(g)",
      dataKey: "carbs",
      numeric: true,
    },
    {
      width: 120,
      label: "Protein\u00A0(g)",
      dataKey: "protein",
      numeric: true,
    },
  ];
  const rows = Array.from({ length: 200 }, (_, index) => {
    if (allUser.length > 0) {
      const randomSelection =
        allUser && allUser[Math.floor(Math.random() * allUser?.length)];
      return createData(index, ...randomSelection);
    }
  });

  const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
      <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
      <Table
        {...props}
        sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
      />
    ),
    // TableHead,
    TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
    TableBody: React.forwardRef((props, ref) => (
      <TableBody {...props} ref={ref} />
    )),
  };
  function fixedHeaderContent() {
    return (
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            variant="head"
            align={column.numeric || false ? "right" : "left"}
            style={{ width: column.width }}
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    );
  }
  function rowContent(_index, row) {
    return (
      <>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric || false ? "right" : "left"}
          >
            {row[column.dataKey]}
          </TableCell>
        ))}
      </>
    );
  }
  return (
    <Box className={classes.dataTable}>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Box>
            <Typography variant="h4">Data User</Typography>
          </Box>
          <Box className={classes.btnFunc}>
            <Stack spacing={2} direction="row">
              <Button variant="contained">Add User</Button>
              <Button variant="outlined">Export</Button>
            </Stack>
          </Box>

          <Box className={classes.tableDataUser}>
            <Paper style={{ height: 400, width: "100%" }}>
              <TableVirtuoso
                data={rows}
                components={VirtuosoTableComponents}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={rowContent}
              />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Box>
  );
}

export default App;
