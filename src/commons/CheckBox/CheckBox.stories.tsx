// UBCheckBox.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UBCheckBox } from './CheckBox';

const meta: Meta<typeof UBCheckBox> = {
  title: 'commons/UBCheckBox',
  component: UBCheckBox,
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