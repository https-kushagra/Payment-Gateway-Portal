import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteData } from "../services/data";

function DeleteData({ openDeleteForm, handleCloseDeleteForm }) {
  const formSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <Dialog
      open={openDeleteForm}
      onClose={handleCloseDeleteForm}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form onSubmit={formSubmitHandler} style={{ backgroundColor: "#1F2739" }}>
        <DialogTitle id="alert-dialog-title" style={{ color: "white" }}>
          {"Delete Records?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ color: "white" }}
          >
            Are you sure you want to delete these record[s] ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDeleteForm}
            style={{ width: "46%", margin: 10 }}
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
          >
            CANCEL
          </Button>
          <Button
            onClick={handleCloseDeleteForm}
            type={"submit"}
            autoFocus
            style={{ width: "46%", margin: 10 }}
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
          >
            DELETE
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default DeleteData;
