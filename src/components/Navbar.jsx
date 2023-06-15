import { Link } from "react-router-dom"
import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux"
import { useState } from "react";

const Navbar = () => {
    const myCart = useSelector(state => state.myCart)
    const myFavouritePage = useSelector(state => state.myFavouritePage)

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="head">
                <div className=" shoplane-logo">
                    <h1 className="shop-logo">SHOP</h1>
                    <h1 className="lane-logo">LANE</h1>
                </div>
                <div className="form-inline my-2 my-lg-0">


                    <div>
                        <div className="dropdown" style={{ marginRight: '20px' }}>
                            <button
                                className=" dropdown-toggle"
                                onClick={toggleDropdown}
                                style={{ borderRadius: '8px', padding: '10px' }}
                            >
                                <FaRegUserCircle /> Login or Signup
                            </button>
                            {isOpen && (
                                <div className="dropdown-menu" style={{ display: 'block' }}>
                                    <Link to="/login" className="dropdown-item">Login</Link>
                                    <Link to="/signup" className="dropdown-item">SignUp</Link>
                                    <Link to="/cart" className="dropdown-item">Your Cart</Link>
                                    <Link to="/favourite" className="dropdown-item">Favourite Page</Link>

                                </div>
                            )}
                        </div>
                    </div>

                    <Link to='/favourite'>  <span className="item-numbers-length">{myFavouritePage.length}</span>
                        <label htmlFor='image'>
                            <FiHeart fontSize={30} />
                        </label></Link>
                    <Link to='/cart'> <span className="item-numbers-length">{myCart.length}</span> <label htmlFor='image'>
                        <BsCart3 fontSize={40} />

                        {console.log(myCart)}
                    </label></Link>
                </div>
            </div>
            <br />

            <nav className="navbar">
                <div className="navbar-container">
                    <ul className="navbar-ul">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">All </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/electronics">Electronics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/subcat">Jewelery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mencloth">Men's clothing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/womencloth">Women's clothing</Link>
                        </li>

                    </ul>
                </div>
            </nav>

        </>
    )
}
export default Navbar