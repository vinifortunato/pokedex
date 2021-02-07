import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import TabAbout from './TabAbout';
import TabEvolution from './TabEvolution';
import TabStats from './TabStats';
import * as Style from './Tabs.style';

const Tabs = ({ featuredColor }) => {
  const tabs = [
    {
      id: 'tab-about',
      label: 'About',
      component: TabAbout,
    },
    {
      id: 'tab-stats',
      label: 'Stats',
      component: TabStats,
    },
    {
      id: 'tab-evolution',
      label: 'Evolution',
      component: TabEvolution,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const getContentHeight = useCallback((tabId) => {
    const tabRef = document.getElementById(tabId);
    if (!tabRef) {
      return 0;
    }
    const rect = tabRef.getBoundingClientRect();
    return rect.height;
  }, []);

  const [contentHeight, setContentHeight] = useState(getContentHeight(selectedTab));

  const handleNavItemClick = useCallback((tabId) => {
    setSelectedTab(tabId);
  }, []);

  useEffect(() => {
    const height = getContentHeight(selectedTab);
    setContentHeight(height);
  }, [getContentHeight, selectedTab]);

  const navMap = tabs.map(({ id, label }) => (
    <Style.NavItem
      className={selectedTab === id ? 'selected' : ''}
      data-testid={`nav-${id}`}
      key={id}
      onClick={() => handleNavItemClick(id)}
      type="button"
    >
      {label}
    </Style.NavItem>
  ));

  const tabsMap = tabs.map(({ id, component }) => {
    const Tab = component;
    return (
      <Tab
        featuredColor={featuredColor}
        id={id}
        key={id}
        selected={selectedTab === id}
      />
    );
  });

  return (
    <Style.Section data-testid="tabs">
      <Style.Container>
        <Style.Nav>
          {navMap}
        </Style.Nav>
        <Style.Wrapper>
          <Style.Tabs contentHeight={contentHeight}>
            {tabsMap}
          </Style.Tabs>
        </Style.Wrapper>
      </Style.Container>
    </Style.Section>
  );
};

Tabs.defaultProps = {
  featuredColor: '#17171B',
};

Tabs.propTypes = {
  featuredColor: PropTypes.string,
};

export default Tabs;
