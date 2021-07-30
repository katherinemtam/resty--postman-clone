import React, { Component } from 'react';
import Form from '../components/form/Form';
import HistoryList from '../components/history/HistoryList';
import Payload from '../components/payload/Payload';
import { fetchApi } from '../services/resty.js';

export default class Resty extends Component {
  state = {
    search: '',
    method: '',
    body: '',
    payload: '',
    history: [],
  }

  componentDidMount() {
    const exists = localStorage.getItem('HISTORY');
    exists 
      ? (this.setState({ history: JSON.parse(exists) }))
      : (localStorage.setItem('HISTORY', '[]')); 
  }

  async fetchAPI() {
    const { search, method, body } = this.state;
    
    const payload = await fetchApi(search, method, body);
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
        <HistoryList
          history={history}
          onClick={this.handleClick}
        />
      </>
    );
  }
}
