import { TabAbout, TabEvolution, TabStats } from '@src/components/Tabs/content';
import Tabs from './Tabs';

const availableTypes = [
  'bug',
  'dark',
  'default',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
];

const defaultTabs = [
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
      name: 'bulbassaur',
      stats: [
        {
          base_stat: 45,
          stat: {
            name: 'hp',
          },
        },
        {
          base_stat: 49,
          stat: {
            name: 'attack',
          },
        },
        {
          base_stat: 49,
          stat: {
            name: 'defense',
          },
        },
        {
          base_stat: 65,
          stat: {
            name: 'special-attack',
          },
        },
        {
          base_stat: 65,
          stat: {
            name: 'special-defense',
          },
        },
        {
          base_stat: 45,
          stat: {
            name: 'speed',
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

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: {
      control: 'color',
      defaultValue: '#8BBE8A',
    },
    defaultValue: {
      control: {
        type: 'select',
        options: ['tab-about', 'tab-stats', 'tab-evolution'],
      },
    },
    featuredColor: {
      control: {
        type: 'select',
        options: availableTypes,
      },
    },
    tabs: {
      control: 'object',
      defaultValue: defaultTabs,
    },
  },
};

export const Default = ({
  defaultValue, backgroundColor, featuredColor, tabs,
}) => (
  <div style={{ paddingBottom: '20px', backgroundColor }}>
    <Tabs defaultValue={defaultValue} featuredColor={featuredColor} tabs={tabs} />
  </div>
);

Default.defaultProps = Tabs.defaultProps;
Default.propTypes = Tabs.propTypes;
