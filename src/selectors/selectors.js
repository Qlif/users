import {createSelector} from 'reselect'

const getUsersSelector = state => state.usersStore.users;
const getUserPostSelector = state => state.userPostsStore.userPosts;

export const usersSelector = createSelector(
  getUsersSelector,
  (users) => users
);

export const usersPostSelector = createSelector(
  getUserPostSelector,
  (post) => post
);