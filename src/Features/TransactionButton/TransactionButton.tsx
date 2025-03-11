import { useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import style from './TransactionButton.module.scss';
import React, { cache } from 'react';

interface PropsI{
    title : string,
}

export function TransactionButton({title} : PropsI){
    
    const wallet = useTonWallet();
    const [tonConnectUI, setOptions] = useTonConnectUI();


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
                            amount: '218000000'
                        }
                    ]
                });
            }catch (error) {
                // console.log(error);
            }
            console.log(status);
        }
    }

    return(
        <div className={style.TransactionButton}>
            <button
                onClick={sendTransaction}
            >
                {title}
            </button>
        </div>
    )
}