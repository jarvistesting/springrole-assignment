import React from 'react';
import ButtonBlue from './ButtonBlue';
import ButtonWhite from './ButtonWhite';



const Navbar = () => {

    return (
        <div className="navbar-container">
            <div className="navbar-content-container">
                <a href="https://springrole.com/">
                    <img className="nav-logo" src="https://springrole.com/images/sr_logo_updated.png" alt="" />
                </a>
                <div className="buttons-container">
                    <ButtonBlue>Sign Up</ButtonBlue>
                    <ButtonWhite>Login</ButtonWhite>
                </div>
            </div>
        </div>
    )
}

export default Navbar;