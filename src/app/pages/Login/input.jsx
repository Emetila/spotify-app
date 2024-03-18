import style from './input.style.module.css'
import {ReactComponent as EyeIcon} from '../../assets/icons/eye-icon.svg'

export const CustomInput = (props) => {
    return (<>
    <div className={style['input']}>
        {/* <label>"Email address or username"</label> */}
        <input {...props} className={style['input-field']} />
        {/* <EyeIcon /> */}
    </div>
    </>)
}