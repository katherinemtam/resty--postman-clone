import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onChange }) => (
  <>
    <label htmlFor="search"></label>
    <input
      id="search"
      type="search"
      name="search"
      placeholder="URL"
      value={search}
      onChange={onChange}
    />
  </>
);

Search.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func,
};

export default Search;


