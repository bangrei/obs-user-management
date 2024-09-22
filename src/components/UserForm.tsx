import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { User } from '../models';
import { useAppDispatch } from '../redux/hooks';
import { addUser, editUser } from '../redux/userSlice';

interface UserFormProps {
  user?: User | null;
  onClose: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onClose }) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      dispatch(editUser({ ...user, name, email }));
    } else {
      dispatch(addUser({ name, email } as User));
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 24 }}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
        style={{ marginBottom: 24 }}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        variant="outlined"
        required
        style={{ marginBottom: 24 }}
      />
      <Button variant="contained" type="submit">
        {user ? 'Update' : 'Add'} User
      </Button>
    </form>
  );
};

export default UserForm;
