import cls from "./Text.module.scss";
import { classNames } from "../../lib/classNames";
import { ReactNode } from "react";

type TextTheme = "primary" | "secondary" | "error";
type TextAlign = "right" | "left" | "center";
type TextSize = "size_s" | "size_m" | "size_l" | "size_xl";

interface TextProps {
  className?: string;
  children?: ReactNode;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

const Text = (props: TextProps) => {
  const {
    className,
    children,
    theme = "primary",
    align = "left",
    size = "size_l",
  } = props;

  const mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  };

  return <p className={classNames(cls.text, mods, [className])}>{children}</p>;
};

export default Text;
