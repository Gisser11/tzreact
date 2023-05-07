import React from 'react'
import './styles/header.css';

function Header() {
    return (
        <header>
        <div class="container">
            <nav class = "navbar navbar-expand-sm navbar-dark bg-dark">
                <a href="index.html" class="navbar-brand mb-0 h1">
                    <span class="navbar-brand mb-0 h1 __logoleft">
                        Detail's & Autoservice
                    </span>
                </a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a href="crm.html" class="nav-link">CRM Page</a>
                        </li>
                        <li class="nav-item active">
                            <a href="user.html" class="nav-link">Страница заказа</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </header>
    )
}

export default Header