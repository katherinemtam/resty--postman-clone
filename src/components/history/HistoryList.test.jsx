import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './HistoryList';

describe('HistoryList component', () => {
  const history = [
    {
      method: 'POST',
      search: 'https://aztro.sameerkumar.website/?sign=pisces&day=today'
    }
  ];

  afterEach(() => cleanup());

  it('renders HistoryList', () => {
    const { asFragment } = render(<HistoryList history={history}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
