import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the components and router to prevent test errors
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => children,
  Routes: ({ children }) => children,
  Route: ({ children }) => children,
  useLocation: () => ({ pathname: '/' }),
  Link: ({ children }) => children
}));

jest.mock('./components/Background', () => () => <div data-testid="background" />);
jest.mock('./components/Navbar', () => () => <div data-testid="navbar" />);
jest.mock('./components/Home', () => () => <div data-testid="home" />);

test('renders main app components', () => {
  render(<App />);
  expect(screen.getByTestId('background')).toBeInTheDocument();
  expect(screen.getByTestId('navbar')).toBeInTheDocument();
  expect(screen.getByTestId('home')).toBeInTheDocument();
});
