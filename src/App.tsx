import { Button } from "./components/ui/button";
import s from "./components/ui/button/button.module.scss";

export function App() {
  return (
    <div>
      Hello!
      <Button variant="primary" className={s.myFirst}>
        Button primary
      </Button>
      <Button variant="primary" className={s.myFirst} disabled>
        Button primary
      </Button>
      <Button variant="secondary" fullWidth>
        Width 100
      </Button>
      <Button variant="secondary" className={s.myFirst}>
        Button Secondary
      </Button>
      <Button variant="link">Link</Button>
      <Button variant="tertiary">tertiary</Button>
    </div>
  );
}
