import zeroPad from './zeroPad';

describe('zeroPad Util', () => {
  it('should format value correctly', () => {
    const value = zeroPad(10, 3);
    expect(value).toBe('010');
  });
});
