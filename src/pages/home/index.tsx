import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Table from "components/table";
import Toolbar from "components/Toolbar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import { getNutritionData } from "state/nutritionData/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    resetButton: {
      backgroundColor: "teal",
      color: "#ffffff",
    },
  })
);

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNutritionData());
  });

  function handleAddNewClick() {}

  function handleDeleteClick() {}
  return (
    <Grid container justify="center">
      <Grid container item xs={9} justify="space-between" alignItems="center">
        <Grid>
          <Typography variant="h4" gutterBottom>
            Nutrition List
          </Typography>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            className={classes.resetButton}
            endIcon={<ReplayIcon />}
          >
            Reset Data
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Toolbar
          numberSelected={0}
          handleAddNewClick={handleAddNewClick}
          handleDeleteClick={handleDeleteClick}
        />
        <Table />
      </Grid>
    </Grid>
  );
}

export default Home;
