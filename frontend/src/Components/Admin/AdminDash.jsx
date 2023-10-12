import React, { useState } from 'react'
import AdminSideBar, { MobNavBar, SideBarItems } from './AdminSideBar'
import {TbHomeShare} from 'react-icons/tb'
import {VscBook} from "react-icons/vsc"
import {ImUsers} from "react-icons/im"
import {TbLogout} from "react-icons/tb"
import {LuBookPlus} from "react-icons/lu"
import { Link } from 'react-router-dom'
import useLogOut from '../../Hooks/UseLogOut'

const AdminDash = () => {

  const [activeName, setActiveName] = useState('books');
  const logOut = useLogOut();

const signOut = async ()=>{
 
  await logOut();

}

  return (
    <>

    <AdminSideBar>
      <SideBarItems icon={<TbHomeShare/>} text={"Home"} dest={'/'} itemName={'home'} activeName={activeName} setActiveName={setActiveName}/> 
      <SideBarItems icon={<VscBook/>} text={"Books"} dest={'/admindash'} itemName={'books'}  activeName={activeName} setActiveName={setActiveName}/>
      <SideBarItems icon={<LuBookPlus/>} text={"Add Book"} dest={'/addbook'} itemName={'add'} activeName={activeName} setActiveName={setActiveName}/>
      <SideBarItems icon={<ImUsers/>} text={"Users"} dest={'/view-users'} itemName={'users'} activeName={activeName} setActiveName={setActiveName}/>

      <SideBarItems icon={<TbLogout/>} text={"Log Out"} signOut={signOut} itemName={'out'} activeName={activeName} setActiveName={setActiveName}/>
    </AdminSideBar>

     <MobNavBar/>

{/* <div className='bg-primary'>heloooo</div> */}
  {/* </MobNavBar> */}



    </>
  )
}

export default AdminDash