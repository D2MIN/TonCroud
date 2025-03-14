import style from './ProjectTitle.module.scss';
import React from 'react';

interface PropsI{
    name : string,
    img : string,
    descript : string,
    date : string,
    days : number,
}

export function ProjectTitles({name,img,descript,date,days} : PropsI){
    return(
        <>
            <div className={style.projectName}>
                <h1>{name}</h1>
            </div>
            <div className={style.projectImg}>
                <img src={img} />
            </div>
            <div className={style.ProjectDescript}>
                <p>{descript}</p>
            </div>
            <div className={style.projectDate}>
                <div className={style.date}>
                    <p>Дата окончания</p>
                    <p><strong>{date}</strong></p>
                </div>
                <div className={style.daysCount}>
                    <p>Осталось дней</p>
                    <p><strong>{days}</strong></p>
                </div>
            </div>
        </>
    )
}