/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useEffect, useState } from 'react';

const AdminRoute = ({ component: Component, ...rest }) => {
  const [user, loading] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      // Here you can add additional checks for admin claims if required
      setIsAdmin(true); // Simplification assuming all logged-in users are admins
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        user && isAdmin ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default AdminRoute;
