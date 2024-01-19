import React, { useState } from 'react';
import { Radio } from 'antd';
import { useMap } from '../../../src';

const themes = [
  { label: 'light', value: 'light-v11' },
  { label: 'dark', value: 'dark-v11' },
  { label: 'satellite', value: 'satellite-streets-v12' },
];

export const getStyleUrl = (value: string) => {
  return `mapbox://styles/mapbox/${value}`;
};

interface ThemeProps {
  options?: {
    label: string;
    value: string;
  }[];
}

export const Theme: React.FC<ThemeProps> = (props) => {
  const { options = themes } = props;
  const { map } = useMap();
  const [theme, setTheme] = useState(options[0].value);

  return (
    <div style={{ position: 'absolute', background: '#efefef', right: 0, padding: 12 }}>
      <Radio.Group
        value={theme}
        options={options}
        onChange={(e) => {
          const value = e.target.value;
          if (map) {
            setTheme(value);
            map.setStyle(getStyleUrl(value));
          }
        }}
      />
    </div>
  );
};
