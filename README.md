# VERSA

**Business. Services. Opportunities.**

VERSA is an international business and services platform designed to help people discover businesses, explore services and connect with providers.

## Current milestone

This repository contains the initial project foundation:
- Responsive public homepage and design system
- Interactive sample listing search and category filters
- Cloudflare Worker entry point and health endpoint
- Initial Cloudflare D1 relational schema
- GitHub-ready project documentation

**Important:** Listings shown on the homepage are illustrative samples. Authentication, live database-backed listings, enquiries, reviews and AI recommendations are planned modules and are not yet implemented.

## Technology

- HTML, CSS and JavaScript
- Cloudflare Workers with Static Assets
- Cloudflare D1
- Cloudflare R2
- GitHub and Wrangler

## Requirements

- Node.js (current LTS recommended)
- npm
- A GitHub account
- A Cloudflare account

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Wrangler.

The API health endpoint is:

```text
http://localhost:8787/api/v1/health
```

## Configure Cloudflare

1. Create a Cloudflare account and install Wrangler dependencies with `npm install`.
2. Authenticate the CLI:

   ```bash
   npx wrangler login
   ```

3. Create a D1 database:

   ```bash
   npx wrangler d1 create versa-db
   ```

4. Copy the returned database ID into `wrangler.jsonc`, replacing `REPLACE_WITH_YOUR_D1_DATABASE_ID`.
5. Create the R2 bucket:

   ```bash
   npx wrangler r2 bucket create versa-media
   ```

6. Apply the initial schema locally:

   ```bash
   npm run db:local
   ```

7. Apply it to the remote database when ready:

   ```bash
   npm run db:remote
   ```

8. Test the application:

   ```bash
   npm run dev
   ```

9. Deploy when the account configuration and resources are ready:

   ```bash
   npm run deploy
   ```

Cloudflare resource creation and remote migrations may require account access and may be subject to plan limits.

## GitHub setup

Create an empty GitHub repository named `versa`, then from this project directory run:

```bash
git init
git add .
git commit -m "Initial VERSA project foundation"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/versa.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## Project structure

```text
versa/
├── public/                 # Static website
│   └── assets/
│       ├── css/
│       ├── js/
│       └── favicon.svg
├── worker/                 # Cloudflare Worker API entry point
├── migrations/             # D1 SQL migrations
├── docs/                   # Architecture and implementation notes
├── tests/                  # Future automated tests
├── wrangler.jsonc          # Cloudflare configuration
├── package.json
└── README.md
```

## Development principles

- Keep secrets out of source control.
- Validate and authorize every private API operation on the server.
- Use migrations for database changes.
- Keep customer data private and collect only what the platform needs.
- Clearly distinguish verified businesses from unverified listings.
- Make the experience accessible and responsive.

## License

MIT. See [LICENSE](LICENSE).
