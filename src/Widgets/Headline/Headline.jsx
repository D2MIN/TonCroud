import { LoginButton } from '../../Features/LoginButton/LoginButton';
import style from './Headline.module.scss';

export function Headline(){
    return(
        <div className={style.headline_section}>
            <div className={style.headline_1}>Есть идея ?</div>
            <div className={style.headline_2}>Поделись !</div>
            <div className={style.headline_3}>Тогда люди помогут реализовать её</div>
            <LoginButton/>
        </div>
    );
}