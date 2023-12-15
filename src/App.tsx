import { Button } from "./components/ui/button";
import s from "./components/ui/button/button.module.scss";

export function App() {
  return (
    <div>
      Hello!
      <Button variant="secondary" className={s.myFirst}>
        My button
      </Button>
    </div>
  );
}
