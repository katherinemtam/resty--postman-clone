import React from 'react';
import PropTypes from 'prop-types';

const History = ({ id, search, method }) => (
  <>
    <article id={id}>
      <h4 id={id}>{method}</h4>
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

