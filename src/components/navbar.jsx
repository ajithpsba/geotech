import { Link } from 'react-router-dom';
function Navbar(){
  return (
    <nav className="navbar navbar-expand-sm">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><h2 className='logoname'>GeoTech</h2></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
      
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Project">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#gallery">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>

        <div className="navbar-nav ms-auto">
        <li className="nav-item d-flex align-items-center">
          <i className="fa fa-user-circle"></i>
          <Link className="nav-link" to="/admin">Admin</Link>
          </li>
          </div>

      </div>
    </div>
  </nav>
  );
}

export default Navbar;