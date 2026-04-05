export const LANGS = [ 'ja', 'en' ] as const;
export type Lang = typeof LANGS[number];

export const LEGALS = [ 'privacy', 'terms', 'tokushoho' ] as const;
export type LegalType = typeof LEGALS[number];

export type AppId =
    | 'kakuninsan'
    | 'otsurin'
    | 'sabakan'
    | '70-calendar'
    ;

export interface StoreLink {
    vendor: 'app-store' | 'google-play' | 'microsoft-store';
    url: string;
}

export interface AppConfig {
    id: AppId;
    name: Record<Lang, string>;
    description: Record<Lang, string>;
    iconFile: string;
    stores: StoreLink[];
    privacy?: 'mobile-common' | AppId;
    terms?: AppId;
}
