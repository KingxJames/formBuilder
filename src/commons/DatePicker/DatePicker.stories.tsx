// UBDatePicker.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UBDatePicker } from './DatePicker';

const meta: Meta<typeof UBDatePicker> = {
  title: 'commons/UBDatePicker',
  component: UBDatePicker,
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