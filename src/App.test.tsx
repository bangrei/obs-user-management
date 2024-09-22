import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

test('renders User Management', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/User Management/i);
  expect(linkElement).toBeInTheDocument();
});
