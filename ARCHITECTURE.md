# VERSA Architecture

## Product
International business and services discovery platform for businesses, service providers and individuals.

## Architecture
- Presentation: static HTML/CSS/JavaScript
- Runtime/API: Cloudflare Worker
- Database: Cloudflare D1 (SQLite)
- Object storage: Cloudflare R2
- Source control: GitHub

## Modules
1. Identity and sessions
2. User profiles and roles
3. Business profiles and memberships
4. Categories and services
5. Search and discovery
6. Customer enquiries
7. Reviews and moderation
8. Recommendations
9. Administration and audit

## Security boundaries
- Public read access only to published, approved records.
- Private operations require server-side authentication and authorization.
- Never trust role or ownership claims supplied by the browser.
- Keep OAuth secrets in Cloudflare secrets or local untracked development variables.
- Validate uploads, rate-limit sensitive endpoints and log administrative actions.

## Current implementation status
The initial public frontend, sample listing filters, Worker health endpoint and initial D1 schema are present. Business APIs, authentication and the remaining product modules are not yet implemented.
