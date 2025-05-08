import { Link, useRouteError } from "react-router-dom";
import style from "./ErrorPageStyle.module.scss";

export function ErrorPage(){
	const error = useRouteError();

	return(
		<div className={style.ErrorPage}>
			<div className={style.error_section}>
                <h1><strong>Oops!</strong></h1>
                <h2>Похоже данная страницы не доступна</h2>
                {error ?
                    <h2><strong>{error.status}</strong> {error.statusText}</h2>
                    :
                    <h2><strong>404</strong> Not Found</h2>
                }
            </div>
            <div>
                <Link to="/">
                    <button className={style.return_btn}>
                        Вернутся
                    </button>
                </Link>
            </div>
		</div>
	);
}
