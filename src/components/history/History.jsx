import React from 'react';
import PropTypes from 'prop-types';

const History = ({ id, search, method }) => (
  <>
    <article id={id}>
      <p id={id}>{method}</p>
      <p id={id}>{search}</p>
    </article>
  </>
);

History.propTypes = {
  id: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default History;

