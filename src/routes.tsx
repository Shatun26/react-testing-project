import { FC, lazy, Suspense } from 'react';
import DashboardPage from './pages/DashboardPage';
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
export interface RouteInterface {
  path: string;
  Component: FC;
  isPrivate: boolean;
}

const lazyHOC = (Children: FC) => {
  return () => <Suspense fallback={<p>Loading...</p>}>{<Children />}</Suspense>;
};

export const ROUTES: RouteInterface[] = [
  {
    path: 'dashboard',
    Component: DashboardPage,
    isPrivate: true,
  },
  {
    path: 'settings',
    Component: lazyHOC(SettingsPage),
    isPrivate: true,
  },
];
