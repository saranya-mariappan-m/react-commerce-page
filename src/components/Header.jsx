import { useState } from 'react'
import './common.module.css'

function Header({ cartValue }) {

  const [showMenu, setMenudisplay] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const displayMenu = () => {
    if (showMenu) {
      setMenudisplay(false)
    } else {
      setMenudisplay(true);
    }
  }
  return (
    <>
      <div className='header'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <div className='site-name'>
              ShopNow
            </div>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" onClick={displayMenu} role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                  <ul className={showMenu ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#!">All Products</a></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                    <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                  </ul>
                </li>
              </ul>

              <div className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                  <i className="bi-cart-fill me-1"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">{cartValue}</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop You Like & Love</h1>
              <p className="heading fw-normal text-white-50 mb-0">Products rate discounted!!!</p>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
