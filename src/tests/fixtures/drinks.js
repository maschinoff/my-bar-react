import moment from 'moment';

export default [
    {
        id: 'cardhu',
        title: 'Cardhu Speyside Single Malt Scotch Whisky',
        category: 'Whisky',
        vol: 0.7,
        alc: 40,
        price: 5472,
        aged: '12 years',
        description: '',
        madeIn: 'Scotland',
        isEmpty: false,
        isOpen: false,
        boughtAt: moment(0).subtract(2, 'year').valueOf(),
        bottledAt: moment(0).subtract(6, 'year').valueOf(),
        bestBefore: moment(0).add(10, 'months').valueOf(),
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf(),
    },
    {
        id: 'laphroaigh',
        title: 'Laphroaig QA Cask Double Matured',
        category: 'Whisky',
        vol: 1,
        alc: 40,
        price: 4804,
        aged: '',
        description : '',
        isEmpty: false,
        isOpen: false,
        boughtAt: moment(0).subtract(2, 'year').valueOf(),
        bottledAt: moment(0).subtract(6, 'year').valueOf(),
        bestBefore: moment(0).add(10, 'months').valueOf(),
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf(),
    },
    {
        id: 'leffe',
        title: 'Leffe Ruby',
        category: 'Beer',
        vol: 0.25,
        alc: 5,
        price: 11.12,
        aged: '',
        description : '',
        isEmpty: false,
        isOpen: true,
        boughtAt: moment(0).subtract(2, 'year').valueOf(),
        bottledAt: moment(0).subtract(6, 'year').valueOf(),
        bestBefore: moment(0).add(10, 'months').valueOf(),
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf(),
    },
    {
        id: 'whisky',
        title: 'My bottle II',
        category: 'Whisky',
        vol: 0.7,
        alc: 42,
        price: 12,
        aged: 12,
        description: '',
        isEmpty: true,
        isOpen: true,
        boughtAt: moment(0).subtract(1, 'year').valueOf(),
        bottledAt: moment(0).subtract(4, 'year').valueOf(),
        bestBefore: moment(0).add(4, 'months').valueOf(),
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf()
    }
];