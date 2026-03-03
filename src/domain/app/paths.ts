import { APPS } from './registry';
import type { Lang } from './types';

const LANGS: Lang[] = ['ja', 'en'];

export function buildPrivacyPaths() {
    return Object.values(APPS)
        .filter(app => app.privacyKind !== undefined)
        .flatMap(app =>
            LANGS.map(lang => ({
                params: {
                    app: app.id,
                    lang,
                },
            }))
        );
}

export function buildAppIndexPaths() {
    return Object.values(APPS)
        .filter(app => app.privacyKind !== undefined)
        .map(app => ({
            params: { app: app.id },
        }));
}
