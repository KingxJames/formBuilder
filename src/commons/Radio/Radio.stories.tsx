// Time.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UBRadio } from './Radio';

const meta: Meta<typeof UBRadio> = {
  title: 'commons/UBRadio',
  component: UBRadio,
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