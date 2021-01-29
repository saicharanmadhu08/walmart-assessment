import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CloseIcon from "@material-ui/icons/Close";
import { useTheme } from "@material-ui/core/styles";
import {
  Box,
  Button,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import { Fields } from "./constants";
import { AddNewItemProps } from "./types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    warningBanner: {
      backgroundColor: theme.palette.warning.main,
      color: "#ffffff",
      padding: theme.spacing(1),
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
    },
    actions: {
      padding: theme.spacing(3),
    },
  })
);

function AddNewItem(props: AddNewItemProps) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { handleClose, handleSubmit } = props;
  const [formValues, setFormValues] = useState<any>({
    name: "",
    calories: "",
    fat: "",
    carbs: "",
    protein: "",
  });

  function handleInputChange(e: any) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  return (
    <div>
      <Dialog fullScreen={fullScreen} open={true} onClose={handleClose}>
        <DialogTitle id="responsive-dialog-title">
          <Grid container justify="flex-end">
            <Grid>
              <IconButton aria-label="delete" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.warningBanner}>
                <ReportProblemOutlinedIcon />
                <Typography variant="subtitle1" gutterBottom display="inline">
                  Please fill all the details before you submit
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid>
            {Fields.map((field) => (
              <Box key={field.name} my={2}>
                <TextField
                  label={field.label}
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  name={field.name}
                  value={formValues[field.name]}
                  onChange={handleInputChange}
                  type={field.type}
                />
              </Box>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleSubmit(formValues)}
            color="primary"
            disabled={
              !Object.values(formValues).reduce((a, b) => !!a && !!b, true)
            }
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddNewItem;
