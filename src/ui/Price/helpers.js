import coinImg from 'theme/img/coin.png';

// if we will have new coin images it will be simple to include it here.
const IMAGES_LIST = {
    COIN: coinImg,
    default: coinImg,
};

/**
 *
 * @param {string} imagedCurrency - name of currency
 * @returns {string} - src to image file
 */
export function getCurrencyImage(imagedCurrency) {
    if(IMAGES_LIST.hasOwnProperty(imagedCurrency)) {
        return IMAGES_LIST[imagedCurrency];
    }
    return IMAGES_LIST['default'];
}
