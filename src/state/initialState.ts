export interface StateI {
  nutritionData: Array<NutritionDataI>;
}

export interface NutritionDataI {
  name: string;
  nutritionInfo: NutritionInfoDataI;
}

export interface NutritionInfoDataI {
  calories: number;
  fat: number;
  carb: number;
  protien: number;
}

const initialState: StateI = {
  nutritionData: [],
};

export default initialState;
