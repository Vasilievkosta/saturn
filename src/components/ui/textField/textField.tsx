import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import s from "./textField.module.scss";

type InputProps = {
  disabled?: boolean;
  error?: null | string;
  label?: string;
  placeholder?: string;
  variant?: "password" | "search" | "simple";
} & ComponentPropsWithoutRef<"input">;

export const TextField = forwardRef<ElementRef<"input">, InputProps>((props, ref) => {
  const { disabled, error, label, variant, ...rest } = props;

  return (
    <div className={s.textField}>
      {label}
      <input type="text" {...rest} ref={ref} />
      {error && <span>{error}</span>}
    </div>
  );
});
