const edited_date = new Date(2026, 10, 9);

export default function sitemap() {
    return [
        {
            url: 'https://kelso.dumez.nz/',
            lastModified: edited_date,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://kelso.dumez.nz/contact',
            lastModified: edited_date,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://kelso.dumez.nz/portfolio',
            lastModified: edited_date,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://kelso.dumez.nz/portfolio/pos-system',
            lastModified: edited_date,
            changeFrequency: 'monthly',
            priority: 0.2,
        },
        {
            url: 'https://kelso.dumez.nz/portfolio/tiny-politik',
            lastModified: edited_date,
            changeFrequency: 'monthly',
            priority: 0.1,
        },
        {
            url: 'https://kelso.dumez.nz/portfolio/tiny-politik/alpha',
            lastModified: edited_date,
            changeFrequency: 'monthly',
            priority: 0.2,
        },
        {
            url: 'https://kelso.dumez.nz/portfolio/tiny-politik/beta',
            lastModified: edited_date,
            changeFrequency: 'monthly',
            priority: 0.2,
        },
    ]
}