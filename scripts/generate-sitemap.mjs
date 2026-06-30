import { readFileSync, writeFileSync } from 'fs';

const games = JSON.parse(readFileSync('public/games_raw.json', 'utf8'));
const base = 'https://wgogogo.com';
const today = '2026-06-30';

const staticPages = [
  { loc: '/',              priority: '1.0', changefreq: 'daily' },
  { loc: '/epic-free',     priority: '0.8', changefreq: 'daily' },
  { loc: '/steam-servers', priority: '0.8', changefreq: 'weekly' },
  { loc: '/steam-user',    priority: '0.7', changefreq: 'monthly' },
  { loc: '/about',         priority: '0.5', changefreq: 'monthly' },
  { loc: '/feedback',      priority: '0.4', changefreq: 'monthly' },
  { loc: '/terms',         priority: '0.3', changefreq: 'monthly' },
  { loc: '/privacy',       priority: '0.3', changefreq: 'monthly' },
];

const fullUrl = (p) => `${base}${p}`;

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (const p of staticPages) {
  xml += '  <url>\n';
  xml += `    <loc>${fullUrl(p.loc)}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
  xml += `    <priority>${p.priority}</priority>\n`;
  xml += '  </url>\n';
}

for (const g of games) {
  xml += '  <url>\n';
  xml += `    <loc>${fullUrl(`/game/${g.id}`)}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += '    <priority>0.6</priority>\n';
  xml += '  </url>\n';
}

xml += '</urlset>\n';

writeFileSync('public/sitemap.xml', xml);
console.log(`Generated sitemap.xml: ${staticPages.length} static + ${games.length} game pages = ${staticPages.length + games.length} URLs`);
