import React from 'react'
import logo from './assets/img/logonew.png'
import { Link, Outlet } from 'react-router-dom';


export default function Dashboard() {
  return (
    <div>
      <header id="header" className="header fixed-top d-flex align-items-center">

        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            {/* <img src="assets/img/logo.png" alt=""/> */}
            <img src={logo} style={{ maxWidth: "100%" }} />
            <span className="d-none d-lg-block">Recipe Book</span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>

        <div className="search-bar">
          <form className="search-form d-flex align-items-center" method="POST" action="#">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
          </form>
        </div>



      </header>

      <aside id="sidebar" className="sidebar">

        <div className="sidebar-nav" id="sidebar-nav">

          {/* <li className="nav-item"> */}
          <Link to={"/"} className="nav-link">
            <i className="bi bi-grid"></i>

            <span>Dashboard</span>
          </Link>
          {/* </li> */}

          {/* <li className="nav-item"> */}
          <Link to={"/unit"} className="nav-link " >
            <i className="bi bi-menu-button-wide"></i><span>Units</span>
          </Link>

          {/* </li> */}

          {/* <li className="nav-item"> */}
          <Link to={"/ingredient"} className="nav-link ">
            <i className="bi bi-journal-text"></i><span>Ingredients</span>
          </Link>

          {/* </li> */}
          {/* <li className="nav-item"> */}
          <Link to={"/recipe"} className="nav-link ">
            <i className="fa-solid fa-utensils"></i>
            <span>Recipes</span>
          </Link>
          {/* </li> */}
          {/* <li className="nav-item"> */}
          <Link to={"/orders"} className="nav-link ">
            {/* <i className="bi bi-layout-text-window-reverse"></i> */}
            <i className="fa-solid fa-utensils"></i>
            {/* <box-icon type='solid' name='bowl-hot'></box-icon> */}
            <span>Orders</span>
          </Link>
          {/* </li> */}

          {/* <li className="nav-item"> */}
          <a className="nav-link " >
            <i className="bi bi-bar-chart"></i><span>Charts</span>
          </a>
          {/* </li> */}

          {/* <li className="nav-item"> */}
          <a className="nav-link " href="#">
            <i className="bi bi-gem"></i><span>Tables</span>
          </a>
          {/* </li> */}


          {/* <li className="nav-item"> */}
          <a className="nav-link collapsed" href="pages-contact.html">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </a>
          {/* </li> */}

          {/* <li className="nav-item"> */}
          <a className="nav-link collapsed" href="pages-register.html">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
          </a>
          {/* </li> */}

          {/* <li className="nav-item"> */}
          <a className="nav-link collapsed" href="pages-login.html">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Logout</span>
          </a>
          {/* </li> */}

        </div>

      </aside>
      <main id="main" className="main">
        <Outlet />
      </main>


      {/* <footer id="footer" className="footer">
<div className="copyright">
  &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
</div>
<div className="credits">
   Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
</div>
</footer> */}

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </div>
  )
}
