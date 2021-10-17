import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Listing_1_01 } from './Markup';

export default {
  title: 'Chapter01/Listing_1_01',
  component: Listing_1_01,
} as ComponentMeta<typeof Listing_1_01>;

export const Sample: ComponentStory<typeof Listing_1_01> = () => {
  return <Listing_1_01 />;
};
