import React from 'react';
import { ProjectCard } from '../../Entities/ProjectCard/ProjectCard.tsx';
import style from './ProjectCardList.module.scss';

export function ProjectCardList(){

    const project = <ProjectCard 
                        name='Новая часть игры JEDI - JEDI Falen Order '
                        descript='Представляем захватывающую игру JEDI Falen Order, где вас ждут приключения, загадки, разнообразные задания и интересные персонажи. Путешествуйте по красочным локациям, проявляйте смекалку и находчивость, чтобы достичь цели...'
                        sum={268}
                        endpoint={1390}
                        image='https://avatars.mds.yandex.net/i?id=0fb5feb07070e18b7b8dee91646b5f83_l-4277039-images-thumbs&n=13'
                    />;

    return(
        <div className={style.ProjectCardList}>
            <div className={style.project_list}>
                {project}
                {project}
                {project}
                {project}
                {project}
                {project}
                {project}
                {project}
                {project}
            </div>
        </div>
    )
}