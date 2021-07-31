import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Payload from './Payload';

describe('Payload component', () => {
  afterEach(() => cleanup());
  it('renders Payload', () => {
    const { asFragment } = render(<Payload />);
    expect(asFragment()).toMatchSnapshot();
  });
});
