import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from './Body';

describe('Body component', () => {
  afterEach(() => cleanup());
  it('renders Body', () => {
    const { asFragment } = render(<Body />);
    expect(asFragment()).toMatchSnapshot();
  });
});
