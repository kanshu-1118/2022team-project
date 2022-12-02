export type categoryType =
  | 'kitchen'
  | 'living'
  | 'bathroom'
  | 'washing'
  | 'other';

export type categoryListType = {
  categoryJa: string;
  categoryEn: categoryType;
  color: {
    light: string;
    dark: string;
  };
  icon: any;
};
