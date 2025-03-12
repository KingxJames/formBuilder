// workflow.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { Workflow } from './workflow';

const meta: Meta<typeof Workflow> = {
  title: 'commons/workflow',
  component: Workflow,
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