import {createSelector} from 'reselect'

const getUserPostSelector = state => state.userPostsStore.userPosts;

export const usersPostSelector = createSelector(
  getUserPostSelector,
  (post) => post
);