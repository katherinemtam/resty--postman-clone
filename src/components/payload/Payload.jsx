import React from 'react';
import PropTypes from 'prop-types';

const Payload = ({ payload }) => (
  <>
    <div data-testid="payload">
      {payload}
    </div>
  </>
);

Payload.propTypes = {
  payload: PropTypes.string
};

export default Payload;
