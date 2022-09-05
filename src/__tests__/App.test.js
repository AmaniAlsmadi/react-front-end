import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('Load data', async () => {
    render(<App />);
    const name = await waitFor(() => screen.findByTestId('nameId'));
    expect(name).toHaveTextContent(`Name: Amani`)
    const age = await waitFor(() => screen.findByTestId('ageId'));
    expect(age).toHaveTextContent(`Age: 28`)
    const gender = await waitFor(() => screen.findByTestId('genderId'));
    expect(gender).toHaveTextContent(`Gender: Female`)
});

test('Can change the data', async () => {
    render(<App />);

    const inputName = screen.getByTestId('nameId-input');
    fireEvent.change(inputName, {target: {value: 'Sami'}});
    expect(inputName.value).toBe(`Sami`)

    const inputAge = screen.getByTestId('ageId-input');
    fireEvent.change(inputAge, {target: {value: '50'}});
    expect(inputAge.value).toBe(`50`)

    const inputGender = screen.getByTestId('genderId-input');
    fireEvent.change(inputGender, {target: {value: 'Male'}});
    expect(inputGender.value).toBe(`Male`)
  })