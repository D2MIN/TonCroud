import { useParams } from 'react-router-dom';
import style from './ProjectRewards.module.scss';
import React, { ReactElement, useEffect, useState } from 'react';
import { GetRewards } from '../BL/GetRewards';

interface reward{
    name : string,
    count : number,
    description : string,
    sum : number
}

interface Rewards{
    rewards : reward[],
}

export function ProjectRewards(){

    const [rewards, setRewards] = useState<Rewards>();
    const [loading, setLoading] = useState<boolean>(true);
    const [rewardList, setRewardList] = useState<ReactElement[]>();
    const {id} = useParams();

    function generateRewardList(){
        let rewardList : ReactElement[]= [];
        rewards.forEach(reward => {
            rewardList.push(
                <tr key={reward.id}>
                    <td>{reward.name}</td>
                    <td>{reward.description}</td>
                    <td><strong>{reward.cell}</strong></td>
                    <td>{reward.count == -1 ? "Не ограничено" : reward.count}</td>
                </tr>
            )
        });
        setRewardList(rewardList);
    }

    useEffect( () => {
        const fetchData = async ()=>{
            const result = await GetRewards(id);
            if(result != undefined){
                setLoading(false);
                setRewards(result);
            }
        }
        if(rewards == undefined){
            fetchData();
        }else{
            generateRewardList();
        }
    }, [rewards]);

    if(loading) return <h1>Загрузка</h1>
    if(rewards != undefined){
        return(
            <div className={style.projectRewards}>
                <table className={style.reward}>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Описание</th>
                            <th>Цена</th>
                            <th>Осталось</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rewardList}
                    </tbody>
                </table>
            </div>
        )
    }
}