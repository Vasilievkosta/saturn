import Icon from "@/assets/icons/logoutHover";

import s from "./components/ui/button/button.module.scss";

import { Button } from "./components/ui/button";
import { MyForm } from "./components/auth/loginForm/myForm";

export function App() {
  return (
    <div>
      <Button className={s.myFirst} variant={"primary"}>
        Button primary
      </Button>
      <Button className={s.myFirst} disabled variant={"primary"}>
        Button primary
      </Button>
      <Button fullWidth variant={"secondary"}>
        Width 100
      </Button>
      <Button className={s.myFirst} variant={"secondary"}>
        Button Secondary
      </Button>
      <Button variant={"link"}>Link</Button>
      <Button variant={"tertiary"}>tertiary</Button>
      <Button variant={"tertiary"}>
        <>
          Icon <Icon className={s.onIcon} iconColor={"red"} />
        </>
      </Button>

      <MyForm />
    </div>
  );
}
