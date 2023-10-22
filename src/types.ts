export type ButtonProps = {
  text: string;
  color: keyof ColorClass;
  href: string;
  disabled?: boolean;
};

export type ColorClass = {
  primary: string;
  secondary: string;
  tertiary: string;
  disabled: string;
};

export type HeaderProps = {
  text: string;
  titleFlag: boolean;
};

export type StepNavigatorProps = {
  steps: string[];
  currentStep: number;
};

export const stepLabel = ['ライブ選択', '会場選択', '結果'];

export type LiveDataProps = {
  id: number;
  name: string;
  year?: number;
  live_type_id: number;
};

export type CheckboxProps = {
  id: number;
  label: string;
  onCheckboxChange: (id: number, checked: boolean) => void;
};

export type VenueDataProps = {
  id: number;
  name: string;
  live_name_id: number;
  liveName: string;
};
