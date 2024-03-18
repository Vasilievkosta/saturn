import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "./spinner";

const meta = {
  component: Spinner,
  tags: ["autodocs"],
  title: "Components/Spinner",
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
