import get from 'lodash/get';
import set from 'lodash/set';
import moment from 'moment';
import 'moment/locale/ru';
import numeral from 'numeral';

export const addDefault = (object, key, defaultVal) => {
    const item = get(object, key, undefined);
    if (item !== undefined) {
        return item;
    }
    set(object, key, defaultVal);
    return defaultVal;
};

export const showSymbol = currency => {
    switch (currency) {
        case 'RUB':
            return '₽';
        case 'EUR':
            return '€';
        case 'USD':
            return '$';
        default:
            return '₽'
    }
};

export const prettifyDate = date => {
    return moment(date.replace(/\./g, '-'), 'DD-MM-YY')
        .locale('ru')
        .format('d MMM, YYYY, ddd');
};

export const numberText = (number, titles) => {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

export const formattedPrice = price => {
    return numeral(price).format('0,0').replace(',', ' ');
};



