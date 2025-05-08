import React, { ReactElement, useEffect, useRef, useState } from "react";
import style from './Statistic.module.css';
import { GetAllUserProject } from "../BL/GetAllUserProject";
import { useTonAddress } from "@tonconnect/ui-react";
import { BarGrafic } from "../Grafics/BarGrafic";


function Statistic(){

    const address = useTonAddress();
    const [status, setStatus] = useState<string>('Pending');
    const [optionsList, setoptionsList] = useState<ReactElement[]>();

    const canvas = useRef(null);
    const BarChar = useRef<any>(null);
    const data = useRef([10, 30,100, 280, 470, 230, 240, 390, 430, 210, 170, 460]);

    useEffect(()=>{
        if(status == 'succsess'){
            if(BarChar.current){
                BarChar.current.destroy();
            };

            BarChar.current = BarGrafic(canvas.current, data.current);

            return ()=>{
                if(BarChar.current){
                    BarChar.current.destroy();
                };
            };
        }
    }, [status]);
    
    useEffect(()=>{
        try {
            let projects :string[];
            async function get(){
                const result : string[] = await GetAllUserProject(address);
                projects = result;
                
                if(projects.length > 0 ){
                    setStatus('succsess');
                    let options : ReactElement[] = [];
                    projects.forEach(project => {
                        setoptionsList(options);
                        options.push(
                            <option key={options} value={project}>{project}</option>
                        )
                    });
                    setoptionsList(options);
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
                    <select className={style.select} id="project" name="project">
                        {optionsList || <option hidden value="ru">Пока нет проектов</option>}
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