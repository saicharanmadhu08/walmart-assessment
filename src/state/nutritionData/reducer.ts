import initialState, { NutritionDataI } from "../initialState";
import { SET_NUTRITION_DATA } from "./actionTypes";

export default function homeReducer(
  state: Array<NutritionDataI> = initialState.nutritionData,
  action: any
) {
  switch (action.type) {
    case SET_NUTRITION_DATA:
      return action.payload;
    default:
      return state;
  }
}
