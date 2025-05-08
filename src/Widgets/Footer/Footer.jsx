import style from './Footer.module.scss';
import { IoIosMail } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";

export function Footer(){
    return(
        <div className={style.footer}>
            <div className={style.footer_content}>
                <div className={style.footer_section}>
                    <h3>Связь с нами</h3>
                    <div className={style.social_icons}>
                        <a target="_blank" href="https://web.telegram.org/k/#@graf_d2min"><FaTelegram/></a>
                        <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMSqRZVhZJRmMtWJVhzrcPhrrtGwHPFJRZSdMVbcgWnRcRQGWKFmcjzvbSzgXTTtWtCzdWS"><IoIosMail /></a>
                        <a target="_blank" href="https://vk.com/mychenic"><FaVk /></a>
                    </div>
                </div>
            </div>

            <div className={style.footer_bottom}>
                {/* <p>© 2025 TonCroud. Все права защищены.</p> */}
                {/* <a href="/privacy-policy">Политика использования</a> */}
            </div>
        </div>
    );
}