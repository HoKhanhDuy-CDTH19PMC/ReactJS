import React from 'react'
import {Link} from 'react-router-dom'
import {NavbarBrand} from 'reactstrap'
function Navbar() {
    return (
        <div>
                <div className="row col-md-12 bg-danger m-0">
                <NavbarBrand>
                                    <Link exact to="/products">All Products</Link>
                </NavbarBrand>
                </div>
        </div>
    )
}

export default Navbar
