import Icon from "@/assets/icons/logoutHover";

import s from "./components/ui/button/button.module.scss";

import { Button } from "./components/ui/button";
import { MyForm } from "./components/auth/loginForm/myForm";
import { Header } from "./components/ui/header";

export function AppTest() {
  const styleApp: any = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={styleApp}>
      <Header isLoggedIn={false} />
      <div>
        <MyForm />
      </div>

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
          Icon <Icon className={s.onIcon} iconcolor={"red"} />
        </>
      </Button>

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
          Icon <Icon className={s.onIcon} iconcolor={"red"} />
        </>
      </Button>
    </div>
  );
}
