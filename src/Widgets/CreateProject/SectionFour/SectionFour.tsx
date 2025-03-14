import React from "react";
import style from './SectionFour.module.scss';
import { useSelector } from "react-redux";
import { TransactionButton } from "../../../Features/TransactionButton/TransactionButton.tsx";

interface ProjectState {
    name: string;
    image: string;
    smallDescript: string;
    totalSum: number;
    date: string;
    bigDescript: string;
    rewards: string[];
}

interface RootState {
    project: ProjectState; 
}

export function SectionFour(){

    const project = useSelector((state : RootState) => state.project);

    console.log(project.rewards);
    return (
        <div className={style.SectionFour}>
            <h1>Ваш проект</h1>
            <h1 className={style.projectName}>
                {project.name}
            </h1>
            <p className={style.smallDescript}>
                {project.smallDescript}
            </p>
            <div>
                <img src={project.image} alt={project.name} />
            </div>
            <p className={style.bigDescript}>
                {project.bigDescript}
            </p>
            <div className={style.info}>
                <p className={style.sum}>Сумма сбора: <strong>{project.totalSum}</strong></p>
                <p className={style.date}>Время сбора: <strong>{project.date}</strong></p>
            </div>
            <div className={style.rewards}>    
                <ul>
                    <li>
                        <p>Название</p>
                        <p>Описание</p>
                        <p>Колличество</p>
                        <p>Цена</p>
                    </li>
                    {project.rewards.map((reward, index) => (
                        <li key={index}>
                            <p>{reward.name}</p>
                            <p>{reward.descript}</p>
                            <p>{reward.count}шт</p>
                            <p>{reward.cell} Ton</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.button_section}>
                    <TransactionButton title = "Создать проект"/>
                    <p className={style.createSum}>Для создания нужно 0.218 TON</p>
            </div>
        </div>
    );
}