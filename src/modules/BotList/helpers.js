import orangeBot from 'theme/img/bot1.png';
import blueBot from 'theme/img/bot2.png';
import whiteBot from 'theme/img/bot_new.png';
import greenBot from 'theme/img/bot4.png';
import yellowBot from 'theme/img/bot5.png';
import redBot from 'theme/img/bot6.png';


const BOT_IMAGES = {
    default: whiteBot,
    orange_bot: orangeBot,
    blue_bot: blueBot,
    white_bot: whiteBot,
    green_bot: greenBot,
    yellow_bot: yellowBot,
    red_bot: redBot,
};

const BOT_TEXTS = {
    default: 'place bot here',
    orange_bot: 'attack',
    blue_bot: 'balance',
    white_bot: 'no info',
    green_bot: 'defence',
    yellow_bot: 'megabot',
    red_bot: 'attack',
};

/**
 *
 * @param {string} name - bot name from props
 * @returns {string} - src to image
 */
export function getBotImage(name) {
    if(BOT_IMAGES.hasOwnProperty(name)) {
        return BOT_IMAGES[name];
    }
    return BOT_IMAGES['default']
}

/**
 *
 * @param {string} name - bot name from props
 * @returns {string} - text for each bot
 */
export function getBotText(name) {
    if(BOT_TEXTS.hasOwnProperty(name)) {
        return BOT_TEXTS[name];
    }
    return BOT_TEXTS['default'];
}

/**
 *
 * @param {number} percent - data for bot percent on each time
 * @returns {string} - className for minus or plus percent
 */
export function getBotPercent(percent) {
    if(!percent) {
        return null;
    }
    if(percent < 0) {
        return 'percent_minus';
    }
    return 'percent_plus';
}

/**
 *
 * @param {string} name - bot name
 * @param {string} activeBot - active bot name
 * @returns {string} - return className for active bot
 */
export function getActiveBot(name, activeBot) {
    if(name === activeBot) {
        return 'bot__item_active';
    }
    return null;
}
