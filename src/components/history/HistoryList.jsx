import React from 'react';
import PropTypes from 'prop-types';
import History from './History';
import styles from './HistoryList.css';

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

  if(history === []) {
    return (
      <section className={styles.HistoryList}>
        <h1>HISTORY</h1>
        <ul>Looks like you haven't fetched anything yet.</ul>
      </section>
    );
  } else { 
    return (
      <section className={styles.HistoryList}>
        <h1>HISTORY</h1>
        <ul>{historyElements}</ul>
      </section>
    );
  }
};

HistoryList.protoTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      search: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HistoryList;
