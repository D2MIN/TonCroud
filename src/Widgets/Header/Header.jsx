import { Link } from 'react-router-dom';
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
                            <li>
                                <Link to="/" onClick={()=>{
                                setPopupStatus('close_menu') 
                                setBurgerStatus('close_burger')
                                }}>Главная</Link>
                            </li>
                            <li>
                                <Link to="projects" onClick={()=>{
                                setPopupStatus('close_menu') 
                                setBurgerStatus('close_burger')
                                }}>Все проекты</Link>
                            </li>
                            <li>
                                <Link to="createproject" onClick={()=>{
                                setPopupStatus('close_menu') 
                                setBurgerStatus('close_burger')
                                }}>Создать проект</Link>
                            </li>
                            <li>
                                <Link to="statistic" onClick={()=>{
                                setPopupStatus('close_menu') 
                                setBurgerStatus('close_burger')
                                }}>Статистика</Link>
                            </li>
                            <li>
                                <Link to="awards" onClick={()=>{
                                setPopupStatus('close_menu') 
                                setBurgerStatus('close_burger')
                                }}>Награды</Link>
                            </li>
                            <li>
                                <Link to="about" onClick={()=>{
                                setPopupStatus('close_menu') 
                                setBurgerStatus('close_burger')
                                }}>О нас</Link>
                            </li>
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