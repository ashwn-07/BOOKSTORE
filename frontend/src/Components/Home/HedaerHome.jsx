import React from 'react'
import './Header.css'

const HedaerHome = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-light">
  <div class="container-fluid">
    <a class="navbar-brand logo-style" href="/">Readly</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <a class="nav-link active nav-item-style" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item nav-item-style">
          <a class="nav-link nav-item-style" href="/signup">Create Account</a>
        </li>
        <li class="nav-item nav-item-style">
          <a class="nav-link nav-item-style" href="/login">Log in</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default HedaerHome