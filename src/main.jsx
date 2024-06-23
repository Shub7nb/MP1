// src/main.jsx
import React, { useState } from 'react';
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
import Layout from './components/Layout';
import LoginModal from './components/LoginModal';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const AppWrapper = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isLoggedIn, userType, login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (username, password, userType) => {
    if ((username === 'user' && password === '123') || (username === 'org' && password === '123')) {
      setShowLoginModal(false);
      login(userType);
      if (userType === 'user') {
        navigate('/user-dashboard');
      } else if (userType === 'organization') {
        navigate('/organization-dashboard');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Layout setShowLoginModal={setShowLoginModal}>
      {children}
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
        />
      )}
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppWrapper>
        <App />
      </AppWrapper>
    ),
  },
  {
    path: '/user-dashboard',
    element: (
      <AppWrapper>
        <UserDashboard />
      </AppWrapper>
    ),
  },
  {
    path: '/organization-dashboard',
    element: (
      <AppWrapper>
        <OrganizationDashboard />
      </AppWrapper>
    ),
  },
  {
    path: '/scheduleuser',
    element: (
      <AppWrapper>
        <ScheduleUser />
      </AppWrapper>
    ),
  },
  {
    path: '/scheduleorg',
    element: (
      <AppWrapper>
        <ScheduleOrg />
      </AppWrapper>
    ),
  },
  {
    path: '/donate-clothesuser',
    element: (
      <AppWrapper>
        <DonateClothesUser />
      </AppWrapper>
    ),
  },
  {
    path: '/donate-clothesorg',
    element: (
      <AppWrapper>
        <DonateClothesOrg />
      </AppWrapper>
    ),
  },
  {
    path: '/donate-booksuser',
    element: (
      <AppWrapper>
        <DonateBooksUser />
      </AppWrapper>
    ),
  },
  {
    path: '/donate-booksorg',
    element: (
      <AppWrapper>
        <DonateBooksOrg />
      </AppWrapper>
    ),
  },
  {
    path: '/stay-informeduser',
    element: (
      <AppWrapper>
        <StayInformedUser />
      </AppWrapper>
    ),
  },
  {
    path: '/stay-informedorg',
    element: (
      <AppWrapper>
        <StayInformedOrg />
      </AppWrapper>
    ),
  },
  {
    path: '/can-be-recycleduser',
    element: (
      <AppWrapper>
        <CanBeRecycledUser />
      </AppWrapper>
    ),
  },
  {
    path: '/can-be-recycledorg',
    element: (
      <AppWrapper>
        <CanBeRecycledOrg />
      </AppWrapper>
    ),
  },
  {
    path: '/make-better-choicesuser',
    element: (
      <AppWrapper>
        <MakeBetterChoicesUser />
      </AppWrapper>
    ),
  },
  {
    path: '/make-better-choicesorg',
    element: (
      <AppWrapper>
        <MakeBetterChoicesOrg />
      </AppWrapper>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
