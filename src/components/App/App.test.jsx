import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

test('it renders the Azeno in headline', () => {
    const { container } = render(<App />);
    expect(container.querySelector('h1')).toContainHTML('Azeno');
});
