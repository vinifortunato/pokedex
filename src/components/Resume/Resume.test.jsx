import { render, screen } from '@testing-library/react';
import Resume from './Resume';

describe('Resume Component', () => {
  it('should render correctly', () => {
    render(<Resume />, { wrapper: global.wrapper });
    expect(screen.getByTestId('resume')).toBeInTheDocument();
  });

  it('should render with parameters correctly', () => {
    const mockData = {
      id: 1,
      name: 'Test',
      image: 'image-url',
      types: [
        {
          slot: 1,
          type: {
            name: 'default',
            url: 'type-url',
          },
        },
      ],
    };

    render(
      <Resume
        id={mockData.id}
        name={mockData.name}
        image={mockData.image}
        types={mockData.types}
      />,
      { wrapper: global.wrapper },
    );
    expect(screen.getByTestId('resume')).toBeInTheDocument();
  });
});
