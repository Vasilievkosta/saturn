import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import s from "./layout.module.scss";

import { Header } from "../header";

type Props = ComponentPropsWithoutRef<"div"> & {
  contentMarginTop?: CSSProperties["marginTop"];
};

export const Layout = forwardRef<ElementRef<"div">, Props>(({ className, children, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      <Header isLoggedIn={false} />
      <main className={s.main}>{children}</main>
    </div>
  );
});
