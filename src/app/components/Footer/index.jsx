import style from './style.module.css'
import { ReactComponent as Facebook } from "../../assets/footericon/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/footericon/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/footericon/twitter.svg";
import { ReactComponent as EarthIcon } from "../../assets/footericon/earth.svg";
import Logo from '../Logo/Logo';

export default function Footer () {
    return (<footer className={style.footer}>
        <div className={style.menu}>
            <div>
                <Logo useWhite/>
            </div>
        </div>

        <div className={style.copyright}>
            <div className={style.social}>
                <Instagram />
                <Twitter />
                <Facebook />
            </div>
            <div>
                <p><EarthIcon />India (English)</p>
                <p>© 2023 Spotify AB</p>
            </div>
        </div>
    </footer>)
}