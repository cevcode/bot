import Home from './modules/Home';
import { Market, Prices, Profile, Megabot } from './modules/Pages';

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/megabot',
        component: Megabot,
    },
    {
        path: '/market',
        component: Market,
    },
    {
        path: '/prices',
        component: Prices,
    },
    {
        path: '/profile',
        component: Profile,
    },
]
