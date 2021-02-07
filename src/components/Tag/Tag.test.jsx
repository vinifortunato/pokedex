import { render, screen } from '@testing-library/react';
import Tag from './Tag';

describe('Tag Component', () => {
  it('should render correctly', () => {
    render(<Tag />, { wrapper: global.wrapper });
    expect(screen.getByTestId('tag')).toBeInTheDocument();
  });
});
