import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../Hooks/UseAuth'
import UseLogOut from '../../../Hooks/UseLogOut';

const UserHeader = () => {

const { auth } = useAuth();
const logOut = UseLogOut();
const signOut = async ()=>{

  await logOut();
}
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-light">
<div className="container-fluid">
<a className="navbar-brand logo-style" href="/">Readly</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavDropdown">
  <ul className="navbar-nav">
    <li className="nav-item ">
      <a className="nav-link active nav-item-style" aria-current="page" href="/">Home</a>
    </li>
    <li className="nav-item nav-item-style">
      <Link className="nav-link nav-item-style" to={`/profile/${auth.id}`}>Profile</Link>
    </li>
    <li className="nav-item nav-item-style">
      <Link className="nav-link nav-item-style" href="/" onClick={signOut}>Log out</Link>
    </li>
   
  </ul>
</div>
</div>
</nav>
</div>
  )
}

export default UserHeader