import type { Meta, StoryObj } from "@storybook/react";
import svg from "../../../assets/icons/svg.svg";
import Icon from "../../../assets/icons/logout";

import { Button } from ".";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary", "link"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button Primary ",
    disabled: false,
  },
};

export const PrimaryWithButton: Story = {
  args: {
    variant: "primary",
    children: (
      <>
        <Icon />
        Button Primary
        <img src={svg} />
      </>
    ),
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
    disabled: false,
  },
};
export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary",
    disabled: false,
  },
};
export const Link: Story = {
  args: {
    variant: "link",
    children: "Link-button",
    disabled: false,
  },
};

export const FullWidth: Story = {
  args: {
    variant: "primary",
    children: "Full Width Button",
    disabled: false,
    fullWidth: true,
  },
};

export const AsLink: Story = {
  args: {
    as: "a",
    variant: "primary",
    children: "Link that looks like a button",
    href: "https://www.google.com",
  },
};
