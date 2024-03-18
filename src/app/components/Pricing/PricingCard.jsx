import { CustomButton } from "../Button"

export const PricingCardItem = () => {
    return (
        <div>
            <div>
                <span>1 month free</span>
                <span>One-time plans available</span>
                <h4>Individual</h4>
                <p>₹119/month after offer period</p>
                <p>1 account </p>
            </div>
            <div>
                <ul>
                    <l1>Ad-free music listening</l1>
                    <l1>Group Session</l1>
                    <l1>Download 10k songs/device on 5 devices</l1>
                </ul>
                <CustomButton View plan />
    
            </div>
            <p>Terms and conditions apply. 1 month free not available for users who have already tried Premium.</p>
        </div>
    )
}