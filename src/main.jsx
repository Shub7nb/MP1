// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserDashboard from './components/UserDashboard';
import OrganizationDashboard from './components/OrganisationDashboard';
import ScheduleUser from './components/user/ScheduleUser';
import ScheduleOrg from './components/org/ScheduleOrg';
import StayInformedUser from './components/user/StayInformedUser';
import MakeBetterChoicesUser from './components/user/MakeBetterChoicesUser';
import DonateBooksUser from './components/user/DonateBooksUser';
import DonateClothesUser from './components/user/DonateClothesUser';
import CanBeRecycledUser from './components/user/CanBeRecycledUser';
import StayInformedOrg from './components/org/StayInformedOrg';
import MakeBetterChoicesOrg from './components/org/MakeBetterChoicesOrg';
import DonateBooksOrg from './components/org/DonateBooksOrg';
import DonateClothesOrg from './components/org/DonateClothesOrg';
import CanBeRecycledOrg from './components/org/CanBeRecycledOrg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/user-dashboard',
    element: <UserDashboard />,
  },
  {
    path: '/organization-dashboard',
    element: <OrganizationDashboard />,
  },
  {
    path: '/scheduleuser',
    element: <ScheduleUser />,
  },
  {
    path: '/scheduleorg',
    element: <ScheduleOrg />,
  },
  {
    path: '/donate-clothesuser',
    element: <DonateClothesUser />,
  },
  {
    path: '/donate-clothesorg',
    element: <DonateClothesOrg />,
  },
  {
    path: '/donate-booksuser',
    element: <DonateBooksUser />,
  },
  {
    path: '/donate-booksorg',
    element: <DonateBooksOrg />,
  },
  {
    path: '/stay-informeduser',
    element: <StayInformedUser />,
  },
  {
    path: '/stay-informedorg',
    element: <StayInformedOrg />,
  },
  {
    path: '/can-be-recycleduser',
    element: <CanBeRecycledUser />,
  },
  {
    path: '/can-be-recycledorg',
    element: <CanBeRecycledOrg />,
  },
  {
    path: '/make-better-choicesuser',
    element: <MakeBetterChoicesUser />,
  },
  {
    path: '/make-better-choicesorg',
    element: <MakeBetterChoicesOrg />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
