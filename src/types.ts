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

export type LiveDataProps = {
  id?: number;
  name: string;
  year?: number;
  live_type_id: number;
};
