import { render, screen } from '@testing-library/react';
import NewPlace from '../pages/NewPlace';

test('renders NewPlace Works !', () => {
    render(<NewPlace />);
    const linkElement = screen.getByText(/NewPlace Works !/i);
    expect(linkElement).toBeInTheDocument();
});