import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import App from './App';

describe('<App />', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ time: new Date() })
      })
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('renders component', async () => {
    const { getByText } = render(<App />);
    await act(() => Promise.resolve());

    const headerElem = getByText(/Welcome to Express/i);
    expect(headerElem).toBeInTheDocument();
  });

  test('passes fetchTime (api error)', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: 'errorMessage'
      })
    );

    const { getByText } = render(<App />);
    await act(() => Promise.resolve());

    const errorPara = getByText(/error/i);
    expect(errorPara.textContent).toEqual('errorMessage');
  });
});
