import React, { Component } from 'react';
import Form from '../components/form/Form';
import Payload from '../components/payload/Payload';
import { fetchApi } from '../services/resty.js';

export default class Resty extends Component {
  state = {
    search: '',
    method: '',
    body: '',
    payload: '',
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });  
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { search, method, body } = this.state;
    const payload = await fetchApi(search, method, body);
    this.setState({ payload });
  }

  render() {
    const { search, method, body, payload } = this.state;

    return (
      <>
        <Form
          search={search}
          method={method}
          body={body}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Payload payload={payload} />
      </>
    );
  }
}
