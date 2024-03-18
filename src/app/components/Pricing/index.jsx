import { PricingCardItem } from "./PricingCard"
import { paymentMethods, pricingList } from "./data"

export const PricingSection = () => {
    const renderPaymentMethod = (method) => {
        if (method.icon) return <method.icon />
        return null
    }
    return (<section>
        <h1>Pick your Premium</h1>
        <p>Listen without limits on your phone, speaker, and other devices.</p>
        <div>
        {
            paymentMethods.map(renderPaymentMethod)
        }
        </div>
        <div>
            {
                pricingList.map(()=>{
                    return <PricingCardItem />
                })
            }
        </div>
    </section>
    )
}