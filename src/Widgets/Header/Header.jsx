import { Link } from 'react-router-dom';
import { LoginButton } from '../../Features/LoginButton/LoginButton';
import style from './Header.module.scss';
import React, { useState } from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

export function Header(){
    const [burgerStatus, setBurgerStatus] = useState('start_burger');
    const [popupStatus, setPopupStatus] = useState('start_popup');

    return(
        <div className={style.header}>
            <div className={style.header_section}>
                <div className={style[popupStatus]}>
                    <div className={style.menu_title}>
                        <h3>TonCroud</h3>
                    </div>
                    <div className={style.menu_links}>
                        <ul>
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="projects">Все проекты</Link></li>
                            <li><Link to="createproject">Создать проект</Link></li>
                            <li><Link to="statistic">Статистика</Link></li>
                            <li><Link to="awards">Награды</Link></li>
                            <li><Link to="about">О нас</Link></li>
                        </ul>
                    </div>
                </div>

                <div 
                    className={style[burgerStatus]}
                    onClick={()=>{
                        popupStatus === 'open_menu' ? 
                            setPopupStatus('close_menu'):
                            setPopupStatus('open_menu');
                            
                        burgerStatus === 'open_burger' ? 
                            setBurgerStatus('close_burger') : 
                            setBurgerStatus('open_burger');
                    }}
                >
                    <div className={style.line_wrapper}>
                        <div className={`${style.line} ${style.line_1}`}></div>
                        <div className={`${style.line} ${style.line_2}`}></div>
                        <div className={`${style.line} ${style.line_3}`}></div>
                    </div>
                </div>

                <div className={style.siteName}>
                    <h1>TonCroud</h1>
                </div>
                <LoginButton/>
            </div>
        </div>
    )
}