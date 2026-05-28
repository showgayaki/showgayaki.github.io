import type { LegalDict } from '@/components/legal/LegalTemplate.astro';

const en: LegalDict = {
    title: '70! Calendar',
    sections: [
        {
            title: 'What is 70! Calendar?',
            paragraphs: [
                '70! Calendar is a Google Calendar client app for iOS and macOS.',
            ],
            subsections: [
                {
                    title: 'Key Features',
                    list: [
                        'Sign in with your Google account to view, create, and edit your Google Calendar events',
                        'Enjoy a more comfortable calendar experience that addresses the limitations of the stock Google Calendar app',
                    ],
                },
                {
                    title: 'About Google Account Access',
                    paragraphs: [
                        'This app requires access to your Google account in order to retrieve, create, and edit your Google Calendar events. No data is stored on external servers — all data is managed solely on Google\'s servers.',
                    ],
                    links: [
                        {
                            label: 'Privacy Policy',
                            href: '/privacy/70-calendar/en',
                        },
                    ],
                },
            ],
        },
    ],
};

export default en;
