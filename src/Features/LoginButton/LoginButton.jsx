import { useEffect, useState } from 'react';
import style from './LoginButton.module.scss';
import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';
import { CreateUser } from './BL/CreateUser';

export function LoginButton() {

    const [tonConnectUI, setOptions] = useTonConnectUI();
    const [adress, setAdress] = useState('...');
    const [isVisibleOptions, setIsVisibleOptions] = useState(false)
    const [isCopy, setIsCopy] = useState(false);

    const [conneted, setConnected] = useState(false);
    let userFriendlyAddress = useTonAddress();

    const onClick = async () => {
        try {
            if(userFriendlyAddress == ''){
                await tonConnectUI.openModal();
                tonConnectUI.onStatusChange( wallet => {
                    if(wallet){
                        setConnected(true);
                    }else{
                        setConnected(false);
                    }
                })
            }
            if(userFriendlyAddress != ''){
                setIsVisibleOptions(!isVisibleOptions);
            }
        } catch (error) {
            console.log('Error in connect')
        }
    }

    const exit = async () => {
        setIsVisibleOptions(false);
        await tonConnectUI.disconnect();
    }
    
    const copyAdress = async ()=> {
        navigator.clipboard.writeText(userFriendlyAddress);
        setIsCopy(true);
        setTimeout(()=>{
                setIsCopy(false);
        }, 1000);
    }

    useEffect(()=>{
        try{
            let len = userFriendlyAddress.length;
            if(len && conneted == true){
                CreateUser(userFriendlyAddress);
            }
        }catch(error){
            console.log('Error', error)
        }
    }, [userFriendlyAddress]);

    useEffect(()=>{
        let len = userFriendlyAddress.length;
        if(len){
            setAdress(userFriendlyAddress.slice(0,4) + '...' + userFriendlyAddress.slice(len-4,len))
        }
    }, [userFriendlyAddress])

    return (
        <div className={style.login_section}>
            <button onClick={onClick} className={style.button}>{userFriendlyAddress ? adress : 'Войти'}</button>
            <label className={style.loginButton}>
                {isVisibleOptions && 
                    <div className={style.suportButtons}>
                        <button 
                            className={`${style.copyAdress} ${isCopy ? style.copyAnimation : ''}`}
                            onClick={copyAdress}
                            disabled={isCopy}
                        >
                            Копировать
                        </button>
                        <button 
                            className={style.exit}
                            onClick={exit}
                        >
                            Выйти
                        </button>
                    </div>
                }
            </label>
        </div>
    );
}