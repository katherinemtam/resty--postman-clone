import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './Payload.css';

const Payload = ({ payload }) =>  (
  <>
    <div data-testid="payload" className={styles.Payload}>
      <ReactJson src={payload} displayDataTypes={false} />
    </div>
  </>
);

Payload.propTypes = {
  payload: PropTypes.object
};

export default Payload;
