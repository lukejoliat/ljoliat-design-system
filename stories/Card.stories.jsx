import React from 'react';
import { DesignSystemTheme } from '../packages';
import Card from '../packages/card/card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <DesignSystemTheme><Card {...args}><h1>This is a card</h1><p>This is the card content.</p></Card></DesignSystemTheme>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Card',
  variant: 'primary',
  width: 256,
  p: 4
};