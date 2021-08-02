import React, { Component } from 'react';
import Header from '../components/app/Header';
import Form from '../components/form/Form';
import HistoryList from '../components/history/HistoryList';
import Payload from '../components/payload/Payload';
import { fetchApi } from '../services/resty.js';
import styles from './Resty.css';

export default class Resty extends Component {
  state = {
    search: '',
    method: '',
    body: '',
    payload: { 'Hello': 'I am bored. Please make a fetch!' },
    history: [],
  }

  componentDidMount() {
    const historyExists = localStorage.getItem('HISTORY');
    historyExists 
      ? (this.setState({ history: JSON.parse(historyExists) }))
      : (localStorage.setItem('HISTORY', '[]')); 
  }

  async fetchAPI() {
    const { search, method, body } = this.state;
    
    const res = await fetchApi(search, method, body);
    const payload = JSON.parse(res);

    this.setState({ payload });
  }

  getAndSetLocalStorage() {
    const { search, method, body } = this.state;
    const recent = { 
      id: search + method + body,
      search, 
      method, 
      body
    };

    const parsedHistory = JSON.parse(localStorage.getItem('HISTORY'));
    parsedHistory.push(recent);

    const newHistory = JSON.stringify(parsedHistory);
    localStorage.setItem('HISTORY', newHistory);

    this.setState({ history: parsedHistory });
  }
 
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });  
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    this.fetchAPI();
    this.getAndSetLocalStorage();
  }

  handleClick = ({ target }) => {
    let match;

    this.state.history.forEach(eachHistory => {

      if(eachHistory.id === target.id) {
        match = eachHistory;
      }
    });

    this.setState({ 
      search: match.search,
      method: match.method,
      body: match.body
    });
  }

  render() {
    const { search, method, body, payload, history } = this.state;
    
    return (
      <>
        <Header />
        <section className={styles.Resty}>
          <div>
            <Form
              search={search}
              method={method}
              body={body}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
            <Payload 
              payload={payload} 
            />
          </div>
          <HistoryList
            history={history}
            onClick={this.handleClick}
          />
        </section>
      </>
    );
  }
}
