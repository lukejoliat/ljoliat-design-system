/** @jsxImportSource theme-ui */

import React from 'react';
import { DesignSystemTheme } from '../packages';
import { Message } from '../packages';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Message',
  component: Message,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <>
    <DesignSystemTheme>
      <Message>This is some sample text!!!</Message>
    </DesignSystemTheme>
  </>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Message',
  // variant: 'primary',
};
