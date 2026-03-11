export type Lang = 'ja' | 'en';

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
    privacyKind?: 'mobile-common' | '70-calendar';
    termsKind?: '70-calendar';
}
