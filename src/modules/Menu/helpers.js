import dashboardImage from 'theme/img/menu1.svg';
import megabotImage from 'theme/img/menu2.svg';
import botMarketImage from 'theme/img/menu3.svg';
import coinPricesImage from 'theme/img/menu4.svg';
import profileImage from 'theme/img/menu5.svg';

const MENU_ICONS = {
    default: profileImage,
    dashboard: dashboardImage,
    megabot: megabotImage,
    botMarket: botMarketImage,
    coinPrices: coinPricesImage,
    profile: profileImage,
};

/**
 *
 * @param {string} name - name of route
 * @returns {string} - src to image
 */
export function getMenuIcon(name) {
    if(MENU_ICONS.hasOwnProperty(name)) {
        return MENU_ICONS[name];
    }
    return MENU_ICONS['default'];
}
