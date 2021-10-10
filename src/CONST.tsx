import {IContestList, IImages, IPlayCards} from './components/Types'

export const PlayCards: IPlayCards[] = [
    {
        background: 'assets/images/elements/card-bg-1.jpg',
        image: 'assets/images/icon/play/2.png',
        no: "01",
        title: 'Delegate',
        content: 'Each 1,000 SGB',
        content2: 'will get you a ticket.'
    },
    {
        background: 'assets/images/elements/card-bg-2.jpg',
        image: 'assets/images/icon/play/1.png',
        no: "02",
        title: 'Earn',
        content: 'Earn SGB and NFTp',
        content2: 'from your delegation.'
    },
    {
        background: 'assets/images/elements/card-bg-3.jpg',
        image: 'assets/images/icon/play/3.png',
        no: "03",
        title: 'Win',
        content: '20K SGB prize each week',
        content2: 'Extra NFTp & KoS Attibuts.'
    },
];

export const ContestList: IContestList[] = [
    {
        image: 'assets/images/sgb-asset.png',
        price: 1003.15,
        price2: "SGB",
        meta1: 'you could get',
        meta2: '1 ticket/week',
        footerClass: 'contest-card__footer align-right',
        footer1: 'Wrap it'
    },
    {
        image: 'assets/images/wsgb-asset.png',
        price: 2031,
        price2: "WSGB",
        meta1: 'you will get',
        meta2: '2 tickets/week',
        footerClass: 'contest-card__footer',
        footer1: 'Delegate it',
        footer2: 'Un-Wrap it'
    }
];

export const Images: IImages[] = [
    {src: 'assets/images/elements/car-shadow.png', className: 'car-shadow'},
    {src: 'assets/images/elements/car-ray.png', className: 'car-ray'},
    {src: 'assets/images/elements/car-light.png', className: 'car-light'},
    {src: 'assets/images/logo-sgb-rr-tso.png', className: 'sgb-logo'},
    {src: 'assets/images/elements/car-star.png', className: 'car-star'},
];