import React from 'react'
import AdminDash from './AdminDash'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
        
        <div className='d-md-flex d-block' >
        <AdminDash/>
        <Outlet/>
        </div>
    </>
  )
}

export default AdminLayout