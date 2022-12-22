import './Logo.css'
import logo from '../../assets/imgs/logo.png'
import React from "react"

export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={require('../../assets/imgs/logo.png')} alt="logo" />
        </a>
    </aside>