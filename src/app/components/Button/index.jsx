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
    return (
        props.onClick ?
        <button onClick= {props.onClick} className={className}>
            {props.children}
        </button> 
            : 
        <a href="#"className={className}>{props.title}</a>   
    )
}