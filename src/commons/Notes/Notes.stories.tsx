// Notes.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { Notes } from './Notes';

const meta: Meta<typeof Notes> = {
  title: 'commons/Notes',
  component: Notes,
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