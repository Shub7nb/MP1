import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Services from './components/Services';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import SchedulePickup from './components/SchedulePickup';
// import reportWebVitals from './reportWebVitals';
let router = createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>
        },
        {
            path:'/schedule',
            element:<SchedulePickup/>
        },
        // {
        //     path:'/clothes',
        //     element:
        // }
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
    <RouterProvider router={router}/>
//   </React.StrictMode>
);
