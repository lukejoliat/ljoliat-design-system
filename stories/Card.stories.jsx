import React from 'react';
import { DesignSystemTheme } from '../packages';
import Card from '../packages/card/card';
import Heading from '../packages/heading/heading';
import Text from '../packages/text/text';

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
const Template = (args) => (
  <DesignSystemTheme>
    <Card {...args}>
      <Heading>This is a card</Heading>
      <Text>This is the card content.</Text>
    </Card>
  </DesignSystemTheme>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Card',
  variant: 'primary',
};
