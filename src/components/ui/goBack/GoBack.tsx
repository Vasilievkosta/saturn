import { ComponentPropsWithoutRef, ElementRef, MouseEvent, forwardRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BackIcon } from "@/assets/icons/backIcon";

import { clsx } from "clsx";

import s from "./GoBack.module.scss";
import { Typography } from "../typography";

type Props = {
  className?: string;
  text: string;
  to?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "to">;

export const GoBack = forwardRef<ElementRef<typeof Link>, Props>(({ className, text, to }, ref) => {
  const navigate = useNavigate();

  const backHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    to ? navigate(to) : navigate(-1);
  };

  return (
    <Link className={clsx(s.root, className)} onClick={backHandler} ref={ref} to={to ? to : ".."}>
      <BackIcon />
      <Typography className={s.text} variant={"body2"}>
        {text}
      </Typography>
    </Link>
  );
});
