import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import { User } from '../models';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { loadUsers, removeUser } from '../redux/userSlice';
import ErrorBoundary from './ErrorBoundary';
import UserForm from './UserForm';

const UserList: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state: any) => state.users.users);
  const loading = useAppSelector((state: any) => state.users.loading);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handleDelete = async (id: number) => {
    dispatch(removeUser(id));
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedUser(null);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <ErrorBoundary>
      <Button
        variant="contained"
        onClick={() => {
          setOpenDialog(true);
          setSelectedUser(null);
        }}
      >
        Add User
      </Button>
      <List>
        {users.map((user: User) => (
          <ListItem key={user.id} divider>
            <Avatar
              alt={user.name}
              src={user.photo}
              style={{ marginRight: 16 }}
            />
            <ListItemText primary={user.name} secondary={user.email} />
            <Button
              color="primary"
              size="small"
              onClick={() => handleEdit(user)}
            >
              Edit
            </Button>
            <Button
              color="secondary"
              size="small"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedUser ? 'Edit User' : 'Add User'}</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseDialog}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          &times;
        </IconButton>
        <UserForm user={selectedUser} onClose={handleCloseDialog} />
      </Dialog>
    </ErrorBoundary>
  );
};

export default UserList;
