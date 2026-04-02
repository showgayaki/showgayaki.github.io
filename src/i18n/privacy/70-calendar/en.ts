const en = {
    title: 'Privacy Policy',

    sections: [
        {
            title: 'Introduction',
            paragraphs: [
                'This Privacy Policy describes how we handle user information in the application "70! Calendar" (hereinafter referred to as the "App"). By using the App, you agree to this Privacy Policy.'
            ]
        },
        {
            title: 'Handling of Google User Data',
            paragraphs: [
                'The App uses the Google Calendar API to access, display, and edit users’ calendar information. The handling of such data is as follows:',
            ],
            subsections: [
                {
                    title: 'Purpose of Use',
                    paragraphs: [
                        'The App accesses Google Account data only with the user’s consent and solely for the purpose of providing calendar-related features such as viewing, creating, editing, and deleting events.'
                    ]
                },
                {
                    title: 'Storage and Sharing',
                    paragraphs: [
                        'The App does not store or transfer calendar data obtained from Google to any external servers. The data is retained only on the user’s device and on Google’s servers. We do not sell or share the obtained information with any third parties.'
                    ]
                },
                {
                    title: 'No Advertising Use',
                    paragraphs: [
                        'User data obtained through Google APIs is never used for advertising purposes, including ad targeting or providing ads to third parties.'
                    ]
                },
                {
                    title: 'Compliance with Limited Use Policy',
                    paragraphs: [
                        'The use and transfer of information received from Google APIs by the App comply with the Google API Services User Data Policy, including the Limited Use requirements.'
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
            title: 'Other Information Collected',
            subsections: [
                {
                    title: 'Security and Fraud Prevention',
                    paragraphs: [
                        'The App utilizes Google Firebase App Check to verify that requests are legitimate and to restrict access from unauthorized clients. As a result, technical information regarding the app and your device (such as the Firebase User Agent) may be sent automatically; however, this information does not personally identify any user.',
                        'For further details, please refer to the following:'
                    ],
                    links: [
                        {
                            label: 'Firebase App Check',
                            href: 'https://firebase.google.com/docs/ios/app-store-data-collection?hl=en#firebaseappcheck'
                        },
                        {
                            label: 'Firebase User Agent',
                            href: 'https://firebase.google.com/docs/ios/app-store-data-collection?hl=en#firebase-user-agent'
                        }
                    ]
                },
                {
                    title: 'Information Collected for Inquiries',
                    paragraphs: [
                        'When you contact us for support, we may collect the following information as necessary to resolve your inquiry:'
                    ],
                    list: [
                        'Email address (for response purposes)',
                        'Device name, OS version, and App version'
                    ]
                }
            ]
        },
        {
            title: 'Disclaimer',
            paragraphs: [
                'We make no guarantees regarding the accuracy, completeness, or fitness for a particular purpose of the App. If any part or all of the App becomes unavailable due to changes in Google specifications or discontinuation of APIs, we shall not be liable for any damages incurred by users as a result.'
            ]
        },
        {
            title: 'Changes to This Privacy Policy',
            paragraphs: [
                'We may revise this Privacy Policy without prior notice in response to changes in laws or service content.'
            ]
        }
    ]
};

export default en;
