import capitalize from './capitalize';

describe('capitalize Util', () => {
  it('should uppercase the first letter correctly', () => {
    const value = capitalize('bulbasaur');
    expect(value).toBe('Bulbasaur');
  });
});
