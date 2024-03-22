import { ReactComponent as UPILogo } from '../../assets/icons/upi-logo.svg'
import { ReactComponent as PayFmLogo } from '../../assets/icons/payfm-logo.svg'
import { ReactComponent as VisaLogo } from '../../assets/icons/visa.svg'
import { ReactComponent as MasterCardLogo } from '../../assets/icons/mastercard-logo.svg'
import { ReactComponent as AMEXLogo } from '../../assets/icons/amex-logo.svg'
import { ReactComponent as DinnersClubLogo } from '../../assets/icons/diners-logo.svg'

export const paymentMethods = [
    {
        icon: UPILogo,
    },
    {
        icon: PayFmLogo,
    },
    {
        icon: VisaLogo,
    },
    {
        icon: MasterCardLogo,
    },
    {
        icon: AMEXLogo,
    },
    {
        icon: DinnersClubLogo,
    },
]

export const pricingList = [{
    planName: 'Mini',
    price: 'From ₹7/day',
    numberAccount: '1 account on mobile only',
    features: [
        `Ad-free music listening on mobile`,
        'Group Session',
        'Download 30 songs on 1 mobile device',
    ]
},{
    free: '1 month free',
    planName: 'Indiviual',
    price: '₹119/month after offer period',
    numberAccount: '1 ',
    features: [
        `Ad-free music listening`,
        'Group Session',
        'Download 10k songs/device, on 5 devices per account',
    ]
},{
    free: '1 month free',
    planName: 'Duo',
    price: '₹149/month after offer period',
    numberAccount: '2',
    features: [
        `For couples who live together`,
        'Ad-free music listening',
        'Group Session',
        'Download 10k songs/device, on 5 devices per account',
    ]
},{
    free: "1 month free",
    planName: 'For family who live together',
    price: '₹179/month after offer period',
    numberAccount: 'Up to 6',
    features: [
        `For family who live together`,
        'Block explicit music',
        'Ad-free music listening',
        'Group Session',
        'Download 10k songs/device on 5 devices',
    ]
}
]
