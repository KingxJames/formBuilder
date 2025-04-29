// UBSignature.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { UBSignature } from './Signature';

const meta: Meta<typeof UBSignature> = {
  title: 'commons/UBSignature',
  component: UBSignature,
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