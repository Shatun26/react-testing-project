import { FC } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { RouteInterface } from '../../routes';

const CustomRoute = ({ isPrivate, children, isAuth }: any) => {
  if (isPrivate) {
    if (isAuth) {
      return children;
    } else return <Navigate to='/' replace />;
  } else {
    return children;
  }
};

export default CustomRoute;
