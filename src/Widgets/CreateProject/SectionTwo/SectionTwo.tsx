import { useDispatch } from 'react-redux';
import style from './SectionTwo.module.scss';
import React, { useState } from 'react';
import { setBigDescription } from '../../../Store/AllSlices/projectSlice';

interface sectionPropsI{
    setNumberSection : (section: string) => void
}

export function SectionTwo({setNumberSection}:sectionPropsI){
    
    const dispatch = useDispatch();
    const [fullDescript, setFullDescript] = useState<string>('');

    const changeSection = ()=>{
        if(fullDescript.replaceAll(' ', '') != ''){
            dispatch(setBigDescription(fullDescript));
            setNumberSection('3');
        }
        else{
            alert('Вы заполнили форму не правильно !');
        }
    }

    return(
        <div className={style.SectionTwo}>
            <div className={style.title}>
                <h1>Полное описание проекта</h1>
                <h1 className={style.counter_page}>2/3</h1>
            </div>
            <div className={style.full_descript}>
                <p>Полное описание проекта</p>
                <textarea 
                    onChange={(e)=>setFullDescript(e.target.value)}
                    placeholder="Полное описание"
                />
            </div>
            <button 
                className={style.continue_btn}
                onClick={()=>changeSection()}
            >
                Продолжить
            </button>
        </div>
    );
}