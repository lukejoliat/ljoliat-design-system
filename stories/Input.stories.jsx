import React from 'react';
import { DesignSystemTheme } from '../packages';

import Input from '../packages/input/input';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <DesignSystemTheme><Input {...args} /></DesignSystemTheme>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Input',
  variant: 'primary',
  placeholder: 'email address',
  type: "text"
};