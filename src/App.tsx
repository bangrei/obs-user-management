import { Container } from '@mui/material';
import React from 'react';
import UserList from './components/UserList';

const App: React.FC = () => {
  return (
    <Container>
      <h1>User Management</h1>
      <UserList />
    </Container>
  );
};

export default App;
