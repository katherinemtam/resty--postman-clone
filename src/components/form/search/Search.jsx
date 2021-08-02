import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

const Search = ({ search, onChange }) => (
  <section className={styles.Search}>
    <label htmlFor="search"></label>
    <input
      id="search"
      type="search"
      name="search"
      placeholder="URL"
      value={search}
      onChange={onChange}
    />
  </section>
);

Search.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func,
};

export default Search;


