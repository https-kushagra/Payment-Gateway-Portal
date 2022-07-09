import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { getData } from "../services/data";
import { makeStyles } from "@mui/styles";
import "./ButtonPos.css";
import AddData from "./AddData";
import DeleteData from "./DeleteData";
import Pagination from "./Pagination";
import EditData from "./EditData";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Checkbox } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import { Button} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const useStyles = makeStyles(() => ({
  table: {
    background: "#2b2d42",
  },
  textcolor: {
    color: "white !important",
  },
  textcolortbody: {
    color: "white !important",
    padding: "4px 12px !important",
  },
  input: {
    backgroundColor: "white !important",
    borderRadius: "4px",
    height: "10px !important",
    margin: "auto !important",
    paddingBottom: "20px !important",
  },
}));

export default function MyGrid() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [openAddForm, setOpenAddForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openDeleteForm, setOpenDeleteForm] = useState(false);
  const [refreshData, setRefreshData] = useState(false);

  const [selectData, setSelectData] = useState({
    invoice_currency: "",
    cust_payment_terms: "",
    sl_no: "",
  });

  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickOpenForm = () => {
    setOpenAddForm(true);
  };

  const handleCloseForm = () => {
    setOpenAddForm(false);
  };

  const handleClickOpenEdit = () => {
    setOpenEditForm(true);
  };
  const handleCloseEditForm = () => {
    setOpenEditForm(false);
  };

  const handleClickOpenDelete = () => {
    setOpenDeleteForm(true);
  };
  const handleCloseDeleteForm = () => {
    setOpenDeleteForm(false);
  };

  useEffect(() => {
    const asyncfn = async () => {
      let data = await getData(page, rowsPerPage);
      setData(data["data"]);
      let s = data["count"];
      setCount(s);
    };
    asyncfn();
  }, [page, rowsPerPage, refreshData]);

 

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item.cust_number)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  const dataReloadHandler = () => {
    setRefreshData(!refreshData);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <div className="buttonPos">
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>PREDICT</Button>
        <Button variant="outlined" className="buttonColor">
          ANALYTICS VIEW
        </Button>
        <Button
          variant="outlined"
          className="buttonColor"
        >
          ADVANCE SEARCH
        </Button>
        <Button variant="outlined" onClick={dataReloadHandler}>
          <RefreshIcon />
        </Button>
      </ButtonGroup>
      <TextField
        id="filled-basic"
        label="Search Customer Id"
        type="text"
        variant="filled"
        onChange={(e) => searchItems(e.target.value)}
        inputProps={{ className: classes.input }}
      />
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          variant="outlined"
          className="buttonColor"
          onClick={handleClickOpenForm}
        >
          ADD
        </Button>
        <Button
          variant="outlined"
          className="buttonColor"
          onClick={handleClickOpenEdit}
        >
          EDIT
        </Button>
        <Button
          variant="outlined"
          className="buttonColor"
          onClick={handleClickOpenDelete}
          sx={{
            "&.Mui-disabled": {
              borderColor: "primary.main",
            },
          }}
        >
          DELETE
        </Button>
      </ButtonGroup>
    </div>

      <AddData handleCloseForm={handleCloseForm} openAddForm={openAddForm} />

      <EditData
        handleCloseEditForm={handleCloseEditForm}
        openEditForm={openEditForm}
      />

      <DeleteData
        handleCloseDeleteForm={handleCloseDeleteForm}
        openDeleteForm={openDeleteForm}
      />

      <TableContainer sx={{ maxHeight: 531 }} className={classes.table}>
        <Table sx={{ maxWidth: 600 }} aria-label="simple table">
          <TableHead className={classes.table}>
            <TableRow>
              <TableCell>
                <Checkbox className={classes.textcolor} />
              </TableCell>
              <TableCell className={classes.textcolor}>Sl no</TableCell>
              <TableCell className={classes.textcolor}>Business Code</TableCell>
              <TableCell className={classes.textcolor}>
                Customer Number
              </TableCell>
              <TableCell
                className={classes.textcolor}
                style={{ whiteSpace: "nowrap" }}
              >
                Clear Date&nbsp;&nbsp;&nbsp;
              </TableCell>
              <TableCell
                className={classes.textcolor}
                style={{ whiteSpace: "nowrap" }}
              >
                Buisness Year
              </TableCell>
              <TableCell className={classes.textcolor}>Document Id</TableCell>
              <TableCell
                className={classes.textcolor}
                style={{ whiteSpace: "nowrap" }}
              >
                Posting Date
              </TableCell>
              <TableCell
                className={classes.textcolor}
                style={{ whiteSpace: "nowrap" }}
              >
                Document Create Date
              </TableCell>
              <TableCell
                className={classes.textcolor}
                style={{ whiteSpace: "nowrap" }}
              >
                Due In Date
              </TableCell>
              <TableCell className={classes.textcolor}>
                Invoice Currency
              </TableCell>
              <TableCell className={classes.textcolor}>Document Type</TableCell>
              <TableCell className={classes.textcolor}>Posting Id</TableCell>
              <TableCell className={classes.textcolor}>
                Total Open Amount
              </TableCell>
              <TableCell
                className={classes.textcolor}
                style={{ whiteSpace: "nowrap" }}
              >
                Baseline Create Date
              </TableCell>
              <TableCell className={classes.textcolor}>
                Customer Payment Terms
              </TableCell>
              <TableCell className={classes.textcolor}>Invoice Id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchInput.length > 1
              ? filteredResults.map((tableData) => (
                  <TableRow
                    key={tableData.sl_no}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      <Checkbox
                        className={classes.textcolortbody}
                        name="checkbox"
                      />
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.sl_no}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.business_code}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.cust_number}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.clear_date}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.buisness_year}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.doc_id}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.posting_date}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.document_create_date}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.due_in_date}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.invoice_currency}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.document_type}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.posting_id}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.total_open_amount}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.baseline_create_date}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.cust_payment_terms}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.invoice_id}
                    </TableCell>
                  </TableRow>
                ))
              : data.map((tableData) => (
                  <TableRow
                    key={tableData.sl_no}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      <Checkbox
                        className={classes.textcolortbody}
                        name="checkbox"
                      />
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.sl_no}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.business_code}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.cust_number}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.clear_date}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.buisness_year}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.doc_id}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.posting_date}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.document_create_date}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.due_in_date}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.invoice_currency}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.document_type}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.posting_id}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.total_open_amount}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.baseline_create_date}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.cust_payment_terms}
                    </TableCell>
                    <TableCell
                      className={classes.textcolortbody}
                      component="th"
                      scope="tableData"
                    >
                      {tableData.invoice_id}
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={count}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
