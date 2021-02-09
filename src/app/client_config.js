// sometimes it's impossible to use html tags to style coin name, hence usage of _UPPERCASE modifier
export const APP_NAME = 'WallStreetBets';
// sometimes APP_NAME is written in non-latin characters, but they are needed for technical purposes
// ie. "Голос" > "Golos"
export const APP_NAME_LATIN = 'WallStreetBets';
export const APP_NAME_UPPERCASE = 'WALLSTREETBETS';
export const APP_ICON = 'wsb';
// FIXME figure out best way to do this on both client and server from env
// vars. client should read $STM_Config, server should read config package.
export const APP_URL = 'https://wsb.3speak.co';
export const APP_DOMAIN = 'wsb.3speak.co';
export const HIVE_SIGNER_APP = 'hive.blog';
export const LIQUID_TOKEN = 'Hive';
// sometimes it's impossible to use html tags to style coin name, hence usage of _UPPERCASE modifier
export const LIQUID_TOKEN_UPPERCASE = 'HIVE';
export const VESTING_TOKEN = 'HIVE POWER';
export const INVEST_TOKEN_UPPERCASE = 'HIVE POWER';
export const INVEST_TOKEN_SHORT = 'HP';
export const DEBT_TOKEN = 'HIVE DOLLAR';
export const DEBT_TOKENS = 'HIVE DOLLARS';
export const CURRENCY_SIGN = '$';
export const WIKI_URL = ''; // https://wiki.golos.io/
export const LANDING_PAGE_URL = 'https://wsb.3speak.co';
export const TERMS_OF_SERVICE_URL = 'https://' + APP_DOMAIN + '/tos.html';
export const PRIVACY_POLICY_URL = 'https://' + APP_DOMAIN + '/privacy.html';
export const WHITEPAPER_URL = '';

// these are dealing with asset types, not displaying to client, rather sending data over websocket
export const LIQUID_TICKER = 'HIVE';
export const VEST_TICKER = 'VESTS';
export const DEBT_TICKER = 'HBD';
export const DEBT_TOKEN_SHORT = 'HBD';

// application settings
export const DEFAULT_LANGUAGE = 'en'; // used on application internationalization bootstrap
export const DEFAULT_CURRENCY = 'USD';
export const ALLOWED_CURRENCIES = ['USD'];

// meta info
export const TWITTER_HANDLE = '@wsbmod';
export const SHARE_IMAGE =
    'https://' + APP_DOMAIN + '/images/wsblogo.png';
export const TWITTER_SHARE_IMAGE =
    'https://' + APP_DOMAIN + '/images/hive-blog-twshare.png';
export const SITE_DESCRIPTION =
    'Like 4chan found a bloomberg terminal. The Official Mods Twitter is @wsbmod. A budding community of over 7.4 million degenerates';

// various
export const SUPPORT_EMAIL = 'support@' + APP_DOMAIN;
