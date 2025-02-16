import { LoginButton } from '../../Features/LoginButton/LoginButton';
import style from './Header.module.scss';
import React, { useState } from 'react';

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
                            <li><a href='#'>Главная</a></li>
                            <li><a href='#'>Все проекты</a></li>
                            <li><a href='#'>Создать проект</a></li>
                            <li><a href='#'>Статистика</a></li>
                            <li><a href='#'>Награды</a></li>
                            <li><a href='#'>О нас</a></li>
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
                    <div className={`${style.line} ${style.line_1}`}></div>
                    <div className={`${style.line} ${style.line_2}`}></div>
                    <div className={`${style.line} ${style.line_3}`}></div>
                </div>
                <div className={style.siteName}>
                    <h1>TonCroud</h1>
                </div>
                <LoginButton/>
            </div>
        </div>
    )
}