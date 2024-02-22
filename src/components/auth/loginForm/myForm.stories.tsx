import type { Meta, StoryObj } from "@storybook/react";

import { MyForm } from "./myForm";

const meta = {
  title: "Draft/myForm",
  component: MyForm,
  tags: ["autodocs"],
} satisfies Meta<typeof MyForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
