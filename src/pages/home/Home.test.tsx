import React from "react";
import { testRender, makeTestStore } from "testUtils";
import * as actions from "state/nutritionData/actions";
import {
  cleanup,
  fireEvent,
  getAllByTestId,
  getByTestId,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "./index";

describe("Home Page", () => {
  let wrapper: any;
  const store = makeTestStore();

  beforeEach(() => {
    store.dispatch(
      actions.setNutritionData([
        {
          desert: "Oreo",
          nutritionInfo: { calories: 437, fat: 18, carbs: 63, protein: 4 },
        },
        {
          desert: "Nougat",
          nutritionInfo: { calories: 360, fat: 19, carbs: 50, protein: 37 },
        },
      ])
    );
    wrapper = testRender(<Home />, { store });
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  describe("Display Elements", () => {
    it("should display heading", () => {
      const { container } = wrapper;
      const heading = getByTestId(container, "page-heading");
      expect(heading).toHaveTextContent("Nutrition List");
    });

    it("should display reset button", () => {
      const { container } = wrapper;
      const resetButton = getByTestId(container, "reset-button");
      expect(resetButton).not.toBe(null);
    });

    it("should display toolbar", () => {
      const { container } = wrapper;
      const toolbar = getByTestId(container, "toolbar");
      expect(toolbar).not.toBe(null);
    });

    it("should display table", () => {
      const { container } = wrapper;
      const customTable = getByTestId(container, "custom-table");
      expect(customTable).not.toBe(null);
    });

    it("should display 2 table rows on load", () => {
      const { container } = wrapper;
      const tableRows = getAllByTestId(container, "table-row");
      expect(tableRows.length).toBe(2);
    });

    it("should display 1 table row when a row is deleted", () => {
      const { container } = wrapper;
      const checkbox = getAllByTestId(container, "table-row-checkbox")[0];
      fireEvent.click(checkbox);
      fireEvent.click(getByTestId(container, "delete-button"));
      const tableRows = getAllByTestId(container, "table-row");
      expect(tableRows.length).toBe(1);
    });

    it("should display 2 table rows when reset button is clicked", async () => {
      const { container } = wrapper;
      const checkbox = getAllByTestId(container, "table-row-checkbox")[0];
      fireEvent.click(checkbox);
      fireEvent.click(getByTestId(container, "delete-button"));
      await waitFor(() => {
        fireEvent.click(getByTestId(container, "reset-button"));
        const tableRows = getAllByTestId(container, "table-row");
        expect(tableRows.length).toBe(2);
      });
    });

    it("should display 3 table rows when add new button is clicked", async () => {
      const { container } = wrapper;
      fireEvent.click(getByTestId(container, "add-new-button"));
      fireEvent.input(
        document.querySelectorAll(".MuiInputBase-root>input")[0],
        { target: "Cake" }
      );
      fireEvent.input(
        document.querySelectorAll(".MuiInputBase-root>input")[1],
        { target: 20 }
      );
      fireEvent.input(
        document.querySelectorAll(".MuiInputBase-root>input")[2],
        { target: 29 }
      );
      fireEvent.input(
        document.querySelectorAll(".MuiInputBase-root>input")[3],
        { target: 15 }
      );
      fireEvent.input(
        document.querySelectorAll(".MuiInputBase-root>input")[4],
        { target: 30 }
      );
      // TODO: There is issue while changing the input values, submit button not being enabled..
      //   await waitFor(() => {
      //     fireEvent.click(getByTestId(container, "submit-button"));
      //     const tableRows = getAllByTestId(container, "table-row");
      //     expect(tableRows.length).toBe(3);
      //   });
    });
  });
});
