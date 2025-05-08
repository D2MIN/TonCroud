import React, { ReactElement, useEffect, useRef, useState } from "react";
import style from './Statistic.module.scss';
import { GetAllUserProject } from "../BL/GetAllUserProject";
import { useTonAddress } from "@tonconnect/ui-react";
import { BarGrafic } from "../Grafics/BarGrafic";


function Statistic(){

    const address = useTonAddress();
    const [status, setStatus] = useState<string>('Pending');
    const [optionsList, setoptionsList] = useState<ReactElement[]>();
    
    const [selectedProject, setSelectedProject] = useState<string>('');
    const [donations, setDonations] = useState<string>('');

    const canvas = useRef(null);
    const BarChar = useRef<any>(null);

    useEffect(()=>{
        if(status == 'succsess'){
            if(BarChar.current){
                BarChar.current.destroy();
            };

            // Сделать проверку даты и сумировать для кадого месяца
            BarChar.current = BarGrafic(canvas.current, donations[selectedProject].values);

            return ()=>{
                if(BarChar.current){
                    BarChar.current.destroy();
                };
            };
        }
    }, [status, selectedProject]);

    useEffect(()=>{
        try {
            async function get(){
                const result = await GetAllUserProject(address);
                const projects : string[] = result.projects;
                const donations = result.donations;
                
                if(projects && projects.length > 0 ){
                    let options : ReactElement[] = [];
                    projects.forEach(project => {
                        setoptionsList(options);
                        options.push(
                            <option key={project} value={project}>{project}</option>
                        )
                    });
                    setoptionsList(options);
                    setSelectedProject(projects[0])
                    setDonations(donations);
                    setStatus('succsess');
                }
            }
            get();
        } catch (error) {
            console.log('Ошибка')
            setStatus('Error')
        }
    }, [address]);

    return(
        <div className={style.StatisticPage}>
            <div className={style.wrapper}>
                <div className={style.title}>
                    <h1>Статистика проектов</h1>
                </div>
                <div className={style.select_project_section}>
                    <p>Выберите ваш проект</p>
                    <select 
                        className={style.select}
                        id="project"
                        name="project"
                        onChange={(e) => setSelectedProject(e.target.value)}
                    >
                        {optionsList || <option>Пока нет проектов</option>}
                    </select>
                </div>
                <div className={style.canvas_wrapper}>
                    <div className={style.canvas}>
                        <canvas ref={canvas}></canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistic;