export const LANGS = [ 'ja', 'en' ] as const;
export type Lang = typeof LANGS[number];

export const LEGALS = [ 'privacy', 'terms', 'tokushoho' ] as const;
export type LegalType = typeof LEGALS[number];

// 法的文書の見出し。ナビゲーション・一覧ページのタイトル・見出しで共通して使う
export const LEGAL_TITLES: Record<LegalType, string> = {
    privacy: 'プライバシーポリシー',
    terms: '利用規約',
    tokushoho: '特定商取引法に基づく表記',
};

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
