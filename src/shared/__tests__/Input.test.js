import {render, screen} from '@testing-library/react';
import Input from '../components/FormElements/Input';
import React from "react";

test('renders Button works', () => {
    let onInput = () => {};
    render(<Input label="test" element="input" onInput={onInput} />);
    const input = screen.getByLabelText(/test/i);
    expect(input).toBeInTheDocument();
});