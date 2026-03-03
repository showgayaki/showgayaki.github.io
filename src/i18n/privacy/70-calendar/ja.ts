const ja = {
    title: 'プライバシーポリシー',

    sections: [
        {
            title: 'はじめに',
            paragraphs: [
                '当方は、アプリケーション「70! カレンダー」（以下「本アプリ」）におけるユーザーの情報の取扱いについて、以下の通りプライバシーポリシーを定めます。本アプリをご使用いただくことで、本ポリシーに同意いただいたものとみなします。'
            ]
        },
        {
            title: 'Googleユーザーデータの取扱い',
            paragraphs: [
                '本アプリは、GoogleカレンダーAPIを利用してユーザーのカレンダー情報を取得、表示、および編集します。これらデータの取扱いは以下の通りです。',
            ],
            subsections: [
                {
                    title: '利用目的',
                    paragraphs: [
                        '本アプリは、カレンダーの予定表示、新規作成、編集、および削除といったカレンダー機能を提供するためのみに、ユーザーの同意を得た上でGoogleアカウントのデータにアクセスします。'
                    ]
                },
                {
                    title: '保存と共有',
                    paragraphs: [
                        '本アプリは、Googleから取得したカレンダーデータを外部のサーバーに保存または転送することはありません。データはユーザーのデバイス内およびGoogleのサーバー上でのみ保持されます。また、取得した情報を第三者に販売または共有することはありません。'
                    ]
                },
                {
                    title: '広告利用の禁止',
                    paragraphs: [
                        'Google APIから取得したユーザーデータは、広告の配信、ターゲティング、または第三者への広告提供のために利用されることは一切ありません。'
                    ]
                },
                {
                    title: '限定的使用（Limited Use）ポリシーへの準拠',
                    paragraphs: [
                        '本アプリによるGoogle APIから受け取った情報の使用および他のアプリへの転送は、限定的使用要件（Limited Use Requirements）を含む「Google APIサービスユーザーデータポリシー」に従います。'
                    ],
                    links: [
                        {
                            label: 'Google API Services User Data Policy',
                            href: 'https://developers.google.com/terms/api-services-user-data-policy'
                        }
                    ]
                }
            ]
        },
        {
            title: 'その他の収集する情報',
            subsections: [
                {
                    title: 'アプリケーションの利用状況',
                    paragraphs: [
                        '利用状況の解析（クラッシュレポートや利便性向上）のためにGoogle Firebase Analyticsを使用する場合があります。取得する情報は個人を特定するものではありません。'
                    ],
                    links: [
                        {
                            label: 'Firebase Analytics（Google Inc.）',
                            href: 'https://firebase.google.com/support/privacy?hl=ja'
                        }
                    ]
                },
                {
                    title: 'お問い合わせ時の情報',
                    paragraphs: [
                        'お問い合わせの際、解決のために以下の情報を収集する場合があります。'
                    ],
                    list: [
                        'メールアドレス（返信のため）',
                        '端末名、OSバージョン、アプリのバージョン'
                    ]
                }
            ]
        },
        {
            title: '免責事項',
            paragraphs: [
                '当方は、本アプリの正確性、完全性、および特定の目的への適合性について保証しません。Google側の仕様変更やAPIの提供停止により本アプリの一部または全部が利用不能となった場合、当方はこれによりユーザーに生じた損害について一切の責任を負いません。'
            ]
        },
        {
            title: 'プライバシーポリシーの変更',
            paragraphs: [
                '当方は、法令の変更またはサービス内容の変更等に応じて、本ポリシーを予告なく変更することがあります。'
            ]
        }
    ]
};

export default ja;
