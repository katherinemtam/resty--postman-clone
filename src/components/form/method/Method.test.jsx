import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Method from './Method';

describe('Method component', () => {
  afterEach(() => cleanup());
  it('renders Method', () => {
    const { asFragment } = render(<Method />);
    expect(asFragment()).toMatchSnapshot();
  });
});
