import React from 'react';
import PropTypes from 'prop-types';
import History from './History';

const HistoryList = ({ history, onClick }) => {
  const historyElements = history.map((eachHistory, index) => (
    <li 
      key={index}
      onClick={onClick}
    >
      <History 
        id={`${eachHistory.search}${eachHistory.method}${eachHistory.body}`}
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
  ).isRequired,
  onClick: PropTypes.func.isRequired
};

export default HistoryList;
