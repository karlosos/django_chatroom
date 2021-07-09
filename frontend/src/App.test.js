import { render, screen } from '@testing-library/react'
import App from './App'

test('renders login input', () => {
  render(<App />)
  const loginInput = screen.getByPlaceholderText(/Your name/i)
  expect(loginInput).toBeInTheDocument()
})
