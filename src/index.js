import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DriverPage from './DriverPage';
import TeamPage from './TeamPage';
import TrackPage from './TrackPage';
import ComparePage from './ComparePage';
import HomePage from './HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <HomePage />},
      {path: "/drivers", element: <DriverPage />},
      {path: "/teams", element: <TeamPage />},
      {path: "/tracks", element: <TrackPage />},
      {path: "/compare", element: <ComparePage />},
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);
