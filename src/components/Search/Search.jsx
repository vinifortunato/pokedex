import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import * as Style from './Search.style';

const Search = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState(null);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(searchValue);
    }
  }, [onSubmit, searchValue]);

  const handleOnInputChange = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  return (
    <Style.Section>
      <Style.Container>
        <Style.Form onSubmit={handleSubmit}>
          <Style.FormContent>
            <Style.Button type="submit" />
            <Style.Input placeholder="What Pokémon are you looking for?" onChange={handleOnInputChange} />
          </Style.FormContent>
        </Style.Form>
      </Style.Container>
    </Style.Section>
  );
};

Search.defaultProps = {
  onSubmit: null,
};

Search.propTypes = {
  onSubmit: PropTypes.func,
};

export default Search;
