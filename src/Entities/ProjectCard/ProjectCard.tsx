import React from 'react';
import style from './ProjectCard.module.scss';
import { Link } from 'react-router-dom';

interface ProjectCardPropsI{
    id : number
    image : string,
    name : string,
    descript : string,
    sum : number,
    endpoint : number
}

export function ProjectCard( props : ProjectCardPropsI){

    return(
        <div className={style.ProjectCard_wrapper}>
                <Link to={`/project/${props.id}`}>
                    <div className={style.ProjectCard}>
                        <div className={style.project_image}>
                            <img src={props.image} alt="Фото проекта" />
                        </div>
                        <div className={style.project_name}>
                            {props.name}
                        </div>
                        <div className={style.project_descript}>
                            {props.descript}
                        </div>
                        <div className={style.progersbar}>
                            <progress value={props.sum} max={props.endpoint}></progress>
                        </div>
                        <div className={style.project_total}>
                            <div className={style.total_sum}>
                                Собранно <strong> {Math.floor(props.sum)} TON </strong>
                            </div>
                            <div className={style.total_procent}>
                                <strong>{Math.floor(props.sum / (props.endpoint / 100))} %</strong>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
    )
}