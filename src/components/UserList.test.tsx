import { Container } from '@mui/material';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as api from '../api';
import userReducer from '../redux/userSlice';
import ErrorBoundary from './ErrorBoundary';
import UserList from './UserList';

const mockStore = configureStore([]);

jest.mock('../api');

describe('UserList', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      reducer: {
        users: userReducer,
      },
    });

    (api.fetchUsers as jest.Mock).mockResolvedValue([
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        photo: 'https://picsum.photos/200/200?random=1',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        photo: 'https://picsum.photos/200/200?random=2',
      },
    ]);
  });

  test('renders UserList component', async () => {
    render(
      <Provider store={store}>
        <Container>
          <h1>User Management</h1>
          <ErrorBoundary>
            <UserList />
          </ErrorBoundary>
        </Container>
      </Provider>
    );

    // Wait for users to load and appear in the document
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });
  });
});
