import React from 'react';
import style from './HomePage.module.scss';
import { Headline } from '../../Widgets/Headline/Headline';
import { HomeCard } from '../../Widgets/HomeCard/HomeCard.tsx';
import { AboutWork } from '../../Widgets/AboutWork/AboutWork.jsx';

function HomePage(){
    return(
        <div className={style.homePage}>
            <Headline/>
            {/* Выровнять и сделать props с цветом для карточки */}
            <div className={style.home_cards_section}>
                <HomeCard color={'#1565C0'} title={'Легкая регестрация'} description={'Вам необходимо завести любой кошелек который будет работать с блокчейном TON'}/>
                <HomeCard color={'#2196F3'} title={'Честные проекты'} description={'Все проекты сервиса хранятся и обрабатываются в блокчейне TON, который невозможно подделать или обмануть'}/>
                <HomeCard color={'#64B5F6'} title={'Выгодно создавать'} description={'С использованием блокчейн, сервису не нужно брать огромную комисию за проекты'}/>
            </div>
            <AboutWork/>
        </div>
    );
}

export default HomePage;