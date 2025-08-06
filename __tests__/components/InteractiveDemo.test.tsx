import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

describe('InteractiveDemo', () => {
  beforeEach(() => {
    render(<InteractiveDemo />);
  });

  it('renders the component title and description', () => {
    expect(screen.getByText('Interactive Form Demo')).toBeInTheDocument();
    expect(screen.getByText(/Demonstrates form handling, state management, and user feedback patterns/)).toBeInTheDocument();
  });

  it('renders form fields with proper labels', () => {
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    expect(screen.getByRole('button', { name: 'Submit Message' })).toBeInTheDocument();
  });

  it('allows user to input form data', () => {
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageInput).toHaveValue('Test message');
  });

  it('shows loading state when form is submitted', async () => {
    const submitButton = screen.getByRole('button', { name: 'Submit Message' });
    
    // Fill form
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test message' } });
    
    // Submit form
    fireEvent.click(submitButton);

    // Check loading state
    expect(screen.getByText('Submitting...')).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  it('shows success message after form submission', async () => {
    const submitButton = screen.getByRole('button', { name: 'Submit Message' });
    
    // Fill form
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test message' } });
    
    // Submit form
    fireEvent.click(submitButton);

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText('Message Sent!')).toBeInTheDocument();
      expect(screen.getByText(/Thank you for your message/)).toBeInTheDocument();
    });
  });

  it('resets form after showing success message', async () => {
    const submitButton = screen.getByRole('button', { name: 'Submit Message' });
    
    // Fill form
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test message' } });
    
    // Submit form
    fireEvent.click(submitButton);

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText('Message Sent!')).toBeInTheDocument();
    });

    // Wait for form to reset (3 seconds)
    await waitFor(() => {
      expect(screen.getByLabelText('Name')).toHaveValue('');
      expect(screen.getByLabelText('Email')).toHaveValue('');
      expect(screen.getByLabelText('Message')).toHaveValue('');
    }, { timeout: 4000 });
  });

  it('validates required fields', () => {
    const submitButton = screen.getByRole('button', { name: 'Submit Message' });
    
    // Try to submit empty form
    fireEvent.click(submitButton);

    // Form should not submit and should show validation
    expect(screen.getByLabelText('Name')).toBeRequired();
    expect(screen.getByLabelText('Email')).toBeRequired();
    expect(screen.getByLabelText('Message')).toBeRequired();
  });
}); 