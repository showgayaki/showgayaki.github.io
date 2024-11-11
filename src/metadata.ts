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
    }
}
