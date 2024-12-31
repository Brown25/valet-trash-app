import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(() => jest.fn()),
}));

test('renders HomePage and handles navigation', () => {
    const mockToggleLoginModal = jest.fn();

    render(
        <Router>
            <HomePage title="Test Title" toggleLoginModal={mockToggleLoginModal} />
        </Router>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Create New User'));

    const navigate = require('react-router-dom').useNavigate();
    expect(navigate).toHaveBeenCalledWith('/signup');

    fireEvent.click(screen.getByText('Login'));
    expect(mockToggleLoginModal).toHaveBeenCalledTimes(1);
});