import { FC, ReactElement, ReactNode } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { RouteInterface } from '../../routes';

interface ReuiredAuthProps {
  isAuth: boolean;
  children: ReactElement;
  isPrivate: boolean;
}

const ReuiredAuth: FC<ReuiredAuthProps> = ({ isPrivate, children, isAuth }) => {
  if (isPrivate) {
    if (isAuth) {
      return children;
    } else return <Navigate to='/' replace />;
  } else {
    return children;
  }
};

export default ReuiredAuth;
