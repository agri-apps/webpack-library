/* eslint-disable no-undef */
import { version } from './../src/index';

describe('Testing library', () => {
  it('Should match version', () => {
    expect(version).toBe('0.0.1');
  });
});
