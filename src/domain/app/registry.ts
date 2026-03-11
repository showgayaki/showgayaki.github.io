import type { AppConfig, AppId } from './types';

export const APPS: Record<AppId, AppConfig> = {
    kakuninsan: {
        id: 'kakuninsan',
        name: {
            ja: '確認さん',
            en: '確認さん',
        },
        description: {
            ja: '1タップでグローバルIPを確認できます',
            en: 'Check your global IP address with one tap',
        },
        iconFile: 'icon_kakuninsan.png',
        stores: [
            {
                vendor: 'app-store',
                url: 'https://apps.apple.com/us/app/確認さん/id6476134454',
            },
        ],
        privacyKind: 'mobile-common',
    },

    otsurin: {
        id: 'otsurin',
        name: {
            ja: 'お釣り計算機',
            en: 'お釣り計算機',
        },
        description: {
            ja: '1タップでお釣りの計算ができます',
            en: 'Calculate change instantly',
        },
        iconFile: 'icon_otsurin.png',
        stores: [
            {
                vendor: 'app-store',
                url: 'https://apps.apple.com/jp/app/お釣り計算機/id6479202932',
            },
        ],
        privacyKind: 'mobile-common',
    },

    sabakan: {
        id: 'sabakan',
        name: {
            ja: 'サバカン！',
            en: 'Sabakan!',
        },
        description: {
            ja: 'ライブリロードサーバーをカンタンに立ち上げよう',
            en: 'Launch a live reload server easily',
        },
        iconFile: 'icon_sabakan.png',
        stores: [
            {
                vendor: 'app-store',
                url: 'https://apps.apple.com/jp/app/サバカン/id6748916636',
            },
            {
                vendor: 'microsoft-store',
                url: 'https://apps.microsoft.com/detail/9mzwkjrsh6dr',
            },
        ],
    },

    '70-calendar': {
        id: '70-calendar',
        name: {
            ja: '70! カレンダー',
            en: '70! Calendar',
        },
        description: {
            ja: 'Googleカレンダークライアント',
            en: 'Google Calendar client',
        },
        iconFile: 'icon_70-calendar.png',
        stores: [
            {
                vendor: 'app-store',
                url: '',
            },
        ],
        privacyKind: '70-calendar',
    },
};
