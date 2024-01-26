import { Map, StyleLoaded } from '../../src';
import { Language } from './components/Language';
import { Theme as ThemeCom, getStyleUrl } from './components/Theme';
import { Flyto as FlytoCom } from './components/Flyto';

import type { Meta, StoryObj } from '@storybook/react';

const themes = [
  { label: 'dark', value: 'dark-v11' },
  { label: 'satellite', value: 'satellite-streets-v12' },
];

const meta = {
  title: '示例/Flyto',
  render: () => {
    return (
      <Map containerStyle={{ height: '100vh' }} zoom={1} style={getStyleUrl(themes[0].value)}>
        <StyleLoaded>
          <FlytoCom />;
        </StyleLoaded>

        <ThemeCom options={themes} />
        <Language />
      </Map>
    );
  },
  parameters: {},
  argTypes: {},
  args: {
    containerStyle: {
      height: 500,
    },
  },
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Flyto: Story = {
  args: {},
};
