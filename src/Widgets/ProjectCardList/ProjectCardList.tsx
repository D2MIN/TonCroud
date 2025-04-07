import React, { ReactElement, useEffect, useState } from 'react';
import { ProjectCard } from '../../Entities/ProjectCard/ProjectCard.tsx';
import style from './ProjectCardList.module.scss';

export function ProjectCardList(){

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [status, setStatus] = useState<number>(500);
    const [data, setData] = useState();
    const [projectList, setProjectList] = useState<ReactElement[]>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:7777/api/project/all');
                if(!res.ok){
                    setStatus(res.status)
                    throw new Error(`HTTP Error! Status: ${res.status} Massage : ${res.json()}`);
                }
                const result = await res.json();
                setData(result);
            } catch (error) {
                setError(true);
            }finally{
                setLoading(false);
            }
        }
        if(data == undefined){
            fetchData();
        }else{
            createprojectList();
        }
    },[data]);

    const createprojectList = () => {
        if(data != undefined){
            const list : ReactElement[]= [];
            data.forEach(project => {
                list.push(
                    <div className={style.project_list_div} key = {project.id}>
                        <ProjectCard 
                            id = {project.id}
                            name = {project.name}
                            descript = {project.description_small}
                            sum = {project.current_sum}
                            endpoint = {project.sum}
                            image = {project.img}
                        />
                    </div>
                )
            });
            setProjectList(list)
        }
    }


    if (loading) return <h1>Загрузка ...</h1>
    if(status != 500) return <h1>Данных еще нет :( </h1>
    if (error) return <h1>Простите, но сервер сейчас недоступен</h1>
    
    return(
        <div className={style.ProjectCardList}>
            <div className={style.project_list}>
                {data && projectList }
            </div>
        </div>
    )
}