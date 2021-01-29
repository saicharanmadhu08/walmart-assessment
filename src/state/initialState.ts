export interface StateI {
  nutritionData: Array<NutritionDataI>;
}

export interface NutritionDataI {
  desert: string;
  nutritionInfo: NutritionInfoDataI;
}

export interface NutritionInfoDataI {
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

const initialState: StateI = {
  nutritionData: [],
};

export default initialState;
