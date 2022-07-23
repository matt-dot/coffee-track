// import React from 'react';
import { render, screen } from '@testing-library/react';
import CoffeeComponent from '../AddCoffee';
// Test the button component in isolation
// Remeber to test the interfaces
test('render button', () => {
    render(CoffeeComponent())
    const button = screen.getByText(/Submit/i)
    expect(button).toBeInTheDocument()
})

test('render type label', () => {
    render(CoffeeComponent())
    const typeLabel = screen.getByText(/Type/i);
    expect(typeLabel).toBeInTheDocument();
})

test('render rating label', () => {
    render(CoffeeComponent())
    const ratingLabel = screen.getByText(/Rating/i);
    expect(ratingLabel).toBeInTheDocument();
})

test('render type input', () => {
    render(CoffeeComponent())
    const typeInput = screen.getByPlaceholderText(/espresso/i);
    expect(typeInput).toBeInTheDocument();
})

test('render rating input', () => {
    render(CoffeeComponent())
    const ratingInput = screen.getByPlaceholderText(/medium/i);
    expect(ratingInput).toBeInTheDocument();
})

test('render heading', () => {
    render(CoffeeComponent())
    const heading = screen.getByText(/Enter your coffee stuff/i)
    expect(heading).toBeInTheDocument();
})