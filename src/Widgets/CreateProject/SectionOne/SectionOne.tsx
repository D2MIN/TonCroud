import React, { useEffect, useState } from "react";
import style from './SectionOne.module.scss';
import { useDispatch } from "react-redux";
import { setProjectDetails } from "../../../Store/AllSlices/projectSlice";

interface sectionPropsI{
    setNumberSection : (section: string) => void
}

export function SectionOne({setNumberSection} : sectionPropsI){

    const dispatch = useDispatch();
    const [img, setImg] = useState(null);
    const [prevImg, setPrevImg] = useState('');

    const [descript, setDescript] = useState<string>('');
    const [aboutError, setAboutError] = useState<boolean>(false);

    // Переделать на redux !!!
    const [name, setName] = useState<string>('');
    const [sum, setSum] = useState<number>(0);
    const [date, setDate] = useState<string>('');

    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        console.log(file)
        if(file){
            setImg(file);
            setPrevImg(URL.createObjectURL(file));
        }
    };

    const changeSection = ()=>{
        if(name.replaceAll(' ', '') != ''  && descript.replaceAll(' ', '') && sum > 0 && date != '' && img != ''){
            dispatch(setProjectDetails({
                name: name,
                image: prevImg,
                smallDescript: descript,
                totalSum: sum,
                date: date
            }));
            
            setNumberSection('2');
        }
        else{
            alert('Вы заполнили форму не правильно !');
        }
    }

    useEffect(() => {
        if(descript.length > 230){
            setAboutError(true);
            console.log("error")
        }
        if(descript.length <= 230 && aboutError == true){
            setAboutError(false);
        }
    }, [descript])

    return(
        <div className={style.SectionOne}>
            <div className={style.title}>
                <h1>Основные данные проекта</h1>
                <h1 className={style.counter_page}>1/3</h1>
            </div>
            <div className={`${style.project_name} ${style.section}`}>
                <p>Название проекта</p>
                <input 
                    onChange={(e)=>setName(e.target.value)}
                    type="text"
                    placeholder="Название"
                />
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
                    onChange={(e)=>setDescript(e.target.value)} 
                    placeholder="Описание с краткой информацией"
                />
            </div>
            <div className={`${style.project_sum} ${style.section}`}>
                <p>Финансовая цель</p>
                <label>
                    <p className={style.sumLable}>TON</p>
                </label>
                <input
                    className={style.sum}
                    onChange={(e)=>setSum(Number(e.target.value))}
                    type="number"
                    placeholder="154.16"
                />
            </div>
            <div className={`${style.project_date} ${style.section}`}>
                <p>Срок сбора средств</p>
                <input 
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    placeholder="12.07.2025"
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