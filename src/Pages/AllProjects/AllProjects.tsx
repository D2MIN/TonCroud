import React from 'react';
import style from './AllProjects.module.scss';
import { ProjectCardList } from '../../Widgets/ProjectCardList/ProjectCardList.tsx';

function AllProjects(){
    return(
        <div className={style.AllProjectsPage}>
            <h1 className={style.title}>TonCroud проекты</h1>
            <div className={style.filters}>ПОИСК и ФИЛЬТРАЦИЯ</div>
            <div className={style.project_list_section}>
                <div className={style.project_list}>
                    <ProjectCardList/>
                </div>
            </div>
        </div>
    )
}

export default AllProjects;