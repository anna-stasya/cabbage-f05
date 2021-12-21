import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import authSelectors from '../../redux/auth/auth-selectors';

function PrivateRoute({ children }) {
  
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
  return isLoggedIn ? children : <Navigate to="/transactions" />;
}

export default PrivateRoute



// export default function PrivateRoute({
//   children,
//   redirectTo,
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Navigate to={redirectTo} />}
//     </Route>
//   );
// }
