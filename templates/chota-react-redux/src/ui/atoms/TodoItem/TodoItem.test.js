import { render, screen } from '@testing-library/react';
import TodoItem from './TodoItem.component';

test('renders learn react link', () => {
  render(<TodoItem />);
  const linkElement = screen.getByText(/Todo App/i);
  expect(linkElement).toBeInTheDocument();
});