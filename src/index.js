import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Drivers from './components/Drivers';
import Teams from './components/Teams';
import Tracks from './components/Tracks';
import Compare from './components/Compare';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: "/drivers", element: <Drivers />},
      {path: "/teams", element: <Teams />},
      {path: "/tracks", element: <Tracks />},
      {path: "/compare", element: <Compare />},
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
