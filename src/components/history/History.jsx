import React from 'react';
import PropTypes from 'prop-types';

const History = ({ search, method }) => (
  <>
    <p>{method}</p>
    <p>{search}</p>
  </>
);

History.propTypes = {
  search: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default History;

