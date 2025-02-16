import style from './HomeCard.module.scss';
import React from 'react';

interface cardPropI {
    color : string,
    title : string,
    description : string,
}

export function HomeCard({color, title, description}: cardPropI){
    const colorCard = {
        backgroundColor: color,
    };

    return(
        <div style={colorCard} className={style.home_card_section}>
            <div className={style.card_info}>
                <div className={style.card_title}>
                    {title}
                </div>
                <div className={style.card_description}>
                    {description}
                </div>
            </div>
        </div>
    );
}