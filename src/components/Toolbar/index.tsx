import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid, lighten, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { ToolbarProps } from "./types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addNewButton: {
      backgroundColor: "#FFFFFF",
      color: "teal",
      marginRight: theme.spacing(1),
    },
    title: {
      flex: "1 1 100%",
    },
    highlight: {
      color: theme.palette.secondary.main,
      backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      padding: theme.spacing(2),
    },
  })
);

function Toolbar(props: ToolbarProps) {
  const { numberSelected, handleAddNewClick, handleDeleteClick } = props;
  const classes = useStyles();
  return (
    <Grid
      className={classes.highlight}
      container
      item
      xs={12}
      justify="space-between"
      alignItems="center"
    >
      <Grid>
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numberSelected} selected
        </Typography>
      </Grid>
      <Grid>
        <Button
          className={classes.addNewButton}
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddNewClick}
        >
          Add New
        </Button>
        <Button
          className={classes.addNewButton}
          variant="contained"
          startIcon={<DeleteForeverIcon />}
          onClick={handleDeleteClick}
          disabled={!numberSelected}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}

export default Toolbar;
