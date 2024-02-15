import * as RadioGroup from "@radix-ui/react-radio-group";
import s from "./radio.module.scss";

export type RadioOption = {
  disabled?: boolean;
  label: string;
  value: string;
};

const RadioItem = (props: RadioOption) => (
  <div className={s.itemWrap}>
    <RadioGroup.Item className={s.item} value={props.value} id={props.value}>
      <RadioGroup.Indicator className={s.indicator} />
    </RadioGroup.Item>
    <label className={s.label} htmlFor={props.value}>
      {props.label}
    </label>
  </div>
);

type Group = {
  options: RadioOption[];
  disabled: boolean;
};

export const RadioGroupDemo = (props: Group) => (
  <form>
    <RadioGroup.Root className={s.root} aria-label="View density">
      {props.options.map((item, index) => (
        <RadioItem key={index} label={item.label} value={item.value} />
      ))}
    </RadioGroup.Root>
  </form>
);
