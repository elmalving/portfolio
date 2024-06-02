import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import { ErrorPage, Layout } from './pages';
import { Home, Privacy, Projects } from './components';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="privacy" element={<Privacy />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
