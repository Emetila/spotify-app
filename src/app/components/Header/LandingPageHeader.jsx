import './LandingPageHeader.css'
import {Logo} from './Logo'
import { HeaderNavigation } from './HeaderNavigation'

export const LandingPageHeader = () => {
    return (<header className='header'>
        <div className="logo">
            <Logo useWhite={true} />
        </div>
        <div className="menu">
            <HeaderNavigation />
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