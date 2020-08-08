export interface BusinessOverview {
  name: string;
  attendance: number;
  packages: Package[];
  displayMore?: boolean;
  currentMonthOverview?: BusinessOverview;
  currentMonthAmount?: number;
}

export interface Package {
  name: string;
  sales: Sale[];
}

export interface Sale {
  month: string;
  amount: number;
}
