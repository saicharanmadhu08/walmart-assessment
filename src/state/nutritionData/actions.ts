import { gql } from "@apollo/client";
import { client } from "state/helpers";
import { NutritionDataI } from "state/initialState";
import { SET_NUTRITION_DATA } from "./actionTypes";

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
          query nutritionData {
            desert
            nutritionInfo {
              calories
              fat
              carb
              protein
            }
          },
        `,
      })
      .then((result) => console.log(result));
  };
}
