import { ComponentProps, FC } from "react";

import { clsx } from "clsx";

import s from "./baseTable.module.scss";

import { Typography } from "../typography";

export type RootProps = ComponentProps<"table">;

export const Root: FC<RootProps> = ({ className, ...rest }) => {
  const classNames = {
    table: clsx(className, s.table),
  };

  return <table className={classNames.table} {...rest} />;
};

export type HeadProps = ComponentProps<"thead">;

export const Head: FC<HeadProps> = (props) => {
  return <thead {...props} />;
};

export type BodyProps = ComponentProps<"tbody">;

export const Body: FC<BodyProps> = (props) => {
  return <tbody {...props} />;
};

export type RowProps = ComponentProps<"tr">;

export const Row: FC<RowProps> = (props) => {
  return <tr {...props} />;
};

export type HeadCellProps = ComponentProps<"th">;

export const HeadCell: FC<HeadCellProps> = ({ className, ...rest }) => {
  const classNames = {
    headCell: clsx(className, s.headCell),
  };

  return <th className={classNames.headCell} {...rest} />;
};

export type CellProps = ComponentProps<"td">;

export const Cell: FC<CellProps> = ({ className, ...rest }) => {
  const classNames = {
    cell: clsx(className, s.tableCell),
  };

  return <td className={classNames.cell} {...rest} />;
};

export const Empty: FC<ComponentProps<"div"> & { mb?: string; mt?: string }> = ({ className, mb, mt = "89px" }) => {
  const classNames = {
    empty: clsx(className, s.empty),
  };

  return (
    <Typography as={"h2"} className={classNames.empty} style={{ marginBottom: mb, marginTop: mt }}>
      Пока тут еще нет данных! :(
    </Typography>
  );
};

export const Table = {
  Body,
  Cell,
  Empty,
  Head,
  HeadCell,
  Root,
  Row,
};
