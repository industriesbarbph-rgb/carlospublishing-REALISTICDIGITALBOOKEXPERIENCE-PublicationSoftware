# VPC Publishing — I’d Like to Speak Filipino

Production static storefront for GitHub Pages.

## Experience
- Bright VPC Publishing office scene.
- Exactly four real books on one dominant shelf.
- Each volume opens into a Pages Technology-style page-turning presentation.
- Public reader contains edition information, summary, retailer links, physical-store guidance and series navigation only.
- Hanging/swaying office note is the entry point for articles, blogs, interviews and write-ups.

## SEO
- Unique crawlable URL for every volume.
- Canonical tags, Open Graph, Book/Organization/Person structured data, robots.txt and sitemap.xml.
- Core metadata is in HTML; changing store and article data can load from the publisher spreadsheet.

## Publisher-maintained data
See `integrations/google-sheets/README.md`. Once a Google Apps Script endpoint is connected in `config.js`, changing store branches, confirmation dates, online URLs and article links does not require editing the repository.

## Current deployment target
GitHub Pages from the `main` branch. No Netlify dependency.
