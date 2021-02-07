import hexToRgba from './hexToRgba';

describe('hexToRgba Util', () => {
  it('should format value without alpha correctly', () => {
    const value = hexToRgba('#ffffff');
    expect(value).toBe('rgb(255, 255, 255)');
  });

  it('should format value with alpha correctly', () => {
    const value = hexToRgba('#ffffff', 0.5);
    expect(value).toBe('rgba(255, 255, 255, 0.5)');
  });
});
