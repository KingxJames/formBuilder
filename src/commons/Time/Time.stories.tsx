// Time.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { Time } from './Time';

const meta: Meta<typeof Time> = {
  title: 'commons/Time',
  component: Time,
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