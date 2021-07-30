import React from 'react';
import PropTypes from 'prop-types';
import History from './History';

const HistoryList = ({ history }) => {

  const historyElements = history.map((eachHistory, index) => (
    <li key={index}>
      <History 
        search={eachHistory.search}
        method={eachHistory.method}
      />
    </li>
  ));
  
  return <ul>{historyElements}</ul>;
};

HistoryList.protoTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      search: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
    })
  ),
};

export default HistoryList;
