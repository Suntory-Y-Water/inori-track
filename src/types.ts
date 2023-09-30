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
