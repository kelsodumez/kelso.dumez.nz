export default function sitemap() {
    return [
        {
            url: 'https://kelso.dumez.nz/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://kelso.dumez.nz/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://kelso.dumez.nz/portfolio',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://kelso.dumez.nz/portfolio/pos-system',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.2,
        },
        {
            url: 'https://kelso.dumez.nz/portfolio/tiny-politik',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.1,
        },
        {
            url: 'https://kelso.dumez.nz/portfolio/tiny-politik/alpha',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.2,
        },
        {
            url: 'https://kelso.dumez.nz/portfolio/tiny-politik/beta',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.2,
        },
    ]
}