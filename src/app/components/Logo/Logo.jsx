
import SpotifyBlack from '../../assets/images/spotify-white.png'
import SpotifyWhite from '../../assets/images/spotify-black.png'
import style from "./style.module.css"

export function Logo(props) {
    // //props.useWhite
    // if (props.useWhite) {
    const myImage = props.usewhite ? SpotifyWhite : SpotifyBlack  
    return (
            <a href='#/dasboard' className= {style.logo}>
                <img src={myImage} />   
            </a>
        )
    // } else {
    //     return (
    //         <a href='#/dasboard'>
    //             <img src={SpotifyBlack} />
    //         </a>
    //     )
    // }
}

export function NaviagtionLogoText () {
    return (<h1> Spotify </h1>)
}