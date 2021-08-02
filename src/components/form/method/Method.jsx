import React from 'react';
import PropTypes from 'prop-types';
import styles from './Method.css';

const Method = ({ method, onChange }) => (
  <div className={styles.Method}>
    <input
      id="get"
      type="radio"
      name="method"
      value="GET"
      onChange={onChange}
      checked={method === 'GET'}
    />
    <label htmlFor="get">GET</label>
    
    <input
      id="post"
      type="radio"
      name="method"
      value="POST"
      onChange={onChange}
      checked={method === 'POST'}
    />
    <label htmlFor="post">POST</label>

    <input
      id="put"
      type="radio"
      name="method"
      value="PUT"
      onChange={onChange}
      checked={method === 'PUT'}
    />
    <label htmlFor="put">PUT</label>

    <input
      id="patch"
      type="radio"
      name="method"
      value="PATCH"
      onChange={onChange}
      checked={method === 'PATCH'}
    />
    <label htmlFor="patch">PATCH</label>
    
    <input
      id="delete"
      type="radio"
      name="method"
      value="DELETE"
      onChange={onChange}
      checked={method === 'DELETE'}
    />
    <label htmlFor="delete">DELETE</label>
  </div>
);

Method.propTypes = {
  method: PropTypes.string,
  onChange: PropTypes.func,
};

export default Method;


