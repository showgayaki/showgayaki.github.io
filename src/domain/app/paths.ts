import { APPS } from './registry';
import { LANGS } from './types';
import type { LegalType, AppConfig } from './types';

function filterByLegalType(app: AppConfig, legalType: LegalType) {
    switch (legalType) {
        case 'privacy':
            return app.privacy;
        case 'terms':
            return app.terms;
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
