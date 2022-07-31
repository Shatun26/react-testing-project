import { FC } from 'react';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';

export interface RouteInterface {
  path: string;
  Component: FC;
  isPrivate: boolean;
}
export const ROUTES: RouteInterface[] = [
  {
    path: 'dashboard',
    Component: DashboardPage,
    isPrivate: true,
  },
  {
    path: 'settings',
    Component: SettingsPage,
    isPrivate: true,
  },
];
