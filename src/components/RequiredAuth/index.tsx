import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface ReuiredAuthProps {
  isAuth: boolean;
  children: ReactElement;
  isPrivate: boolean;
}

const RequiredAuth: FC<ReuiredAuthProps> = ({
  isPrivate,
  children,
  isAuth,
}) => {
  if (isPrivate) {
    if (isAuth) {
      return children;
    } else return <Navigate to='/' replace />;
  } else {
    return children;
  }
};

export default RequiredAuth;
