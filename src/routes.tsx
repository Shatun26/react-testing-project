import { FC, ReactNode } from 'react';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

export interface RouteInterface {
  path: string;
  Component: FC;
  isPrivate: boolean;
}
export const ROUTES: RouteInterface[] = [
  {
    path: 'dashboard',
    Component: HomePage,
    isPrivate: true,
  },
  {
    path: 'settings',
    Component: SettingsPage,
    isPrivate: true,
  },
];
