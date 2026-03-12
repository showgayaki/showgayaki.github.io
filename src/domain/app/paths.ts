import { APPS } from './registry';
import type { Lang, LegalType, AppConfig } from './types';

const LANGS: Lang[] = ['ja', 'en'];

function filterByLegalType(app: AppConfig, legalType: LegalType) {
    switch (legalType) {
        case 'privacy':
            return app.privacyKind;
        case 'terms':
            return app.termsKind;
        // case 'tokushoho':
        //     return;
    }
}

export function buildPaths(legalType: LegalType) {
    return Object.values(APPS)
        .filter(app => filterByLegalType(app, legalType) !== undefined)
        .flatMap(app =>
            LANGS.map(lang => ({
                params: {
                    app: app.id,
                    lang,
                },
            }))
        );
}

export function buildAppIndexPaths(legalType: LegalType) {
    return Object.values(APPS)
        .filter(app => filterByLegalType(app, legalType) !== undefined)
        .map(app => ({
            params: { app: app.id },
        }));
}
