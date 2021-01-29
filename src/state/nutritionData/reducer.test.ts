import reducer from "./reducer";
import { MockStore } from "redux-mock-store";
import { createMockStore } from "../../mocks";
import * as types from "./actionTypes";
import initialState from "../initialState";
import * as actions from "./actions";

describe("nutrition data reducer", () => {
  let store: MockStore;

  beforeEach(() => {
    store = createMockStore();
  });
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState.nutritionData);
  });

  it("should handle SET_NUTRITION_DATA", () => {
    expect(
      reducer(initialState.nutritionData, {
        type: types.SET_NUTRITION_DATA,
        payload: [
          {
            __typename: "Datum",
            desert: "Oreo",
            nutritionInfo: { calories: 437, fat: 18, carbs: 63, protein: 4 },
          },
          {
            __typename: "Datum",
            desert: "Nougat",
            nutritionInfo: { calories: 360, fat: 19, carbs: 50, protein: 37 },
          },
        ],
      })
    ).toEqual([
      {
        __typename: "Datum",
        desert: "Oreo",
        nutritionInfo: { calories: 437, fat: 18, carbs: 63, protein: 4 },
      },
      {
        __typename: "Datum",
        desert: "Nougat",
        nutritionInfo: { calories: 360, fat: 19, carbs: 50, protein: 37 },
      },
    ]);
  });

  it("should handle ADD_NEW_NUTRITION_RECORD", () => {
    expect(
      reducer(initialState.nutritionData, {
        type: types.ADD_NEW_NUTRITION_RECORD,
        payload: {
          desert: "Cake",
          nutritionInfo: {
            calories: 0,
            carbs: 0,
            fat: 0,
            protein: 0,
          },
        },
      })
    ).toEqual([
      {
        desert: "Cake",
        nutritionInfo: {
          calories: 0,
          carbs: 0,
          fat: 0,
          protein: 0,
        },
      },
    ]);
  });

  it("should handle DELETE_NUTRITIONS", () => {
    expect(
      reducer(
        [
          {
            desert: "Cake",
            nutritionInfo: {
              calories: 0,
              carbs: 0,
              fat: 0,
              protein: 0,
            },
          },
        ],
        {
          type: types.DELETE_NUTRITIONS,
          payload: ["Cake"],
        }
      )
    ).toEqual([]);
  });
});
