import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Resty from './Resty';

describe('Resty Container', () => {
  test('Resty form', async () => {
    render(<MemoryRouter><Resty /></MemoryRouter>);

    //test search component
    const urlInput = await screen.findByPlaceholderText('URL');
    fireEvent.change(urlInput, 
      { target: 
        { value: 'https://aztro.sameerkumar.website/?sign=pisces&day=today' } 
      });
    expect(urlInput.value).toBe('https://aztro.sameerkumar.website/?sign=pisces&day=today');

    //test method component
    const radioButton = await screen.findByLabelText('POST');
    userEvent.click(radioButton);
    fireEvent.change(radioButton,
      { target:
        { value: 'POST' }
      });
    expect(radioButton).toBeChecked('POST');

    //test form submission
    const submitButton = await screen.findByRole('button');
    const payload = await screen.getByTestId('payload');
    userEvent.click(submitButton);
    expect(payload).not.toBeEmptyDOMElement;
    
    //test history
    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });

  test('Resty body component', async () => {
    render(<MemoryRouter><Resty /></MemoryRouter>);

    //test body component
    const body = await screen.findByPlaceholderText('Raw JSON Body');
    fireEvent.change(body,
      { target:
        { value: '{hello: world}' }
      });
    expect(body.value).toBe('{hello: world}');
  });
});
