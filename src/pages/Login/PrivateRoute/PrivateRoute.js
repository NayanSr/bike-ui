import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useauth';

const PrivateRoute = ({ children, ...rest }) => {
    let { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) { return <CircularProgress /> }
    if (user?.email) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} />


};

export default PrivateRoute;