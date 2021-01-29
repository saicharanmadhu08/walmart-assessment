import { gql } from "@apollo/client";
import { client } from "state/helpers";
import { NutritionDataI } from "state/initialState";
import {
  SET_NUTRITION_DATA,
  ADD_NEW_NUTRITION_RECORD,
  DELETE_NUTRITIONS,
} from "./actionTypes";

function setNutritionData(payload: Array<NutritionDataI>) {
  return {
    type: SET_NUTRITION_DATA,
    payload,
  };
}

export function getNutritionData() {
  return (dispatch: any) => {
    client
      .query({
        query: gql`
          query {
            allData {
              desert
              nutritionInfo
            }
          }
        `,
      })
      .then((result) => {
        dispatch(setNutritionData(result.data.allData));
      });
  };
}

export function addNewNutritionRecord(payload: NutritionDataI) {
  return (dispatch: any) => {
    dispatch({
      type: ADD_NEW_NUTRITION_RECORD,
      payload,
    });
  };
}

export function deleteNutritions(payload: Array<string>) {
  return (dispatch: any) => {
    dispatch({
      type: DELETE_NUTRITIONS,
      payload,
    });
  };
}
