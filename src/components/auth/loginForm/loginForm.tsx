import { useController, useForm } from "react-hook-form";

import { Checkbox } from "../../ui/checkbox";
import { TextField } from "../../ui/textField";
import { Button } from "../../ui/button";

type FormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const {
    field: { value, onChange },
  } = useController({
    name: "rememberMe",
    control,
    defaultValue: false,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register("email")} label={"email"} />
      <TextField {...register("password")} label={"password"} />
      <Checkbox onChange={onChange} checked={value} label={"remember me"} />      

      <Button type="submit">Submit</Button>
    </form>
  );
};
