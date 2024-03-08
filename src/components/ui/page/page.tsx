import clsx from "clsx";
import { CSSProperties, ComponentPropsWithoutRef } from "react";
import s from "./page.module.scss";

type Props = ComponentPropsWithoutRef<"div"> & {
  mt?: CSSProperties["marginTop"];
};

export const Page = ({ className, style, mt = "33px", ...rest }: Props) => {
  const classes = clsx(className, s.page);
  const styles: CSSProperties = { marginTop: mt, ...style };
  return <div className={classes} style={styles} {...rest} />;
};
