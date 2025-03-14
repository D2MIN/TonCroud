import style from './ProjectRewards.module.scss';
import React from 'react';

interface reward{
    name : string,
    count : number,
    descript : string,
    sum : number
}

interface Rewards{
    rewards : reward[],
}

export function ProjectRewards(){

    return(
        <div className={style.projectRewards}>
            <table className={style.reward}>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Название 1</td>
                        <td><strong>10 TON</strong></td>
                    </tr>
                    <tr>
                        <td>Название 2</td>
                        <td><strong>20 TON</strong></td>
                    </tr>
                    <tr>
                        <td>Название 3</td>
                        <td><strong>50 TON</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}