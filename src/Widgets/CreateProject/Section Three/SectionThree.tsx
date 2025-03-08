import style from './SectionThree.module.scss';
import React, {useState } from 'react';

export function SectionTree(){

    const [name, setName] = useState<string>('');
    const [descript, setDescript] = useState<string>('');
    const [count, setCount] = useState<number>()

    const [countFlag, setCountFlag] = useState<boolean>(false);
    const [rewards, setRewards] = useState<React.JSX.Element[]>([]);

    
    // ДОДЕЛАТЬ УДАЛЕНИЕ ЭЛЕМЕНТА (ПОЧЕМУ ТО  reward РАЗМЕРА index)
    const removeElement = (key : number) => {
        setRewards(rewards.filter((element) => Number(element.key) !== key));
      };

    function add_reward(){
        let rewardList = [...rewards];
        let key = Date.now() + Math.random();
        if (name.replaceAll(' ', '') != '' && descript.replaceAll(' ', '') != '' && (count || countFlag == true)) {
            rewardList.push(
                <div key={key} className={style.reward}>
                    <div>
                        <p>{name}</p>
                        <p>{countFlag ? 'Не ограничено' : count + 'шт'}</p>
                    </div>
                </div>
            );
        }else{
            alert('Вы заполнили форму не правильно !');
        }
        setRewards(rewardList);
    }

    return(
        <div className={style.SectionThree}>
            <div className={style.title}>
                <h1>Вознаграждения проекта</h1>
                <h1 className={style.counter_page}>3/3</h1>
            </div>
            <div className={style.name_reward}>
                <p>Название вознаграждения</p>
                <input
                    type="text"
                    className={style.name}
                    placeholder='Название'
                    value = {name}
                    onChange={(e)=>{
                        if(e.target.value.length < 20) setName(e.target.value)
                    }}
                />
            </div>
            <div className={style.descript_reward}>
                <p>Описание вознаграждения</p>
                <input
                    type="text"
                    className={style.descript}
                    placeholder='Описание'
                    value = {descript}
                    onChange={(e)=>setDescript(e.target.value)}
                />
            </div>
            <div className={style.count_reward}>
                <p>Количество вознаграждения</p>
                <div className={style.count_reward_section}>
                    <input
                        disabled = {countFlag}
                        type="number"
                        className={style.count}
                        placeholder='200'
                        value = {countFlag ? 0 : count}
                        onChange={(e)=> {
                            if(Number(e.target.value) >= 0) setCount(Number(e.target.value))
                        }}
                    />
                    <label>
                        <input 
                            type="checkbox"
                            name="unlimit"
                            onClick={()=>setCountFlag(!countFlag)}
                        />
                        <p>Не ограничено</p>
                    </label>
                </div>
            </div>
            <div className={style.button_section}>
                <button 
                    className={style.add_button}
                    onClick={()=>add_reward()}
                >
                    Добавить
                </button>
                <button className={style.sub_button}>
                    Завершить заполнение
                </button>
            </div>
            <div className={style.all_reward_section}>
                {rewards.length > 0 ?
                <p>Добавленные вознаграждения</p>
                : <p>Вознаграждения отсутствуют</p>
                }
                <div className={style.all_reward}>
                    {rewards.map((el) => (
                        <div className={style.element} key={el.key}>
                            {el}
                            <button className={style.del_button} onClick={() => removeElement(Number(el.key))}>
                            Удалить
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
