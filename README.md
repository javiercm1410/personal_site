# Javier's Personal Site

Not much to see here (README WIP) 🤷🏽‍♂️

## TODO

- Moniotoring solution
- Create first post
- check views (responsiveness)
- check blog icons

## Hosting and publishing

Production is hosted in the existing AWS S3 bucket `javiercarrillo.dev`, behind Cloudflare. Publish validated `dist/` updates manually to S3 without deleting legacy objects. GitHub does not automatically deploy the site. OpenAI Sites work is paused; its existing project configuration is retained.

The existing manually dispatched AWS Release workflow remains unchanged. Do not run it inadvertently: it publishes a release and syncs the build to S3. Branch pushes and pull requests do not trigger that workflow.

Legacy pages, assets, and the résumé PDF retain their original paths through files in `public/`.

## Writing blog posts

Add Markdown files under `src/content/posts/`. Required frontmatter: `section`, quoted `date` (YYYY-MM-DD), `title`, and `description`. Optional fields: `author` (defaults to Javier Carrillo), `tags` (defaults to []), `image` with `url`/`alt`, `demo`, and `archived` (both default false).

Set `demo: true` for sample posts so they are labeled Demo. Set `archived: true` to keep an older article URL while excluding it from current blog listings. Filenames determine `/posts/<slug>/` URLs. Run `npm run build` to validate content. Production updates currently publish manually to S3; the GitHub repository has no automatic Sites deployment.
