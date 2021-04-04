import { render, screen } from '@testing-library/react';
import Users from '../pages/Users';

test('renders Users Works !', () => {
    render(<Users />);
    expect(screen.getAllByText('Hello !').length).toBe(2);
});
