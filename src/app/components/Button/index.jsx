export const CustomButton = (props) => {
    const classNames = {
        primary: 'btn',
        outline: 'btn-outline',
        secondary: 'btn-secondary'
    }
    const className = classNames [props.type] || classNames.primary
    return (
        props.onClick ? <button className={className}>See Other Plans</button> 
            : 
        <a href="#"className={className}>{props.title}</a>   
    )
}