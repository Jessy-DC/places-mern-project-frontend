import { render, screen } from '@testing-library/react';
import NewPlace from '../pages/NewPlace';
import React from "react";

test('renders NewPlace Works !', () => {
    render(<NewPlace />);
    const linkElement = screen.getByText(/NewPlace Works !/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders form of NewPlace', () => {
    const { container } = render(<NewPlace />)
    expect(container.firstChild).toHaveClass('place-form')
});