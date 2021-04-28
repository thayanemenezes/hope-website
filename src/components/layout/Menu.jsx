import React from 'react'
import styles from'./menu.module.scss'
import Logo from '../.././views/images/logo.svg'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className={styles.menu}>
        <nav>
            <img src={Logo} alt="Logo"></img>
            <ul>
                <li className="lisToCenter">
                    <Link to="/">Início</Link>
                </li>
                <li className="lisToCenter">
                    <Link to="/about">Sobre o projeto</Link>
                </li>
                <li className="lisToCenter">
                    <Link to="/search">Buscar</Link>
                </li>
                <li>
                <Link to="/donate">Doar</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu