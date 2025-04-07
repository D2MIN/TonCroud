import { useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import style from './TransactionButton.module.scss';
import React, { cache, useState } from 'react';
import { MdDownloadDone } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

interface PropsI{
    title : string,
    TonValue : number,
    setStatus : ( status )=> void
}

export function TransactionButton({title,TonValue, setStatus} : PropsI){
    
    const wallet = useTonWallet();
    const [tonConnectUI, setOptions] = useTonConnectUI();
    const [isSuccessSend, setIsSuccessSend] = useState<boolean | null>(null);


    async function sendTransaction(){
        if(wallet == null){
            alert('Кошелек не подключен')
        }else{
            let status;
            try{
                status = await tonConnectUI.sendTransaction({
                    validUntil: Date.now() + 5 * 60 * 1000,
                    messages: [
                        {
                            address : "0QD-SuoCHsCL2pIZfE8IAKsjc0aDpDUQAoo-ALHl2mje04A-",
                            amount: `${TonValue * 1_000_000_000}`
                        }
                    ]
                });
            }catch (error) {
                console.log(error);
            }
            if(status != undefined){
                setStatus(status);
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