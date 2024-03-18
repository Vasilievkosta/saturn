import { useController, useForm } from "react-hook-form";

import { Checkbox } from "../../ui/checkbox";
import { TextField } from "../../ui/textField";
import { Button } from "../../ui/button";
import { usePostLoginMutation } from "@/services/base-api";
import { useNavigate } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>();
  const navigate = useNavigate();
  const [postLogin] = usePostLoginMutation();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    postLogin(data)
      .unwrap()
      .then(() => {
        navigate("/");
      });
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
