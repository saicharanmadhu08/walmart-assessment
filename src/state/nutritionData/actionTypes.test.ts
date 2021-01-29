import * as actionTypes from "./actionTypes";

describe("nutrition Data action types", () => {
  it("should inclue SET_NUTRITION_DATA", () => {
    expect(actionTypes.SET_NUTRITION_DATA).toBeDefined();
  });

  it("should inclue ADD_NEW_NUTRITION_RECORD", () => {
    expect(actionTypes.ADD_NEW_NUTRITION_RECORD).toBeDefined();
  });

  it("should inclue DELETE_NUTRITIONS", () => {
    expect(actionTypes.DELETE_NUTRITIONS).toBeDefined();
  });
});
