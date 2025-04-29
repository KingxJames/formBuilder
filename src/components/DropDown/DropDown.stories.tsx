// UBDropDown.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UBDropDown } from './DropDown';

const meta: Meta<typeof UBDropDown> = {
  title: 'commons/UBDropDown',
  component: UBDropDown,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
  

export const Default: Story = {
  args: {
   
  },
};