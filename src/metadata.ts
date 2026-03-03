export interface PageMetadata {
    title: string;
    description: string;
    keywords?: string[];
}

export const siteMetadata: {[path: string]: PageMetadata} = {
    '/': {
        title: 'トップページ',
        description: 'わたしがつくったアプリたちを紹介します',
    },
    '/privacy': {
        title: 'プライバシーポリシー',
        description: 'わたしがつくったアプリに関するプライバシーポリシーです',
    },
    '/privacy/ja': {
        title: 'プライバシーポリシー',
        description: 'わたしがつくったアプリに関するプライバシーポリシーです',
    },
    '/privacy/en': {
        title: 'Privacy Policy',
        description: 'Privacy policy for apps I have created',
    },
    '/privacy/70-calendar': {
        title: 'プライバシーポリシー',
        description: '「70! カレンダー」アプリに関するプライバシーポリシーです',
    },
    '/privacy/70-calendar/ja': {
        title: 'プライバシーポリシー',
        description: '「70! カレンダー」アプリに関するプライバシーポリシーです',
    },
    '/privacy/70-calendar/en': {
        title: 'Privacy Policy',
        description: 'Privacy policy for 70! Calendar app',
    },
    '/tokushoho': {
        title: '特定商取引法に基づく表記',
        description: 'わたしがつくったアプリに関する特定商取引法に基づく表記です',
    },
    '/terms': {
        title: '利用規約',
        description: 'わたしがつくったアプリに関する利用規約まとめです',
    },
    '/terms/70-calendar': {
        title: '「70! カレンダー」利用規約',
        description: '「70! カレンダー」の利用規約です',
    }
}
