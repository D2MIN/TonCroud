import style from './ProjectAmount.module.scss';
import React from 'react';

interface AmountPropsI{
    tottal : number,
    procent : number
}

export function ProjectAmount({tottal,procent} : AmountPropsI){
    return(
        <>
            <div className={style.projectAmount}>
                <div className={style.line}>
                    <input type="range" min={0} max={100} defaultValue={73}/>
                </div>
                <div className={style.amountInfo}>
                    <p>Собрано: <strong>{tottal} TON</strong></p>
                    <p><strong>{procent}%</strong></p>
                </div>
            </div>
        </>
    );
}