import { useContext } from 'react';
import { MapContext } from '@/context';

export const useMap = () => {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error('The useMap must be used in the Map container');
  }

  return context;
};
