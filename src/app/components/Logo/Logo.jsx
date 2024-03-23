
import SpotifyBlack from '../../assets/images/spotify-black.svg'
import SpotifyWhite from '../../assets/images/spotify-white.svg'
import style from "./style.module.css"

export function Logo(props) {
    //props.useWhite
    if (props.useWhite) {
    const myImage = props.usewhite ? SpotifyBlack : SpotifyWhite 
    return (
            <a href='#/dasboard' className= {style.logo}>
                <img src={myImage} />   
            </a>
        )

    } else {
        const myImage = props.useBlack ? SpotifyWhite : SpotifyBlack 
        return (
            <a href='#/dasboard' className= {style.logo}>
                <img src={myImage} />   
            </a>
        )
    }
}

export function NaviagtionLogoText () {
    return (<h1> Spotify </h1>)
}

export default Logo