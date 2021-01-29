import { MockStore } from "redux-mock-store";
import { createMockStore } from "../../mocks";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";

describe("nutrition data actions", () => {
  let store: MockStore;

  beforeEach(() => {
    store = createMockStore();
  });

  it("dispatches setNutritionData", () => {
    return store.dispatch<any>(actions.getNutritionData()).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: actionTypes.SET_NUTRITION_DATA,
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
        },
      ]);
    });
  });

  it("dispatches addNewNutritionRecord", () => {
    const mockPayload = {
      desert: "",
      nutritionInfo: {
        calories: 0,
        carbs: 0,
        fat: 0,
        protein: 0,
      },
    };
    store.dispatch(actions.addNewNutritionRecord(mockPayload));
    expect(store.getActions()).toEqual([
      { type: actionTypes.ADD_NEW_NUTRITION_RECORD, payload: mockPayload },
    ]);
  });

  it("dispatches deleteNutritions", () => {
    const mockPayload = ["A", "B"];
    store.dispatch(actions.deleteNutritions(mockPayload));
    expect(store.getActions()).toEqual([
      { type: actionTypes.DELETE_NUTRITIONS, payload: mockPayload },
    ]);
  });

  it("dispatches setNutritionData", () => {
    const mockPayload = [
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
    ];
    store.dispatch(actions.setNutritionData(mockPayload));
    expect(store.getActions()).toEqual([
      { type: actionTypes.SET_NUTRITION_DATA, payload: mockPayload },
    ]);
  });
});
