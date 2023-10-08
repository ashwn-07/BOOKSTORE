import React from 'react'
import AdminDash from './AdminDash'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
        
        <div className='d-flex' >
        <AdminDash/>
        <Outlet/>
        </div>
    </>
  )
}

export default AdminLayout