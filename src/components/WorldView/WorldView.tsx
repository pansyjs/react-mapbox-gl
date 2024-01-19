import React, { useEffect } from 'react';
import { useMap } from '../../hooks/useMap';

import type { Code, WorldViewProps } from './types';

export const WorldView: React.FC<WorldViewProps> = (props) => {
  const { code = 'CN' } = props;
  const { map } = useMap();

  useEffect(() => {
    if (code) {
      filterLayers(code);
    }
  }, [code]);

  const filterLayers = (worldview: Code) => {
    map.setFilter('admin-0-boundary-disputed', [
      'all',
      ['==', ['get', 'disputed'], 'true'],
      ['==', ['get', 'admin_level'], 0],
      ['==', ['get', 'maritime'], 'false'],
      ['match', ['get', 'worldview'], ['all', worldview], true, false],
    ]);

    map.setFilter('admin-0-boundary', [
      'all',
      ['==', ['get', 'admin_level'], 0],
      ['==', ['get', 'disputed'], 'false'],
      ['==', ['get', 'maritime'], 'false'],
      ['match', ['get', 'worldview'], ['all', worldview], true, false],
    ]);

    map.setFilter('admin-0-boundary-bg', [
      'all',
      ['==', ['get', 'admin_level'], 0],
      ['==', ['get', 'maritime'], 'false'],
      ['match', ['get', 'worldview'], ['all', worldview], true, false],
    ]);
  };

  return null;
};
