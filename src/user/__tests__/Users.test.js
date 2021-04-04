import { render, screen } from '@testing-library/react';
import Users from '../pages/Users';

test('renders Users Works !', () => {
    render(<Users />);
    const linkElement = screen.getByText(/Users Works!/i);
    expect(linkElement).toBeInTheDocument();
});
