import React from 'react';

import { render } from '@testing-library/react';

import Header from './Header';

describe('<Header /> - ', () => {
  test('renders component', () => {
    const { getByText } = render(<Header />);
    const headerElem = getByText(/Welcome to Express/i);
    expect(headerElem).toBeInTheDocument();
  });
});
