import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assets/images/logo.png'
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Index.module.scss'

const Header = () => {

    return (
        <div className={s.folder}>
            <div className={s.nav}>
                <NavLink to={'/'} className={s.logo}>
                    <div className={s.img}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={s.subtitle}>zim</div>
                </NavLink>
                <nav>
                    <NavLink exact='true' activeclassname={s.active} to={'/'}>
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact='true' className={s.about} activeclassname={s.active} to={'/about'}>
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact='true' className={s.contacts} activeclassname={s.active} to={'/contacts'}>
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    </NavLink>
                </nav>
                <ul>
                    <li>
                        <a href="https://github.com/AzimAkhmedov">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/miza.kha/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Header