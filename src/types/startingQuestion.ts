export type startingQuestionComponentType = {
  heading: string;
  component: JSX.Element;
};

export type startingQuestionType = {
  question: startingQuestionComponentType;
  confirm: startingQuestionComponentType;
};
