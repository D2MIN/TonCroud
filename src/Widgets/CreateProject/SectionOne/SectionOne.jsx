import React, { useEffect, useState } from "react";
import style from './SectionOne.module.scss';

export function SectionOne(){
    const [img, setImg] = useState(null);
    const [prevImg, setPrevImg] = useState('');
    const [about, setAbout] = useState('');
    const [aboutError, setAboutError] = useState(false);

    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        console.log(file)
        if(file){
            setImg(file);
            setPrevImg(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        if(about.length > 230){
            setAboutError(true);
            console.log("error")
        }
        if(about.length < 230 && aboutError == true){
            setAboutError(false);
        }
    }, [about])

    return(
        <div className={style.SectionOne}>
            <div className={style.title}>
                <h1>Основные данные проекта</h1>
                <h1 className={style.counter_page}>1/3</h1>
            </div>
            <div className={`${style.project_name} ${style.section}`}>
                <p>Название проекта</p>
                <input type="text" placeholder="Название"/>
            </div>
            <div className={`${style.project_img} ${style.section}`}>
                <p>Фото проекта</p>
                <label htmlFor="fileInput">Выбрать файл
                    {prevImg && <img src={prevImg}></img>}
                </label>
                <input
                    onChange={(e)=>handleImageChange(e)}
                    type="file" id="fileInput"
                />
            </div>
            <div className={`${style.project_smalldescript} ${style.section}`}>
                <p>Краткое описание проекта</p>
                {aboutError && <p className={style.error_title}>Краткое описание должно быть меньше 230 символов</p>}
                <textarea
                    className={aboutError ? style.error : style.anerror}
                    onChange={(e)=>setAbout(e.target.value)} 
                    type="text" placeholder="Описание с краткой информацией"
                />
            </div>
            <div className={`${style.project_sum} ${style.section}`}>
                <p>Финансовая цель</p>
                <input type="number" placeholder="154.16"/>
            </div>
            <div className={`${style.project_date} ${style.section}`}>
                <p>Срок сбора средств</p>
                <input type="date" placeholder="12.07.2025"/>
            </div>
            <button className={style.continue_btn}>Продолжить</button>
        </div>
    );
}