import { FC, ReactNode } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import CustomRoute from './components/CustomRoute';
import MainLayout from './pages/MainLayout';
import HomePage from './pages/HomePage';
import { ROUTES } from './routes';
import './styles/AppStyle.css';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='*' element={<Navigate to={'/'} replace />} />
          {ROUTES.map(({ path, Component, isPrivate }) => (
            <Route
              key={path}
              path={path}
              element={
                <CustomRoute isPrivate={isPrivate}>{Component}</CustomRoute>
              }
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
