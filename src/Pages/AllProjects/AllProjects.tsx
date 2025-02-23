import React from 'react';
import style from './AllProjects.module.scss';
import { ProjectCard } from '../../Widgets/ProjectCard/ProjectCard.tsx';

function AllProjects(){
    return(
        <div className={style.AllProjectsPage}>
            <h1 className={style.title}>TonCroud проекты</h1>
            <div className={style.filters}>ПОИСК и ФИЛЬТРАЦИЯ</div>
            <div className={style.project_list}>
                <ProjectCard 
                    name='Новая часть игры JEDI - JEDI Falen Order '
                    descript='Представляем захватывающую игру JEDI Falen Order, где вас ждут приключения, загадки, разнообразные задания и интересные персонажи. Путешествуйте по красочным локациям, проявляйте смекалку и находчивость, чтобы достичь цели...'
                    sum={412}
                    endpoint={1502}
                    image='https://main-cdn.sbermegamarket.ru/big2/hlr-system/1485910/100000036507b1.jpg'
                />
                <ProjectCard 
                    name='Новая часть игры JEDI - JEDI Falen Order '
                    descript='Представляем захватывающую игру JEDI Falen Order, где вас ждут приключения, загадки, разнообразные задания и интересные персонажи. Путешествуйте по красочным локациям, проявляйте смекалку и находчивость, чтобы достичь цели...'
                    sum={412}
                    endpoint={1502}
                    image='https://main-cdn.sbermegamarket.ru/big2/hlr-system/1485910/100000036507b1.jpg'
                />
            </div>
        </div>
    )
}

export default AllProjects;