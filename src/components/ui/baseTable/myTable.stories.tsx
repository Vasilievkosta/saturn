import type { Meta, StoryObj } from "@storybook/react";

import { BaseTable } from "@/components/ui/baseTable/baseTable";
import { ComponentPropsWithoutRef, FC, useMemo, useState } from "react";

const meta = {
  argTypes: {},
  component: BaseTable,
  tags: ["autodocs"],
  title: "Draft/MyTable",
} satisfies Meta<typeof BaseTable>;

export default meta;
type Story = StoryObj<typeof BaseTable>;

export const Default: Story = {};

const data = [
  {
    title: "Project A",
    cardsCount: 10,
    updated: "2023-07-07",
    createdBy: "John Doe",
  },
  {
    title: "Project B",
    cardsCount: 5,
    updated: "2023-07-06",
    createdBy: "Jane Smith",
  },
  {
    title: "Project C",
    cardsCount: 8,
    updated: "2023-07-05",
    createdBy: "Alice Johnson",
  },
  {
    title: "Project D",
    cardsCount: 3,
    updated: "2023-07-07",
    createdBy: "Bob Anderson",
  },
  {
    title: "Project E",
    cardsCount: 12,
    updated: "2023-07-04",
    createdBy: "Emma Davis",
  },
];

export const WithSort: Story = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null);

    // const handleSort = (key: string) => {
    //   if (sort && sort.key === key) {
    //     setSort({
    //       key,
    //       direction: sort.direction === "asc" ? "desc" : "asc",
    //     });
    //   } else {
    //     setSort({
    //       key,
    //       direction: "asc",
    //     });
    //   }
    // };

    console.log(sort);

    const sortedString = useMemo(() => {
      if (!sort) return null;

      return `${sort.key}-${sort.direction}`;
    }, [sort]);

    console.log(sortedString);

    const columns: Array<Column> = [
      {
        key: "name",
        title: "Name",
        sortable: true,
      },
      {
        key: "cardsCount",
        title: "Cards",
        sortable: true,
      },
      {
        key: "updated",
        title: "Last Updated",
        sortable: true,
      },
      {
        key: "createdBy",
        title: "Created by",
        sortable: true,
      },
    ];

    return (
      <table>
        {/* <thead>
          <tr>
            {columns.map(({ title, key }) => (
              <th key={key} onClick={() => handleSort(key)}>
                {title}
                {sort && sort.key === key && <span>{sort.direction === "asc" ? "▲" : "▼"}</span>}
              </th>
            ))}
          </tr>
        </thead> */}
        <Header columns={columns} sort={sort} onSort={setSort} />
        <tbody>
          {data.map((item) => (
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.cardsCount}</td>
              <td>{item.updated}</td>
              <td>{item.createdBy}</td>
              <td>icons...</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};

type Column = {
  key: string;
  title: string;
  sortable?: boolean;
};

type Sort = {
  key: string;
  direction: "asc" | "desc";
} | null;

const Header: FC<
  Omit<
    ComponentPropsWithoutRef<"thead"> & {
      columns: Column[];
      sort?: Sort;
      onSort?: (sort: Sort) => void;
    },
    "children"
  >
> = ({ columns, sort, onSort, ...restProps }) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) return;

    if (sort?.key !== key) return onSort({ key, direction: "asc" });

    if (sort.direction === "desc") return onSort(null);

    return onSort({
      key,
      direction: sort?.direction === "asc" ? "desc" : "asc",
    });
  };

  return (
    <thead {...restProps}>
      <tr>
        {columns.map(({ title, key, sortable }) => (
          <th key={key} onClick={handleSort(key, sortable)}>
            {title}
            {sort && sort.key === key && <span>{sort.direction === "asc" ? "▲" : "▼"}</span>}
          </th>
        ))}
      </tr>
    </thead>
  );
};
