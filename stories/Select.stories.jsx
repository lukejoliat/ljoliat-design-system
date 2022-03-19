import React from 'react';
import { DesignSystemTheme } from '../packages';

import Select from '../packages/select/select';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <DesignSystemTheme>
    <div style={{ width: '200px' }}>
      <Select {...args}>
        <option value={1}>First option</option>
        <option value={2}>Second option</option>
        <option value={3}>Third option</option>
        <option value={4}>Fourth option</option>
      </Select>
    </div>
  </DesignSystemTheme>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Select',
  variant: 'primary',
  placeholder: 'email address',
  type: 'text',
};
