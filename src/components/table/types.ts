export type Order = "asc" | "desc";

export interface HeadCellI {
  disablePadding: boolean;
  id: keyof DataI;
  label: string;
  numeric: boolean;
}

export interface EnhancedTableI {
  classes: any;
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof DataI
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export interface DataI {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}
