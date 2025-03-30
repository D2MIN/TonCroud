import style from './ProjectAmount.module.scss';
import React from 'react';

interface AmountPropsI{
    tottal : number,
    current : number,
    procent : number
}

export function ProjectAmount({tottal,current,procent} : AmountPropsI){
    return(
        <>
            <div className={style.projectAmount}>
                <div className={style.line}>
                    <progress value={current} max={tottal} defaultValue={procent}/>
                </div>
                <div className={style.amountInfo}>
                    <p>Собрано: <strong>{current} TON</strong></p>
                    <p><strong>{procent}%</strong></p>
                </div>
            </div>
        </>
    );
}