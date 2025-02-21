import {createBrowserRouter} from 'react-router-dom'
import Layout from './components/layout/Layout'
import IndexPage from './pages/index/IndexPage'
import NotFoundPage from "./pages/not-found/NotFoundPage";
import Map from "./components/map/Map";
import Modal from "./components/modal/Modal";
import ContentContainer from "./components/content-container/ContentContainer";
import LoginForm from "./pages/login-form/LoginForm";
import RegisterForm from "./pages/register-form/RegisterForm";

export const router =  createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
                {
                    path: '/',
                    element: <ContentContainer main={<IndexPage />} asideRight={<Map />} />,

                    children: [
                        {
                            path: '/login',
                            element: <Modal><LoginForm /></Modal>,
                        },
                        {
                            path: '/register',
                            element: <Modal><RegisterForm /></Modal>,
                        }
                    ]
                },

                {
                    path: '*',
                    element: <ContentContainer main={<NotFoundPage />} />,
                },
        ]
    },
]);
