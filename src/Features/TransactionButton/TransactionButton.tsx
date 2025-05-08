import { SendTransactionRequest, useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import style from './TransactionButton.module.scss';
import React, { cache, useState } from 'react';
import { MdDownloadDone } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface PropsI{
    title : string,
    TonValue : number,
    projectId : string,
}

export function TransactionButton({title,TonValue, projectId} : PropsI){
    
    const wallet = useTonWallet();
    const navigate = useNavigate();
    const [tonConnectUI, setOptions] = useTonConnectUI();
    const [isSuccessSend, setIsSuccessSend] = useState<boolean | null>(null);

    async function sendTransaction(){
        if(wallet == null){
            alert('Кошелек не подключен');
        }else{
            let status;
            try{

                const result = await fetch('http://localhost:7777/api/contract/payload', {
                    method: "POST",
                    headers : {"Content-type" : "application/json"},
                    body: JSON.stringify({
                        TonValue : TonValue,
                        'payloadAmount': 5,    // сколько хотим прибавить в контракте
                        address : "0QBui16XCF61MSWauIDpVFbKAOJmjLHRxXvXeqiN9dYaIu6l"
                        
                    })
                });

                const tx = await result.json();
                
                status =  await tonConnectUI.sendTransaction(tx);
                
            }catch (error) {
                console.log(error);
            }
            if(status != undefined){
                const result = await fetch(`http://localhost:7777/api/project/addTON/${projectId}/${TonValue}`, {
                    method: "POST"
                });
                setIsSuccessSend(true);
            }else{
                setIsSuccessSend(false);
            }
        }
    }

    function closePopap(){
        setIsSuccessSend(null);
    }

    return(
        <div className={style.TransactionButton}>
            {isSuccessSend != null ? 
                <div className={style.sendStatus}>
                    <div className={style.statusPopap}>
                        <div className={style.iconStatus}>
                            {isSuccessSend ? <MdDownloadDone/> : <IoMdClose /> }
                        </div>
                        <h4>{isSuccessSend ? 'Операция прошла успешно' : 'Операция не была успешной'}</h4>
                        <button
                            className={style.closePopapButton}
                            onClick={closePopap}
                            >
                            Закрыть
                        </button>
                    </div>
                    <div onClick={closePopap} className={style.backPopap}></div>
                </div>
            : ''    
            }
            <button
                onClick={sendTransaction}
            >
                {title}
            </button>
        </div>
    )
}