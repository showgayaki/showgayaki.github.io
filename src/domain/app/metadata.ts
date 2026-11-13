import { APPS } from './registry';
import type { AppId, Lang, LegalType } from './types';

export interface PageMetadata {
    title: string;
    description: string;
}

type AppLegalType = Exclude<LegalType, 'tokushoho'>;

const DESCRIPTIONS: Record<AppLegalType, Record<Lang, (appName: string) => string>> = {
    privacy: {
        ja: (appName) => `「${appName}」アプリに関するプライバシーポリシーです`,
        en: (appName) => `Privacy policy for ${appName} app`,
    },
    terms: {
        ja: (appName) => `「${appName}」の利用規約です`,
        en: (appName) => `Terms of Service for ${appName}`,
    },
};

// アプリ別の法的文書ページのメタデータ。タイトルは文書の見出しにアプリ名を付ける
export function buildAppLegalMetadata(
    legalType: AppLegalType,
    appId: AppId,
    lang: Lang,
    heading: string,
): PageMetadata {
    const appName = APPS[appId].name[lang];

    return {
        title: `${heading} - ${appName}`,
        description: DESCRIPTIONS[legalType][lang](appName),
    };
}
