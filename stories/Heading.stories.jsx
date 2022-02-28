import React from 'react';
import { DesignSystemTheme } from '../packages';

import Heading from '../packages/heading/heading';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Heading',
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <DesignSystemTheme>
    <Heading>Test heading</Heading>
  </DesignSystemTheme>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Heading',
  //   variant: 'primary',
  //   fontFamily: 'inherit',
};
