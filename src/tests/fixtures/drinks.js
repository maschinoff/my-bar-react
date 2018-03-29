import moment from 'moment';

export default [
    {
        id: 'beer',
        title: 'My bottle',
        category: 'Beer',
        vol: 0.5,
        alc: 5.6,
        price: 450,
        aged: 1,
        description: '',
        isEmpty: false,
        isOpen: false,
        boughtAt: moment(0).subtract(1, 'year').valueOf(),
        bottledAt: moment(0).subtract(4, 'year').valueOf(),
        bestBefore: moment(0).add(4, 'months').valueOf(),
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf()
    },
    {
        id: 'whisky',
        title: 'My bottle II',
        category: 'Whisky',
        vol: 0.7,
        alc: 42,
        price: '',
        aged: 12,
        description: '',
        isEmpty: false,
        isOpen: true,
        boughtAt: moment(0).subtract(1, 'year').valueOf(),
        bottledAt: moment(0).subtract(4, 'year').valueOf(),
        bestBefore: moment(0).add(4, 'months').valueOf(),
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf()
    }
];