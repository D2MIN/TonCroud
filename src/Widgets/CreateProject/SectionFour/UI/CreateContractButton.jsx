import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';
import { use, useEffect, useState } from "react";
import style from './CreateContractButton.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';


export function CreateContractButton({setTransactionStatus}){


    const [tonConnectUI, setOptions] = useTonConnectUI();
    const userFriendlyAddress = useTonAddress();
    const projectState = useSelector(state => state.project);

    const [endDate, setEndDate] = useState(timestampData(projectState.date));
    const [totalSum, setTotalSum] = useState(projectState.totalSum);
    const [address, setAdress] = useState(userFriendlyAddress);
    
    function timestampData(dateStr) {
      const date = new Date(dateStr);
      return date.getTime(); // Формат в милисикундах ( для секунд надо поделить на 100)
    }

    const deploy = async ()=>{
        try {
            if(userFriendlyAddress == ''){
                await tonConnectUI.openModal();
            }
            else{
                setAdress(userFriendlyAddress);

                const result = await fetch('http://localhost:7777/api/contract/deploy', {
                    method: 'POST',
                    headers : {
                        'Content-type' : 'application/json',
                    },
                    body : JSON.stringify({
                        endDate : endDate,
                        totalSum : totalSum,
                        address : address,
                    })
                });
    
                const { tx } = await result.json();
                console.log(tx)
                
                if(tx){
                    const transRes =  await tonConnectUI.sendTransaction(tx);
                    setTransactionStatus(transRes);
                }
            }
        } catch (error) {
            console.log(error);   
        }
    };

    return(
        <div className={style.CreateContractButton}>
            <button onClick={() => deploy()}>
                Создать проект
            </button>
        </div>
    )
}