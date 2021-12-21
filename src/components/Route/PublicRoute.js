import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import authSelectors from '../../redux/auth/auth-selectors';

function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/' })
{
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouidRedirect = isLoggedIn && restricted;

  return shouidRedirect ? <Navigate to={redirectTo} /> : children;
}

export default PublicRoute;

