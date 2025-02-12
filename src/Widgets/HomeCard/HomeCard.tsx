import style from './HomeCard.module.scss';
import React from 'react';

interface cardPropI {
    title : string,
    description : string,
}

export function HomeCard({title, description}: cardPropI){
    return(
        <div className={style.home_card_section}>
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