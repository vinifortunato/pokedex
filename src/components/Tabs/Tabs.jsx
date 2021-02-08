import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import * as Style from './Tabs.style';

const Tabs = ({ defaultValue, tabs, featuredColor }) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue || tabs[0]?.id);

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

  const tabsMap = tabs.map(({ id, component, content }) => {
    const Tab = component;
    return (
      <Tab
        content={content}
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
  defaultValue: null,
  featuredColor: '#17171B',
  tabs: [],
};

Tabs.propTypes = {
  defaultValue: PropTypes.string,
  featuredColor: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      component: PropTypes.elementType.isRequired,
      content: PropTypes.object,
    }),
  ),
};

export default Tabs;
