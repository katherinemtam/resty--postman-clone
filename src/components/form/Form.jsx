import React from 'react';
import PropTypes from 'prop-types';
import Search from './search/Search';
import Method from './method/Method';
import Body from './body/Body';
import styles from './Form.css';

const Form = ({ search, method, body, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className={styles.Form}>
    <div>
      <Search 
        search={search}
        onChange={onChange} 
      />
      <button>Send</button>
    </div>
    <Method 
      method={method}
      onChange={onChange} 
    />
    <Body 
      body={body}
      onChange={onChange} 
    />
  </form>
);

Form.propTypes = {
  search: PropTypes.string,
  method: PropTypes.string,
  body: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Form;

