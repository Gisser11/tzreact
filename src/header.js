import React from 'react'
import './styles/header.css';

function Header() {
    return (
        <header>
        <div className="container">
            <nav className = "navbar navbar-expand-sm navbar-dark bg-dark">
                <a href="index.html" className="navbar-brand mb-0 h1">
                    <span className="navbar-brand mb-0 h1 __logoleft">
                        Detail's & Autoservice
                    </span>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a href="crm.html" className="nav-link">CRM Page</a>
                        </li>
                        <li className="nav-item active">
                            <a href="user.html" className="nav-link">Страница заказа</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </header>
    )
}

export default Header