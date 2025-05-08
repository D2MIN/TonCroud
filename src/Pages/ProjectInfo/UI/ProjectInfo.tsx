import { TransactionButton } from '../../../Features/TransactionButton/TransactionButton.tsx';
import { ProjectAmount } from '../../../Widgets/ProjectInfo/ProjectAmount/ProjectAmount.tsx';
import { ProjectRewards } from '../../../Widgets/ProjectInfo/ProjectRewards/UI/ProjectRewards.tsx';
import { ProjectTitles } from '../../../Widgets/ProjectInfo/ProjectTitles/ProjectTitle.tsx';
import style from './ProjectInfo.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetData } from '../BL/GetData.js';

interface DataI{
    id : number,
    name : string,
    description_small : string,
    description_full : string,
    img : string,
    sum : number,
    current_sum : number,
    date : string
}

function ProjectInfo(){
    const {id} = useParams();
    const currentId = useRef('-1')
    const [data, setData] = useState<DataI>();
    const [loading, setLoading] = useState<boolean>(true);
    const [isPopup,setPopap] = useState<boolean>(false);
    const [TonValue,setTonValue] = useState<number>(0);
    const [status, setStatus] = useState(false);

    function getDay(date){
        const targetDate = new Date(date);
        const currentDate = new Date();
        const diffInMs = targetDate - currentDate;
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        return diffInDays;
    }

    useEffect(()=>{
        async function getData(){
            try {
                const answer = await GetData(id);
                if(answer){
                    setData(answer.data);
                    setLoading(false);
                }
            } catch (error) {
                console.log("Error : ", error);
            }
        }
        if(id){
            currentId.current = id;
        }
        getData();
    }, [id]);
 
    return(
        data ? 
            <div className={style.ProjectInfoPage}>
                <div className={style.conteiner}>
                    <ProjectTitles 
                        name={data.name} 
                        descript={data.description_full} 
                        img={data.img} 
                        date={data.date.slice(0,10)} 
                        days={getDay(data.date)}
                    />
                    <ProjectAmount tottal={data.sum} current={data.current_sum} procent={data.current_sum / (data.sum / 100)}/>
                    <ProjectRewards />
                    <div className={style.PaySection}>
                        {isPopup ? 
                            <div className={style.PopupSection}>
                                <div className={style.Popup}>
                                    <div className={style.inputSection}>
                                        <p>Введите сумму пожертвования</p>
                                        <input onChange={e => setTonValue(Number(e.target.value))} type="number" placeholder='50'/>
                                    </div>
                                    <div className={style.buttonSection}>
                                        <TransactionButton TonValue={TonValue} title = "Отправить" projectId={currentId.current}/>
                                        <button 
                                            className={style.closeButton}
                                            onClick={() => setPopap(false)}
                                            >
                                                Закрыть
                                        </button>
                                    </div>
                                </div>
                                <div onClick={() => setPopap(!isPopup)} className={style.backPopap}></div>
                            </div>
                            : ''
                        }
                        <div className={style.payButton}>
                            <button
                                onClick={() => setPopap(!isPopup)}
                            >
                                    Поддержать проект
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        :
        <div> Error </div>
    );
}

export default ProjectInfo;