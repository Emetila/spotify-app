import { CustomButton } from "../Button"
import style from './style.module.css'

export const PricingCardItem = () => {
    return (
        <div className={style.card}>
            <div className={style.header}>
                <span className={style.free}>1 month free</span>
                <br />
                <span className={style['one-time']}>One-time plans available</span>
                <h4 className={style.planName}>Individual</h4>
                <p>₹119/month after offer period</p>
                <p>1 account </p>
            </div>
            <div>
                <ul>
                    <l1>Ad-free music listening</l1>
                    <l1>Group Session</l1>
                    <l1>Download 10k songs/device on 5 devices</l1>
                </ul>
                <CustomButton onClick={()=>{}}>
                    View plan
                </CustomButton>
    
            </div>
            <div className={style.footer}>Terms and conditions apply. 1 month free not available for users who have already tried Premium.</div>
        </div>
    )
}