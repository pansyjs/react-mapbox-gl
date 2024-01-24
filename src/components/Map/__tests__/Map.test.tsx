import { Map } from '../map';

import mountTest from '../../../../tests/shared/mountTest';

jest.mock('mapbox-gl', () => ({
  Map: jest.fn(),
}));

describe('Map', () => {
  mountTest(Map);
});
