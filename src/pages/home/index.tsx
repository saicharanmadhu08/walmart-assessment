import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "components/Table";
import Toolbar from "components/Toolbar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import { getNutritionData } from "state/nutritionData/actions";
import { StateI } from "state/initialState";
import { headCells } from "./constants";

const useStyles = makeStyles(() =>
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
  const { nutritionData } = useSelector((state: StateI) => state);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

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
          numberSelected={selectedRows.length}
          handleAddNewClick={handleAddNewClick}
          handleDeleteClick={handleDeleteClick}
        />
        <Table
          selected={selectedRows}
          setSelected={setSelectedRows}
          headCells={headCells}
          rows={nutritionData.map((item) => ({
            name: item.desert,
            ...item.nutritionInfo,
          }))}
        />
      </Grid>
    </Grid>
  );
}

export default Home;
