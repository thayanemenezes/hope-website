import React from 'react'

import BgHome from '../../.././views/images/bg-home.svg'
import github from '../../.././views/images/github.svg'
import youtube from '../../.././views/images/youtube.svg'
import linkedin from '../../.././views/images/linkedin.svg'
import insta from '../../.././views/images/insta.svg'
import facebook from '../../.././views/images/facebook.svg'

import styles from './home.module.scss'

const Home = props => (
    <div className={styles.home}>
            <div className={styles.contentLeft}>
                <h1>Leve esperança para o mundo</h1>
                <p>Visite hospitais de câncer infantil, participe de
                ONG’S que apoiam a causa ou faça uma doação.</p>

                <div className={styles.buttons}>
                <button className={styles.buttonSchedule}>Agendar visita</button>
                <button className={styles.buttonDonate}>Fazer doação</button>
                </div>
                <div className={styles.iconsHome}>
                <span>
                    <a href="https://github.com/thayanemenezes/hope">
                        <img src={github} alt="github" />
                    </a>
                    <a href="https://github.com/thayanemenezes/hope">
                        <img src={youtube} alt="github" />
                    </a>
                    <a href="https://github.com/thayanemenezes/hope">
                        <img src={linkedin} alt="github" />
                    </a>
                    <a href="https://github.com/thayanemenezes/hope">
                        <img src={insta} alt="github" />
                    </a>
                    <a href="https://github.com/thayanemenezes/hope">
                        <img src={facebook} alt="github" />
                    </a>
                </span>
                </div>
            </div>

            <div className={styles.contentRight}>
                <img src={BgHome} alt="Hope for the world Bg" />
            </div>
        </div>
)

export default Home