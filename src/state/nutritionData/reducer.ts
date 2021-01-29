import initialState, { NutritionDataI } from "../initialState";
import {
  SET_NUTRITION_DATA,
  ADD_NEW_NUTRITION_RECORD,
  DELETE_NUTRITIONS,
} from "./actionTypes";

export default function homeReducer(
  state: Array<NutritionDataI> = initialState.nutritionData,
  action: any
) {
  switch (action.type) {
    case SET_NUTRITION_DATA:
      return action.payload;
    case ADD_NEW_NUTRITION_RECORD:
      return [...state, action.payload];
    case DELETE_NUTRITIONS:
      return [...state].filter((item) => !action.payload.includes(item.desert));
    default:
      return state;
  }
}
