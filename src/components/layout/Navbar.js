import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <div className='p'>
  <p><i className="fa-solid fa-phone fa-sm" style={{color: '#bfc7d4'}} /> 03041111774</p>
  <p><i className="fa-solid fa-envelope ms-lg-1"style={{color: '#9aa4b7'}} />    info@pnytrainings.com </p>
  </div>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="fasttrack nav-item">
          <a className="nav-link active" style={{backgroundColor:'rgb(170, 170, 10)',borderRadius:'5px', fontSize:'11px',fontWeight:'bold', padding:'3px', marginTop:'8px' }} aria-current="page" href="#">Fast Track Pro BootCamps 2023</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="amazon">Amazone Services |</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="kids">Kids Courses |</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="female">Female Courses |</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="training">Training Shedule |</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="fee">Fee structue |</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="admission">Admission |</Link>
        </li> 
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <button className='btn btn-info btn-sm'>Login</button>
    <button className='btn btn-danger btn-sm ms-2'>Pay Now</button>
    </div>
    
  </div>
    </nav>
  





    <div className="container-fluid">
        <div className="row">
          <div className="imgdrp col-lg-2 col-md-2 d-flex text-center md-ms-3 mb-5">
            {/* <img src="./images/logo.jpg" alt="" /> */}
          </div>
          <div
            className="dropdown col-lg-2 col-md-2 lg-ms-5 md-ms-3 col-sm-12 text-center "
            style={{ marginTop: "35px" }}
          >
            <button
              className="btn btn-info dropdown-toggle btn-lg "
              style={{
                color: "white",
                padding: "10px",
                fontSize: "16px",
                paddingRight: "19px",
                paddingLeft: "19px",
              }}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa-brands fa-microsoft fa-sm"></i> Categories
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>Action</li>
              <li>Another action</li>
              <li>Something else here</li>
            </ul>
          </div>
          <div className="ser col-lg-4 col-md-6 " style={{ marginTop: "18px" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                id="search"
                type="search"
                aria-label="Search"
                placeholder="Search for the software or skills you want to learn"
              />{" "}
              <i
                className="icn fa-solid fa-magnifying-glass fa-xl"
                style={{ color: "#2f456a" }}
              />
            </form>
          </div>
          <div className="col-lg-4 col-md-12 mt-4 md-mt-2 text-center">
            <Link to="/" className="btns ms-3">
              Home
            </Link>
            <Link to="/about" className="btns ms-3">
              About us
            </Link>
            <Link to="/career" className="btns ms-2">
              Career
            </Link>
            <Link to="/blog" className="btns ms-2">
              blog
            </Link>
            <Link to="/events" className="btns ms-3">
              Events
            </Link>
          </div>
        </div>
      </div>


  </>


  
  )
}
export default Navbar
