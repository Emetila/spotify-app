import './HeroSection.css'
import { Component } from 'react'

export const HeroSection = () => {
    return (<header className='hero-section'>
        <div className="text">
        <h1>Get Premium free for 1 month</h1>
        <h2>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime</h2>
        </div>

        <div className='button'>
            <button className='primary'>GET STARTED</button>
            <button className='secondary'>SEE OTHER PLANS</button>
        </div>

        <div className="link">
        <a href='#/Terms-and-condition'>Terms and conditions apply</a>
        <p>1 month free not available for users who have already tried Premium</p>
        </div>
    </header>
    )
}