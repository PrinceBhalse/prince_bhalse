import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://princebhalse.com';

const staticRoutes = [
  '',
  '/blog',
  '/stories',
  '/shayari',
  '/thoughts',
  '/books',
  '/projects',
  '/art-work'
];

try {
  console.log('Generating sitemap...');

  const urls = [...staticRoutes];

  // 1. Read Blogs
  const blogsPath = path.resolve(__dirname, '../src/data/blogs.json');
  if (fs.existsSync(blogsPath)) {
    const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf-8'));
    blogs.forEach(blog => {
      if (blog.slug && blog.slug.trim()) {
        urls.push(`/blog/${blog.slug.trim()}`);
      }
    });
  }

  // 2. Read Stories
  const storiesPath = path.resolve(__dirname, '../src/data/stories.json');
  if (fs.existsSync(storiesPath)) {
    const stories = JSON.parse(fs.readFileSync(storiesPath, 'utf-8'));
    stories.forEach(story => {
      if (story.slug && story.slug.trim()) {
        urls.push(`/stories/${story.slug.trim()}`);
      }
    });
  }

  // Generate XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>${url === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === '' ? '1.0' : url.includes('/') && url.split('/').length > 2 ? '0.6' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemapXml, 'utf-8');
  console.log(`Sitemap successfully written to ${outputPath} with ${urls.length} URLs!`);
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}
