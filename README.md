# eCyder.com

Static website for **eCyder — Embedded Cybersecurity Products and Solutions**, protecting Automotive, Healthcare, Railways and Aerospace systems.

Migrated from Google Sites to a plain static site (no build step) for full control over design, hosting and deployment via GitHub Pages.

## Structure

```
index.html            Home
products.html          Risk Assessment Tools, Vulnerability Management Tools, SBOM Generator Tool, PSoE Tool
services.html          Consulting Services (Compliance, Security Testing, Technical Consulting, PSIRT) + Training Services
about.html             Mission & Vision, Who We Are, Careers
resources.html         Blog, Whitepapers, Case Studies
privacy-policy.html    Privacy policy
404.html               Not found page
css/styles.css         Site styles
js/main.js             Nav toggle, dropdowns, cookie banner
CNAME                  Custom domain (ecyder.com) for GitHub Pages
```

## Local preview

Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Deployment

Deployed via **GitHub Pages** from the `main` branch. Custom domain `ecyder.com` is configured via the `CNAME` file — point your domain's DNS to GitHub Pages:

- `A` records for the apex domain (`ecyder.com`) → GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- `CNAME` record for `www.ecyder.com` → `<github-username>.github.io`

## Editing content

All pages are plain HTML/CSS/JS — no framework or build step. Edit the relevant `.html` file and shared styles in `css/styles.css`.
