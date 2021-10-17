import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Hello } from "./Hello";

export default {
  title: "Example/Hello",
  component: Hello,
} as ComponentMeta<typeof Hello>;

const Template: ComponentStory<typeof Hello> = () => {
  return <Hello />;
};

export const Sample = Template.bind({});
Sample.args = {}