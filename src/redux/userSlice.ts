import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUser, deleteUser, fetchUsers, updateUser } from '../api';
import { User } from '../models';

interface UserState {
  users: User[];
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  loading: false,
};

export const loadUsers = createAsyncThunk('users/load', fetchUsers);
export const addUser = createAsyncThunk('users/add', createUser);
export const editUser = createAsyncThunk('users/edit', updateUser);
export const removeUser = createAsyncThunk('users/remove', deleteUser);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        const newUser = [action.payload];
        state.users = [...newUser, ...state.users];
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.meta.arg);
      });
  },
});

export default userSlice.reducer;
