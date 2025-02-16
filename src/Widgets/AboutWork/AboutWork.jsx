import { useState } from 'react';
import style from './AboutWork.module.scss';

export function AboutWork(){

    const [investorInfo, setInvestorInfo] = useState('close');
    const [creatorInfo, setCreatorInfo] = useState('cloce');

    return(
        <div className={style.aboutWork_section}>
            <div className={style.about_title}>
            </div>
            <div className={style.about_lists_section}>
                <div className={style.creator_list_section}>
                        <h1 className={style.creator_title}>Для тех кто хочет создать проект</h1>
                    <ul className={`${style.cretor_list} ${style.investorInfo}`}>
                        <li>1. Вы должны войти в систему через свой Blockchaine кошелек, который может работать с TON.</li>
                        <li>2. Перейдите на страницу создания проекта.</li>
                        <li>3. На странице создания проекта укажите необходимую информацию о будующем проекте.</li>
                        <li>4. После заполнения данных о проекте подтвердите создание проекта. После чего с вашего Blockchane кошелька спишется сумма необходимая на хранение проекта в сети TON.</li>
                        <li>5. Дальше в разделе статистики можно отслеживать состояние вашего проекта.</li>
                    </ul>
                </div>
                <div className={style.investor_list_section}>
                        <h1 className={style.creator_title}>Для тех кто хочет помочь проекту</h1>
                    <ul className={`${style.cretor_list} ${style.investorInfo}`}>
                        <li>1. Вы должны войти в систему через свой Blockchane кошелек который может работать с TON.</li>
                        <li>2. Перейдите на страницу просмотра проектов.</li>
                        <li>3. Выберите понравившейся вам проект и изучите информацию о нем.</li>
                        <li>4. Дальше можете отправить транзакцию по кнопке "Отправить транзакцию" и профинансировать проект</li>
                        <li>5. После поддержки проекта вы можете получить награду в соответсвии с установлеными правилами</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}