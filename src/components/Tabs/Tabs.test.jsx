import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TabAbout, TabEvolution, TabStats } from '@src/components/Tabs/content';
import Tabs from './Tabs';

const tabs = [
  {
    id: 'tab-about',
    label: 'About',
    component: TabAbout,
    content: {},
  },
  {
    id: 'tab-stats',
    label: 'Stats',
    component: TabStats,
    content: {
      name: 'Test',
      stats: [
        {
          base_stat: 10,
          stat: {
            name: 'hp',
          },
        },
      ],
    },
  },
  {
    id: 'tab-evolution',
    label: 'Evolution',
    component: TabEvolution,
    content: {},
  },
];

describe('Tabs Component', () => {
  it('should render correctly', () => {
    render(<Tabs />, { wrapper: global.wrapper });
    expect(screen.getByTestId('tabs')).toBeInTheDocument();
  });

  it('should render switch tabs correctly', () => {
    render(<Tabs defaultValue="tab-stats" tabs={tabs} />, { wrapper: global.wrapper });
    expect(screen.getByTestId('tab-stats')).toHaveStyleRule('opacity', '1', {
      modifier: '&.in',
    });
    expect(screen.getByTestId('tab-about')).toHaveStyleRule('opacity', '0', {
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

    userEvent.click(screen.getByTestId('nav-tab-about'));
    expect(screen.getByTestId('tab-about')).toHaveStyleRule('opacity', '1', {
      modifier: '&.in',
    });
    expect(screen.getByTestId('tab-stats')).toHaveStyleRule('opacity', '0', {
      modifier: '&.out',
    });
    expect(screen.getByTestId('tab-evolution')).toHaveStyleRule('opacity', '0', {
      modifier: '&.out',
    });
  });
});
