import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { addData } from "../services/data";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 200,
  },
}));
function AddData({ openAddForm, handleCloseForm }) {
  const classes = useStyles();

  const [clearDate, setClearDate] = useState("2017-05-24");
  const [postingDate, setPostingDate] = useState("2017-05-24");
  const [documentCreateDate, setDocumentCreateDate] = useState("2017-05-24");
  const [dueDate, setDueDate] = useState("2017-05-24");
  const [baselineCreateDate, setBaselineCreateDate] = useState("2017-05-24");

  const [businessCode, setBusinessCode] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [businessYear, setBusinessYear] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [invoiceCurrency, setInvoiceCurrency] = useState("");
  const [customerPaymentTerms, setCustomerPaymentTerms] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [postingId, setPostingId] = useState("");
  const [totalOpenAmount, setTotalOpenAmount] = useState("");

  const [slNo, setSlNo] = useState(48580);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    let response = await addData(
      slNo,
      businessCode,
      customerNumber,
      clearDate,
      businessYear,
      documentId,
      postingDate,
      documentCreateDate,
      dueDate,
      invoiceCurrency,
      documentType,
      postingId,
      totalOpenAmount,
      baselineCreateDate,
      customerPaymentTerms,
      invoiceId
    );

    if (response) {
      setBusinessCode("");
      setCustomerNumber("");
      setClearDate("");
      setBusinessYear("");
      setDocumentId("");
      setPostingDate("");
      setDocumentCreateDate("");
      setDueDate("");
      setInvoiceCurrency("");
      setDocumentType("");
      setPostingId("");
      setTotalOpenAmount("");
      setBaselineCreateDate("");
      setCustomerPaymentTerms("");
      setInvoiceId("");
      setSlNo((prevValue) => prevValue + 1);
    }
  };

  return (
    <Dialog
      open={openAddForm}
      onClose={handleCloseForm}
      maxWidth="lg"
      fullWidth
    >
      <div style={{ backgroundColor: "#1F2739" }}>
        <DialogTitle id="alert-dialog-title" sx={{ color: "white" }}>
          {"ADD"}
        </DialogTitle>

        <form
          style={{ display: "flex !important", margin: "10px" }}
          onSubmit={formSubmitHandler}
        >
          <TextField
            id="filled-basic"
            label="Business Code"
            value={businessCode}
            variant="filled"
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
            style={{ width: "23%", margin: 10 }}
            onChange={(event) => {
              setBusinessCode(event.target.value);
            }}
          />

          <TextField
            id="filled-basic"
            label="Customer Number"
            variant="filled"
            value={customerNumber}
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
            style={{ width: "23%", margin: 10 }}
            onChange={(event) => {
              setCustomerNumber(event.target.value);
            }}
          />

          <TextField
            id="date"
            label="Clear Date"
            value={clearDate}
            className={classes.textField}
            onChange={(event) => {
              setClearDate(event.target.value);
            }}
            type="date"
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              width: "23%",
              marginTop: "10px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          />

          <TextField
            id="filled-basic"
            label="Business Year"
            variant="filled"
            value={businessYear}
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
            style={{ width: "23%", margin: 10 }}
            onChange={(event) => {
              setBusinessYear(event.target.value);
            }}
          />
          <TextField
            id="filled-basic"
            label="Document Id"
            variant="filled"
            value={documentId}
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
            style={{ width: "23%", margin: 10 }}
            onChange={(event) => {
              setDocumentId(event.target.value);
            }}
          />

          <TextField
            id="date"
            label="Posting Date"
            type="date"
            value={postingDate}
            className={classes.textField}
            onChange={(event) => {
              setPostingDate(event.target.value);
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              width: "23%",
              marginTop: "10px",
            }}
            style={{ width: "23%", margin: 10 }}
          />

          <TextField
            label="Document Create Date"
            type="date"
            className={classes.textField}
            value={documentCreateDate}
            style={{ width: "23%", marginLeft: "20" }}
            onChange={(event) => {
              setDocumentCreateDate(event.target.value);
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              width: "23%",
              marginTop: "10px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          />

          <TextField
            label="Due Date"
            type="date"
            value={dueDate}
            className={classes.textField}
            style={{ width: "23%", margin: 10 }}
            onChange={(event) => {
              setDueDate(event.target.value);
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              width: "23%",
              marginTop: "10px",
            }}
          />

          <TextField
            id="filled-basic"
            label="Invoice Currency"
            variant="filled"
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
            style={{ width: "23%", margin: 10 }}
            value={invoiceCurrency}
            onChange={(event) => {
              setInvoiceCurrency(event.target.value);
            }}
          />

          <TextField
            id="filled-basic"
            label="Document Type"
            value={documentType}
            variant="filled"
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
            style={{ width: "23%", margin: 10 }}
            onChange={(event) => {
              setDocumentType(event.target.value);
            }}
          />

          <TextField
            id="filled-basic"
            label="Posting Id"
            value={postingId}
            variant="filled"
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
            style={{ width: "23%", margin: 10 }}
            onChange={(event) => {
              setPostingId(event.target.value);
            }}
          />

          <TextField
            id="filled-basic"
            label="Total Open Amount"
            value={totalOpenAmount}
            variant="filled"
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
            style={{ width: "23%", margin: 10 }}
            onChange={(event) => {
              setTotalOpenAmount(event.target.value);
            }}
          />

          <TextField
            id="date"
            label="Baseline Create Date"
            value={baselineCreateDate}
            type="date"
            className={classes.textField}
            style={{ width: "23%", margin: 10 }}
            onChange={(event) => {
              setBaselineCreateDate(event.target.value);
              var date = new Date(baselineCreateDate);
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              width: "23%",
              marginTop: "10px",
            }}
          />

          <TextField
            id="filled-basic"
            label="Customer Payment Terms"
            variant="filled"
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
            style={{ width: "23%", margin: 10 }}
            value={customerPaymentTerms}
            onChange={(event) => {
              setCustomerPaymentTerms(event.target.value);
            }}
          />
          <TextField
            id="filled-basic"
            label="Invoice Id"
            variant="filled"
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
            style={{ width: "23%", margin: 10 }}
            value={invoiceId}
            onChange={(event) => {
              setInvoiceId(event.target.value);
            }}
          />

          <span style={{ display: "flex !important", margin: 2 }}>
            <Button
              type={"submit"}
              onClick={handleCloseForm}
              sx={{ color: "white", borderColor: "white" }}
              style={{ width: "49%", margin: 6 }}
              variant="outlined"
            >
              ADD
            </Button>
            <Button
              onClick={handleCloseForm}
              autoFocus
              sx={{ color: "white", borderColor: "white" }}
              style={{ width: "49.1%" }}
              variant="outlined"
            >
              CANCEL
            </Button>
          </span>
        </form>
      </div>
    </Dialog>
  );
}

export default AddData;
