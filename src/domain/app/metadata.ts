import { APPS } from './registry';
import type { AppId, Lang } from './types';

export interface PageMetadata {
    title: string;
    description: string;
}

export function buildPrivacyMetadata(
    appId: AppId,
    lang: Lang
): PageMetadata {
    const app = APPS[appId];

    if (lang === 'en') {
        return {
            title: `Privacy Policy - ${app.name.en}`,
            description: `Privacy policy for ${app.name.en}`,
        };
    }

    return {
        title: `プライバシーポリシー - ${app.name.ja}`,
        description: `「${app.name.ja}」アプリに関するプライバシーポリシーです`,
    };
}
