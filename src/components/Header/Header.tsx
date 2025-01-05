import React from 'react'
import styles from './styles.module.css'

import { Link } from 'react-router-dom'

import logo from '../../images/logo.webp'
import magnifyingGlass from '../../images/magnifyingGlass.webp'
import BlackBtn from '../UI/BlackBtn'

type Props = {}

const navList = [
    { id: 1, link: '/discover', title: 'Discover' },
    { id: 2, link: '/creators', title: 'creators' },
    { id: 3, link: '/sell', title: 'Sell' },
    { id: 4, link: '/stats', title: 'stats' }
]

const Header = React.memo(function Header(props: Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftContent}>
                <Link to='/'><img draggable='false' src={logo} alt='logo' /></Link>
                <div className={styles.rowElem}>
                    {
                        navList.map((elem: any, index: number) => {
                            return (
                                <Link to={elem.link} key={index}>{elem.title}</Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.rightContent}>
                <div className={styles.search}>
                    <img draggable='false' src={magnifyingGlass} alt='magnifyingGlass' />
                    <input type="text" placeholder='Search Art Work / Creator' />
                </div>
                <BlackBtn text='CONNETC WALLET' padding='16px 29px' />
            </div>
        </div>
    )
})

export default Header