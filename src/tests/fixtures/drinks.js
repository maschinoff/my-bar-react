import moment from 'moment';

export default [
    {
        id: 'sdfsdf',
        title: 'My bottle',
        category: 'Beer',
        vol: 0.5,
        alc: 5.6,
        price: 450,
        aged: 12,
        description: '',
        boughtAt: moment(0).subtract(1, 'year').valueOf(),
        bottledAt: moment(0).subtract(4, 'year').valueOf(),
        bestBefore: moment(0).add(4, 'months').valueOf(),
    },
    {
        id: 'sdfsd2341f',
        title: 'My bottle II',
        category: 'Whisky',
        vol: 0.7,
        alc: 42,
        price: 4500,
        aged: 12,
        description: '',
        boughtAt: moment(0).subtract(1, 'year').valueOf(),
        bottledAt: moment(0).subtract(4, 'year').valueOf(),
        bestBefore: moment(0).add(4, 'months').valueOf(),
    }
];