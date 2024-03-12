import './LandingPageHeader.css'
import React from 'react'
import {Logo} from '../Logo/Logo'
import {ReactComponent as Menuicon} from '../../assets/icons/menu.svg'
import { HeaderNavigation } from './HeaderNavigation'

function useState(initialValue) {
    let val = initialValue
    function change(newValue) {
        val = newValue
    }

    return [val, change]
}
export const LandingPageHeader = () => {
    const [showMenu, setMenu] = React.useState(false);

    const toggleMenu = () => {
        setMenu(showMenu === false)
    }
    
    return (<header className='header'>
        <div className="logo">
            <Logo useWhite={true} />
        </div>
        <Menuicon className='menu-icon' onClick={toggleMenu} fill='white' />
        <div className='menu'>
            <HeaderNavigation className={showMenu ? 'mobile' : ''} />
        </div>
    </header>)
}


// export class LandingPageHeader extends Component {
//     constructor() {
//         super()
//     }
//     render(){
//         return (<header className="header">
//             <div className="logo"> Logo </div>
//             <div className="menu"> menu </div>
//         </header>)
//     }
// }