import { useForm } from "react-hook-form";

import s from "./myForm.module.scss";
import { Button } from "../../ui/button";

import { Typography } from "@/components/ui/typography";
import { RadioOption } from "@/components/ui/radio";
import { ControlledRadioGroup } from "@/components/ui/radio/controlledRadio";

type FormValues = {
  radio: string;
};

const dataTasks: RadioOption[] = [
  { label: "Did not know", value: "1" },
  { label: "Forgot", value: "2" },
  { label: "A lot of thought", value: "3" },
  { label: "Confused", value: "4" },
  { label: "Knew the answer", value: "5" },
];

export const MyForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { radio: "1" },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className={s.lern}>
      <Typography as={"h1"} variant={"h1"} className={s.title}>
        Learn “Deck Name”
      </Typography>
      <Typography variant={"body1"}>Question: How "This" works in JavaScript?</Typography>
      <Typography variant={"body2"} className={s.count}>
        Количество попыток ответов на вопрос: 10
      </Typography>
      <Typography variant={"body1"}>Answer: This is how "This" works in JavaScript</Typography>
      <Typography variant={"subtitle1"} className={s.rate}>
        Rate yourself:
      </Typography>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledRadioGroup options={dataTasks} control={control} className={s.radio} name={"radio"} />

        <Button fullWidth>Next Question</Button>
      </form>
    </div>
  );
};
