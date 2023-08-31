import { ChangeEvent } from "react";
import cls from "./Input.module.scss";

interface InputProps {
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  placeholder?: string;
}

const Input = (props: InputProps) => {
  const { value, onChange, placeholder, autoFocus } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={cls.wrapper}>
      <input
        className={cls.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default Input;
