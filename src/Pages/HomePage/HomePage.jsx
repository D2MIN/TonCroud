import React from 'react';
import style from './HomePage.module.scss';
import { Header } from '../Header/Header';

function HomePage(){
    return(
        <div className={style.homePage}>
            <Header/>
        </div>
    );
}

export default HomePage;