import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();
  const baseUrl = 'https://example.com'; // Replace with your actual domain

  const pages = [
    // New Placeholder Pages
    '/register',
    '/verification',
    '/login',
    '/events/diabetes-screening',
    '/events/mental-health-workshop',
    '/events/womens-health',
    '/help/portal-guide',
    '/team',
    '/blog',
    '/faq',
    '/privacy',
    '/terms',
    // Existing Pages
    '/about',
    '/admin/waitlist',
    '/community',
    '/contact',
    '/features',
    '/how-it-works',
    '/patient-portal',
    '/resources',
    '/', // Home page
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page === '/' && page.length > 1 ? '' : page}`, // Handle home page properly
    lastModified: lastModified,
  }));
}
