export default async function sitemap() {
    const basePath = process.env.BASE_URL

    const routes = [
        '',
        '/about/botanical-garden',
        '/about/management-company',
        '/about/our-founder',
        '/gallery',
        '/palm-species',
        '/contact-us',
    ].map(route => ({
        url: `${basePath}${route}`,
        lastModified: new Date().toISOString()
    }));

    return [...routes];
}