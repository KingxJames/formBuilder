// TextFieldComponent.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { TextFieldComponent } from './TextFieldComponent';

const meta: Meta<typeof TextFieldComponent> = {
  title: 'commons/TextFieldComponent',
  component: TextFieldComponent,
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