import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import Layout from './componets/layout/Layout'
import WorkplacePage from './componets/pages/workplace/WorkplacePage'
import Home from './componets/pages/Home/Home'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './app/configureStore'
import ReminderPage from './componets/pages/Reminder/ReminderPage'
import WorkLayout from './componets/layout/WorkLayout'
import WorkplaceDetail from './componets/WorkplaceDetail'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Navigate to="home"/>} />
      <Route path='/home' element={<Home />} />
      <Route path='work' element={<WorkLayout />}>
        <Route index element={<Navigate to="workplace"/>} />
        <Route path='workplace' element={<WorkplacePage />} />
        <Route path='workplace/:id' element={<WorkplaceDetail />} />
        <Route path='reminder' element={<ReminderPage />} />
      </Route>
    </Route> 
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
