// UBUpload.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UBUpload } from './UBUpload';

const meta: Meta<typeof UBUpload> = {
  title: 'commons/UBUpload',
  component: UBUpload,
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