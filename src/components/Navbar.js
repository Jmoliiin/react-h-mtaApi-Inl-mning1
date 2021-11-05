import React from 'react'

function Navbar() {
    return (
        <div className= "">
            <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Användare</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Skapa användare</a>
            </li>
            </ul>
        </div>
    )
}

export default Navbar