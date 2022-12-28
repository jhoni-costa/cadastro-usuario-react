import './Logo.css'
import logo from '../../assets/imgs/logo.png'
import React from "react"
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link className="logo">
            <img src={require('../../assets/imgs/logo.png')} alt="logo" />
        </Link>
    </aside>