import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "components/Table";
import Toolbar from "components/Toolbar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import {
  addNewNutritionRecord,
  deleteNutritions,
  getNutritionData,
} from "state/nutritionData/actions";
import { StateI } from "state/initialState";
import AddNewItem from "./AddNewItem";
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
  const [showAddNewDialogBox, setShowAddNewDialogBox] = React.useState(false);
  const [shouldReset, setShouldReset] = useState(false);

  useEffect(() => {
    if (!nutritionData.length && !shouldReset) {
      dispatch(getNutritionData());
      setShouldReset(true);
    }
  }, [shouldReset, nutritionData, dispatch]);

  function handleAddNewClick() {
    setShowAddNewDialogBox(true);
  }

  function handleDeleteClick() {
    dispatch(deleteNutritions(selectedRows));
    setSelectedRows([]);
  }

  function handleDialogBoxClose() {
    setShowAddNewDialogBox(false);
  }

  function handleDialogBoxSubmit(values: any) {
    console.log("kgfgskgjfs", values);
    dispatch(
      addNewNutritionRecord({
        desert: values.name,
        nutritionInfo: {
          calories: values.calories,
          carbs: values.carbs,
          fat: values.fat,
          protein: values.protein,
        },
      })
    );
    handleDialogBoxClose();
  }

  function handleResetData() {
    dispatch(getNutritionData());
  }

  return (
    <Fragment>
      {showAddNewDialogBox && (
        <AddNewItem
          handleClose={handleDialogBoxClose}
          handleSubmit={handleDialogBoxSubmit}
        />
      )}
      <Grid container justify="center">
        <Grid container item xs={9} justify="space-between" alignItems="center">
          <Grid>
            <Typography variant="h4" gutterBottom data-testid="page-heading">
              Nutrition List
            </Typography>
          </Grid>
          <Grid>
            <Button
              data-testid="reset-button"
              variant="contained"
              className={classes.resetButton}
              endIcon={<ReplayIcon />}
              onClick={handleResetData}
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
    </Fragment>
  );
}

export default Home;
