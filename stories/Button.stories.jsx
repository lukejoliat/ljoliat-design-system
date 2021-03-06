import React from 'react';
import { DesignSystemTheme } from '../packages';

import Button from '../packages/button/button';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <DesignSystemTheme><Button {...args}>Test</Button></DesignSystemTheme>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  variant: 'secondary'
};

export const Tertiary = Template.bind({});
Secondary.args = {
  label: 'Button',
  variant: 'tertiary'
};