import React from 'react';
import { DesignSystemTheme } from '../packages';

import Paragraph from '../packages/paragraph/paragraph';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Paragraph',
  component: Paragraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <DesignSystemTheme>
    <Paragraph {...args}>This is some sample text.</Paragraph>
  </DesignSystemTheme>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Paragraph',
  variant: 'primary',
};
