import React from 'react'
import "../assets/css/Nav.css";
function Nav() {
    return (
        <div className="nav shadow">
            <div className="col-11 mx-auto d-flex justify-content-between align-items-center">
                <div>
                   <p className="nav-heading p-0 m-0"> Where in the world? </p>
                </div>
                <div className="d-flex nav-modes align-items-center">
                    <i className="far fa-moon"></i>
                    <p className="p-0 m-0 ml-2"> Dark Mode</p>
                </div>
            </div>
        </div>
    )
}

export default Nav
