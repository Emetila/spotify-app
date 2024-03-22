import { combineClasses } from "../../../utils/format"

export const CustomButton = (props) => {
    const classNames = {
        primary: 'btn',
        outline: 'btn-outline',
        secondary: 'btn-secondary',
        outline2: 'btn-outline2',
        facebookbtn: 'facebook-login',
        apple: 'apple-login',
        google: 'google-login',
    }
    const className = classNames [props.type] || classNames.primary
    const classes = (combineClasses(className, props.className))
    return (
        props.onClick ?
        <button onClick= {props.onClick} className={classes}>
            {props.children}
        </button> 
            : 
        <a href="#"className={classes}>{props.children}</a>   
    )
}