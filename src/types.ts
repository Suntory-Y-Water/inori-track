export type ButtonProps = {
  text: string;
  color: keyof ColorClass;
  href: string;
};

export type ColorClass = {
  primary: string;
  secondary: string;
  tertiary: string;
};

export type HeaderProps = {
  text: string;
};

export type StepNavigatorProps = {
  steps: string[];
  currentStep: number;
};

export const stepLabel = ['ライブ選択', '会場選択', '結果'];
