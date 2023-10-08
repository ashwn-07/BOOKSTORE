import React from 'react'
import AdminSideBar, { SideBarItems } from './AdminSideBar'
import {TbHomeShare} from 'react-icons/tb'
import {VscBook} from "react-icons/vsc"
import {ImUsers} from "react-icons/im"
import {TbLogout} from "react-icons/tb"
import {LuBookPlus} from "react-icons/lu"
import { Link } from 'react-router-dom'
import useLogOut from '../../Hooks/UseLogOut'

const AdminDash = () => {

  const logOut = useLogOut();

const signOut = async ()=>{
 
  await logOut();

}

  return (
    <>

    <AdminSideBar>
     <SideBarItems icon={<TbHomeShare/>} text={"Home"} dest={'/'}/> 
      <SideBarItems icon={<VscBook/>} text={"Books"} dest={'/admindash'}/>
      <SideBarItems icon={<LuBookPlus/>} text={"Add Book"} dest={'/addbook'} />
      <SideBarItems icon={<ImUsers/>} text={"Users"} dest={'/view-users'}/>

      <SideBarItems icon={<TbLogout/>} text={"Log Out"} signOut={signOut}/>
    </AdminSideBar>
    </>
  )
}

export default AdminDash