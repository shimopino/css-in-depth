import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Listing_1_02 } from './Markup';

export default {
  title: 'Chapter01/Listing_1_02',
  component: Listing_1_02,
} as ComponentMeta<typeof Listing_1_02>;

export const Sample: ComponentStory<typeof Listing_1_02> = () => {
  return <Listing_1_02 />;
};
