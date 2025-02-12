import React from 'react';
import style from './HomePage.module.scss';
import { Header } from '../../Widgets/Header/Header';
import { Headline } from '../../Widgets/Headline/Headline';
import { HomeCard } from '../../Widgets/HomeCard/HomeCard.tsx';

function HomePage(){
    return(
        <div className={style.homePage}>
            <Header/>
            <Headline/>
            {/* Выровнять и сделать props с цветом для карточки */}
            <div>
                <HomeCard title={'Легкая регестрация'} description={'Вам необходимо завести любой кошелек который будет работать с блокчейном TON'}/>
                <HomeCard title={'Легкая регестрация'} description={'Вам необходимо завести любой кошелек который будет работать с блокчейном TON'}/>
                <HomeCard title={'Легкая регестрация'} description={'Вам необходимо завести любой кошелек который будет работать с блокчейном TON'}/>
            </div>
        </div>
    );
}

export default HomePage;