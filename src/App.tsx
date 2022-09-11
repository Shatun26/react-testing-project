import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import RequiredAuth from './components/RequiredAuth';
import MainLayout from './pages/MainLayout';
import HomePage from './pages/HomePage';
import { ROUTES } from './routes';
import './styles/AppStyle.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  const isAuth = true;
  
  return (
    <Provider store={store}>
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
                  <RequiredAuth
                    isPrivate={isPrivate}
                    isAuth={isAuth}
                    children={<Component />}
                  />
                }
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
