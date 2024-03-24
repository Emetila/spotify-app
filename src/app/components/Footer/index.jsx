import style from './style.module.css'
import { ReactComponent as Facebook } from "../../assets/footericon/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/footericon/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/footericon/twitter.svg";
import { ReactComponent as EarthIcon } from "../../assets/footericon/earth.svg";
import Logo from '../Logo/Logo';
import { companyMenu, communitiesMenu, usefulLinkMenu, legalUrls } from './data';

export default function Footer () {
    return (<footer className={style.footer}>
        <div className={style.menu}>
            <div>
                <div>
                    <Logo useWhite/>
                </div>
                <div className={style.flex}>
                    <Menu title="Company" options={companyMenu} />
                    <Menu title="Communities" options={communitiesMenu} />
                    <Menu title="Useful Links" options={usefulLinkMenu} />
                </div>
            </div>
            <div className={style['legal-urls']}>
                {
                   legalUrls.map(({ url, name}) => <a href={url}>{name}</a>)
                }
            </div>
        </div>

        <div className={style.copyright}>
            <div className={style.social}>
                <Instagram />
                <Twitter />
                <Facebook />
            </div>
            <div className={style.copy}>
                <p><EarthIcon />India (English)</p>
                <p>© 2023 Spotify AB</p>
            </div>
        </div>
    </footer>)
}

export const Menu = ({ title, options}) => {
    return (<nav className={style.nav}>
        <h5>{title || <>&nbsp;</>} </h5>
        <ul>
        {
            options && options.map((option)=>{
                return (<li><a href={option.url}>{option.name}</a></li>)
            })
        }
        </ul> 
    </nav>)
}