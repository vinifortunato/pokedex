import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tabs from './Tabs';

describe('Tabs Component', () => {
  it('should render correctly', () => {
    render(<Tabs />, { wrapper: global.wrapper });
    expect(screen.getByTestId('tabs')).toBeInTheDocument();
  });

  it('should render switch tabs correctly', () => {
    render(<Tabs />, { wrapper: global.wrapper });
    expect(screen.getByTestId('tab-about')).toHaveStyleRule('opacity', '1', {
      modifier: '&.in',
    });
    expect(screen.getByTestId('tab-stats')).toHaveStyleRule('opacity', '0', {
      modifier: '&.out',
    });
    expect(screen.getByTestId('tab-evolution')).toHaveStyleRule('opacity', '0', {
      modifier: '&.out',
    });

    userEvent.click(screen.getByTestId('nav-tab-stats'));
    expect(screen.getByTestId('tab-stats')).toHaveStyleRule('opacity', '1', {
      modifier: '&.in',
    });
    expect(screen.getByTestId('tab-about')).toHaveStyleRule('opacity', '0', {
      modifier: '&.out',
    });
    expect(screen.getByTestId('tab-evolution')).toHaveStyleRule('opacity', '0', {
      modifier: '&.out',
    });

    userEvent.click(screen.getByTestId('nav-tab-evolution'));
    expect(screen.getByTestId('tab-evolution')).toHaveStyleRule('opacity', '1', {
      modifier: '&.in',
    });
    expect(screen.getByTestId('tab-about')).toHaveStyleRule('opacity', '0', {
      modifier: '&.out',
    });
    expect(screen.getByTestId('tab-stats')).toHaveStyleRule('opacity', '0', {
      modifier: '&.out',
    });
  });
});
