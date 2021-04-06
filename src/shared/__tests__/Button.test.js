import { render } from '@testing-library/react';
import Button from '../components/FormElements/Button';

test('renders Button works', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toHaveClass('button')
});