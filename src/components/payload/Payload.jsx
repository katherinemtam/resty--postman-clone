import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const Payload = ({ payload }) => {
  const json = JSON.parse(payload);
  
  return (
    <>
      <div data-testid="payload">
        <ReactJson src={json} displayDataTypes={false} />
      </div>
    </>
  );
};

Payload.propTypes = {
  payload: PropTypes.string
};

export default Payload;
