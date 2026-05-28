import type { LegalDict } from '@/components/legal/LegalTemplate.astro';

const ja: LegalDict = {
    title: '70! カレンダー',
    sections: [
        {
            title: '70! カレンダーとは',
            paragraphs: [
                '70! カレンダーは、iOS・macOS向けのGoogleカレンダークライアントアプリです。',
            ],
            subsections: [
                {
                    title: '主な機能',
                    list: [
                        'Googleアカウントでサインインし、Googleカレンダーの予定を閲覧・作成・編集できます',
                        '純正Googleカレンダーアプリでは解消できなかった使いにくさを改善した、快適なカレンダー体験を提供します',
                    ],
                },
                {
                    title: 'Googleアカウントへのアクセスについて',
                    paragraphs: [
                        '本アプリはGoogleカレンダーの予定を取得・作成・編集するために、Googleアカウントへのアクセス許可を必要とします。取得したデータは外部サーバーに保存されることはなく、Googleのサーバー上でのみ管理されます。',
                    ],
                    links: [
                        {
                            label: 'プライバシーポリシー',
                            href: '/privacy/70-calendar/ja',
                        },
                    ],
                },
            ],
        },
    ],
};

export default ja;
