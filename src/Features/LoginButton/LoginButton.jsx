import style from './LoginButton.module.scss';

export function LoginButton(){
    return(
        <div className={style.login_section}>
            {/* Заменить на авторизацию TON */}
            <button className={style.button}>Войти</button>
        </div>
    );
}