import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    // width: "25rem",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  divBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
