import SpotifyWhite from '../assets/images/spotify-white.png'
import SpotifyBlack from '../assets/images/spotify-black.png'


export function Logo(props) {
    //props.useWhite
    if (props.useWhite) {
        return (
            <a href='#/dasboard'>
                <img src={SpotifyWhite} />
            </a>
        )
    } else {
        return (
            <a href='#/dasboard'>
                <img src={SpotifyBlack} />
            </a>
        )
    }
}