import { render } from '@testing-library/react';
import Users from '../pages/Users';
import { BrowserRouter } from "react-router-dom";

test('renders Users Works !', () => {
    const { container } = render(
        <BrowserRouter>
            <Users />
        </BrowserRouter>)
    expect(container.firstChild).toHaveClass('users-list')
});
