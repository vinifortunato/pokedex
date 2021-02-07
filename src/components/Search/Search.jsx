import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import * as Style from './Search.style';

const Search = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState(null);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    onSubmit(searchValue);
  }, [onSubmit, searchValue]);

  const handleOnInputChange = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  return (
    <Style.Section data-testid="search">
      <Style.Container>
        <Style.Form onSubmit={handleSubmit}>
          <Style.FormContent>
            <Style.Button type="submit" data-testid="search-submit" />
            <Style.Input
              data-testid="search-input"
              placeholder="What Pokémon are you looking for?"
              onChange={handleOnInputChange}
            />
          </Style.FormContent>
        </Style.Form>
      </Style.Container>
    </Style.Section>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
