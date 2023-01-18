import { categoryType } from './category';

export type otetsudaiDefaultType = {
  name: string;
  desc: string;
  hint: string[];
};

export type otetsudaiType = {
  kanji: otetsudaiDefaultType;
  kana: otetsudaiDefaultType;
  category: number;
  level: 1 | 2 | 3;
};

export type otetsudaiLevelType =
  | {
      min: number;
      max: number;
      over: undefined;
    }
  | {
      min: undefined;
      max: undefined;
      over: number;
    };
