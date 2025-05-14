import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Layout from './layout';
import LoginForm from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Overview from './components/Overview';
import useAuth from './store/useAuth';
import Dashboard from "./components/Dashboard"
import Profile from './components/Profile';
import SetPassword from './components/SetPassword';

function AuthRequired({ requiredRoles = [], children }) {
    const { user, authenticated } = useAuth()
    // const authenticated = !!user;
    let rolePermitted = true;
    if (requiredRoles.length) {
        rolePermitted = requiredRoles.includes(user?.roleName);
    }
    // console.log("user.role" , user?.roleName);   
    // if (rolePermitted) {
    //     return <Navigate to="/auth/not-autorized" />;
    // }
    return authenticated && rolePermitted ? children : <Navigate to="/auth/signup" />;
}

const router = createBrowserRouter([
    {
        path: '/auth/login',
        element: <LoginForm />,
    },
    {
        path: '/auth/signup',
        element: <SignUp />,
    },
    {
        path: '/auth/forgot-password',
        element: <ForgotPassword />,
    },
    {
        path: '/overview',
        element: <Overview />,
    },
    {
        path: '/password/:id',
        element: <SetPassword />,
    },
    {
        path: '/',
        element: (
            <AuthRequired requiredRoles={["Admin", "Mentor","OT","Student"]}>
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
                element: <div>dashboard Details</div>,
            },
            {
                path: 'profile',
                element: <Profile/>,
            },
            {
                path: 'setting',
                element: <div>abc Details</div>,
            },
            {
                path: 'assigned-mentors',
                element: <div>assigned mentors Details</div>,
            },
            {
                path: 'available-courses',
                element: <div>available
                    courses
                </div>,
            },
            {
                path: 'completed-courses',
                element: <div>completed courses</div>,
            },
            {
                path: 'scheduled-classes',
                element: <div>scheduled classsess Details</div>,
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
