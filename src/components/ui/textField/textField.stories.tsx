import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from ".";

const meta = {
  argTypes: {
    // variant: {
    //   control: { type: 'radio' },
    //   options: ['primary', 'secondary'],
    // },
  },
  component: TextField,
  tags: ["autodocs"],
  title: "Components/TextField",
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Input",
  },
};

export const WithError: Story = {
  args: {
    error: "Some error",
  },
};

export const Disabled: Story = {
  args: {
    label: "Input",
  },
};

export const TypeSearch: Story = {
  args: {
    label: "Search",
  },
};

export const TypePassword: Story = {
  args: {
    label: "Password",
  },
};
