import {createSelector} from 'reselect';

const getUsersSelector = state => state.usersStore.users;

export const usersSelector = createSelector(
  getUsersSelector,
  (users) => users
);