import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";
import Icon from "../../../assets/icons/logout";
import svg from "@/assets/icons/svg.svg";

const meta = {
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "tertiary", "link"],
    },
  },
  component: Button,
  tags: ["autodocs"],
  title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button Primary ",
    disabled: false,
    variant: "primary",
  },
};

export const PrimaryWithButton: Story = {
  args: {
    children: (
      <>
        <Icon />
        Button Primary
        <img src={svg} />
      </>
    ),
    disabled: false,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    disabled: false,
    variant: "secondary",
  },
};
export const Tertiary: Story = {
  args: {
    children: "Tertiary",
    disabled: false,
    variant: "tertiary",
  },
};
export const Link: Story = {
  args: {
    children: "Link-button",
    disabled: false,
    variant: "link",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    disabled: false,
    fullWidth: true,
    variant: "primary",
  },
};

export const AsLink: Story = {
  args: {
    as: "a",
    children: "Link that looks like a button",
    href: "https://www.google.com",
    variant: "primary",
  },
};
