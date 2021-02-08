import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import * as Style from './Search.style';

const Search = ({ defaultValue, onSubmit, placeholder }) => {
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
              defaultValue={defaultValue}
              data-testid="search-input"
              placeholder={placeholder}
              onChange={handleOnInputChange}
            />
          </Style.FormContent>
        </Style.Form>
      </Style.Container>
    </Style.Section>
  );
};

Search.defaultProps = {
  defaultValue: null,
  placeholder: 'What Pokémon are you looking for?',
};

Search.propTypes = {
  defaultValue: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Search;
