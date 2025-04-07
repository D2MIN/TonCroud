import React, { useEffect, useState } from "react";
import style from './SectionFour.module.scss';
import { useSelector } from "react-redux";
import { TransactionButton } from "../../../../Features/TransactionButton/TransactionButton.tsx";
import { CreateProject } from "../BL/CreateProject.ts";
import { useNavigate } from "react-router-dom";


interface rewardI{
    name : string,
    descript : string,
    count : string,
    cell : string,
}

interface ProjectState {
    name: string;
    image: string;
    smallDescript: string;
    totalSum: number;
    date: string;
    bigDescript: string;
    rewards: rewardI[];
}

interface RootState {
    project: ProjectState; 
}

export function SectionFour(file : File){

    const project : ProjectState = useSelector((state : RootState) => state.project);
    const [transactionStatus, setTransactionStatus] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        if(transactionStatus?.boc){
            CreateProject(project,file);
            navigate('/')
        }
    },[transactionStatus]);

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
                    <TransactionButton setStatus={setTransactionStatus} TonValue = {0.1} title = "Создать проект"/>
                    <p className={style.createSum}>Для создания нужно 0.218 TON</p>
            </div>
        </div>
    );
}