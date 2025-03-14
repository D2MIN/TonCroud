import { TransactionButton } from '../../Features/TransactionButton/TransactionButton.tsx';
import { ProjectAmount } from '../../Widgets/ProjectInfo/ProjectAmount/ProjectAmount.tsx';
import { ProjectRewards } from '../../Widgets/ProjectInfo/ProjectRewards/ProjectRewards.tsx';
import { ProjectTitles } from '../../Widgets/ProjectInfo/ProjectTitles/ProjectTitle.tsx';
import style from './ProjectInfo.module.scss';
import React, { useState } from 'react';

function ProjectInfo(){

    let name = 'Genshin Impact';
    let descript = `Genshin Impact ― это захватывающая ролевая игра в жанре экшен с открытым миром, которая перенесёт вас в удивительный и разнообразный мир Тейват. В этой красочной вселенной ждут увлекательные приключения, захватывающие сражения, интересные головоломки и неожиданные открытия. В игре вы управляете командой из четырёх персонажей, каждый из которых обладает уникальными способностями и навыками. Вы можете свободно переключаться между ними во время боя, чтобы использовать их сильные стороны и преодолевать разнообразные препятствия. Мир Тейват полон опасностей и загадок, и вам предстоит исследовать его, выполняя разнообразные задания и миссии. Вы встретите множество интересных персонажей, с которыми можно будет подружиться или вступить в конфликт. Основные особенности игры: Открытый мир. Мир Тейват ― это огромная территория, полная разнообразных локаций: от горных вершин и лесов до пустынь и морских просторов. Вы сможете исследовать его, открывая новые места, выполняя задания и сражаясь с врагами. Сюжетная кампания. В игре есть увлекательная сюжетная кампания, которая познакомит вас с миром Тейват и его обитателями. Вы будете выполнять разнообразные задания, сражаться с врагами и раскрывать тайны этого мира. Система элементов. В Genshin Impact есть система элементов, которая позволяет использовать стихии для решения головоломок, сражений и исследования мира. Вы сможете создавать комбинации из разных стихий, чтобы получить преимущество в бою или открыть новые возможности. Мультиплеер. Вы можете играть в Genshin Impact с друзьями, объединяясь в команды для совместного исследования мира, выполнения заданий и сражений. Графика и визуальные эффекты. Genshin Impact предлагает красивую графику и впечатляющие визуальные эффекты, которые создают уникальную атмосферу мира Тейват. Разнообразный геймплей. Игра имеет разнообразный геймплей, который включает в себя сражения, исследование мира, решение головоломок и выполнение заданий. Вы сможете использовать разные стили игры, чтобы получить максимальное удовольствие от прохождения. Genshin Impact ― это отличная игра для любителей ролевых игр, экшена и увлекательных приключений. Погрузитесь в мир Тейват и отправьтесь в незабываемое путешествие!`;
    const [isPopup,setPopap] = useState<boolean>(false);
    const [TonValue,setTonValue] = useState<number>(0);
    
    return(
        <div className={style.ProjectInfoPage}>
            <div className={style.conteiner}>
                <ProjectTitles name={name} descript={descript} img='https://avatars.mds.yandex.net/i?id=8d60bcdc8d4ca19390220f2e9a63e29b_l-5315305-images-thumbs&n=13' date='01.02.2025' days={125}/>
                <ProjectAmount tottal={356.7834} procent={73}/>
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
                                    <div onClick={() => setPopap(false)}>
                                        <TransactionButton TonValue={TonValue} title = "Отправить"/>
                                    </div>
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
    );
}

export default ProjectInfo;