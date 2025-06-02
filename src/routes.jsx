import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Layout from './layout';
import LoginForm from './Pages/Login';
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/ForgotPassword';
import Dashboard from "./Pages/Dashboard"
import Profile from './Pages/Profile';
import SetPassword from './Pages/SetPassword';
import Home from './Pages/Home';
import { useSelector } from 'react-redux';
import Users from './Pages/Users';
import Otp from './Pages/Otp';
import Membership from './Pages/Membership';
import Campaign from './Pages/Campaign';
import Fanclub from './Pages/Fanclub';


function GuestOnly({ children }) {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(authenticated,"time");
  
  const hasStoredAuth = () => {
    try {
      const authData = localStorage.getItem('authData');
      return authData && JSON.parse(authData).access_token;
    } catch {
      return false;
    }
  };
  
  return (authenticated || hasStoredAuth()) ? 
    <Navigate to="/app/dashboard" replace /> : children;
}

function AuthRequired({ requiredRoles = [], children }) {
  const user = useSelector((state) => state.auth.user);
  const authenticated = useSelector((state) => state.auth.isAuthenticated);
  let rolePermitted = true;
  if (requiredRoles.length) {
    rolePermitted = requiredRoles.includes(user?.role);
  }
  return authenticated && rolePermitted ? children : <Navigate to="/auth/login" />;
}

const router = createBrowserRouter([
  {
    path: '/auth/login',
    element: (
      // <GuestOnly>
        <LoginForm />
      //  </GuestOnly>
    ),
  },
  {
    path: '/auth/signup',
    element: (
      // <GuestOnly>
        <SignUp />
      //  </GuestOnly>
    ),
  },
  {
    path: '/auth/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/password/:id',
    element: <SetPassword />,
  },
  {
    path: '/verify-email',
    element: <Otp />,
  },
  {
    path: '/app/',
    element: (
      <AuthRequired requiredRoles={["superadmin", "admin"]}>
        <Layout />
      </AuthRequired>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'membership',
        element: <Membership />,
      },
      {
        path: 'campaign',
        element: <Campaign />,
      },

            {
        path: 'fanclub',
        element: <Fanclub />,
      },


    ],
  },
  {
    path: '*',
    element: (
      <div>
        404 - Page Not Found. The requested URL: {window.location.pathname} does not exist.
      </div>
    ),
  },
]);

export default router;
