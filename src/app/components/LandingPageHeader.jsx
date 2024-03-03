import './LandingPageHeader.css'
import { Component } from 'react'

export class LandingPageHeader extends Component {
    constructor(){
        super()
    }
    render(){
        return (<header className='header'>
            <div className='logo'>/</div>
            <div className='menu'>
                <li>Premium</li>
                <li>Support</li>
                <li>Download</li>
                <li>Sign up</li>
                <li>Log in</li>
            </div>
        </header>)
    }
}