import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { updateData } from "../services/data";

function EditData({
  openEditForm,
  handleCloseEditForm,
}) {

  const formSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <Dialog
      open={openEditForm}
      onClose={handleCloseEditForm}
      maxWidth="sm"
      fullWidth
    >
      <div style={{ backgroundColor: "#1F2739" }}>
        <DialogTitle id="alert-dialog-title" style={{ color: "white" }}>
          {"EDIT"}
        </DialogTitle>

        <form
          style={{ display: "flex !important", margin: "10px" }}
          onSubmit={formSubmitHandler}
        >
          <TextField
            type="input"
            label="Invoice Currency"
            variant="filled"
            style={{ width: "46%", margin: 10, Color: "white !important" }}
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
  
          />

          <TextField
            label="Customer Payment Terms"
            variant="filled"
            style={{ width: "46%", margin: 10 }}
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
           
          />

          <span style={{ display: "flex !important", margin: 2 }}>
            <Button
              type={"submit"}
              onClick={handleCloseEditForm}
              style={{ width: "46%", margin: 10 }}
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
            >
              EDIT
            </Button>
            <Button
              onClick={handleCloseEditForm}
              autoFocus
              style={{ width: "46%", margin: 10 }}
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
            >
              CANCEL
            </Button>
          </span>
        </form>
      </div>
    </Dialog>
  );
}

export default EditData;
