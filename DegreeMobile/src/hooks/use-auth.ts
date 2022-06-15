import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectIsLoggedIn } from '../state/slices/authSlice';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectCurrentUser);

  return useMemo(() => ({isLoggedIn, user}), [user, isLoggedIn]);
};
