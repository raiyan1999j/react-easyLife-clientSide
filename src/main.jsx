import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Login from './UserAuth/Login/Login.jsx'
import Register from './UserAuth/Register/Register.jsx';
import Context from './ContextProvider/Context.jsx'
import Home from './Component/Home/Home.jsx'
import AddService from './Component/AddService/AddService.jsx'
import Manage from './Component/ManageService/Manage.jsx'
import PrivetRoute from './Component/PrivetRoute/PrivetRoute.jsx';
import Services from './Component/Services/Services.jsx'
import Details from './Component/Details/Details.jsx'
import Booked from './Component/Booked/Booked.jsx';
import Todo from './Component/Todo/Todo.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/addService',
        element:<PrivetRoute><AddService/></PrivetRoute>
      },
      {
        path:'/manage',
        element:<PrivetRoute><Manage/></PrivetRoute>
      },
      {
        path:'/service',
        element:<Services/>
      },
      {
        path:'/details/:id',
        element:<PrivetRoute><Details/></PrivetRoute>,
        loader:({params})=>{
          return axios(`http://localhost:5000/details/${params.id}`)
          .then((data)=>{
            return data.data
          })
        }
      },
      {
        path:'/booked',
        element:<PrivetRoute><Booked/></PrivetRoute>
      },
      {
        path:'/todo',
        element:<PrivetRoute><Todo/></PrivetRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router}/>
    </Context>
  </React.StrictMode>,
)
