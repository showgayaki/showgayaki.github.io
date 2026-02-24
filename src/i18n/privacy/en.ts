const en = {
    title: 'Privacy Policy',

    sections: [
        {
            title: 'Introduction',
            paragraphs: [
                'This Privacy Policy describes how we handle personal information of users in the application provided by us (hereinafter referred to as "the App"). By using the App, you agree to this Privacy Policy.'
            ]
        },
        {
            title: 'Information We Collect',
            paragraphs: [
                'When using the App, we collect the following user information.'
            ],
            subsections: [
                {
                    title: 'App Usage Data',
                    paragraphs: [
                        'Our App may use Google AdMob for advertising purposes and Google Firebase Analytics for usage analysis.',
                        'Although advertising IDs are collected for ad delivery, they are not used to personally identify individuals.',
                        'For more details about the information collected, its purpose, and provision to third parties, please refer to the privacy policies linked below.'
                    ],
                    links: [
                        {
                            label: 'AdMob (Google Inc.)',
                            href: 'https://policies.google.com/technologies/partner-sites'
                        },
                        {
                            label: 'Firebase Analytics (Google Inc.)',
                            href: 'https://firebase.google.com/support/privacy?hl=en'
                        }
                    ]
                },
                {
                    title: 'Personal Information Provided in Inquiries',
                    paragraphs: [
                        'When you contact us or provide feedback, part of your user information may be sent.',
                        'Inquiries are sent via email, and the email body includes the following information. Your email address will also be sent.'
                    ],
                    list: [
                        'Name and email address',
                        'Device name, OS version, and other device information (screen size, pixel density, available heap memory)',
                        'Addon purchase status'
                    ]
                }
            ]
        },
        {
            title: 'Purpose of Use',
            paragraphs: [
                'The collected user information is used for the following purposes:'
            ],
            list: [
                'Delivery and display of third-party advertisements',
                'Creation of statistical data in a format that does not personally identify users',
                'Responding to inquiries and providing information related to the App'
            ]
        },
        {
            title: 'Disclaimer',
            paragraphs: [
                'We do not guarantee that the App will meet users’ specific purposes, or that it will have expected functionality, commercial value, accuracy, or utility, nor that it will be free from defects. We may change the App’s specifications at our discretion. We are not liable for any loss, damage, or malfunction caused by using the App.'
            ]
        },
        {
            title: 'Changes to the Privacy Policy',
            list: [
                'The content of this policy may be changed without notice to users, except as required by law.',
                'Unless otherwise specified, the updated Privacy Policy takes effect from the time it is published on this website.'
            ]
        },
        {
            title: 'Contact',
            contact: 'development@kanke.world'
        }
    ]
};

export default en;
