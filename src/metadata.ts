export interface PageMetadata {
    title: string;
    description: string;
    keywords?: string[];
}

export const siteMetadata: {[pathName: string]: PageMetadata} = {
    '/': {
        title: 'トップページ',
        description: 'わたしがつくったアプリたちを紹介します',
    },
    '/privacy': {
        title: 'プライバシーポリシー',
        description: 'わたしがつくったアプリに関するプライバシーポリシーです',
    },
    '/tokushoho': {
        title: '特定商取引法に基づく表記',
        description: 'わたしがつくったアプリに関する特定商取引法に基づく表記です',
    }
}
