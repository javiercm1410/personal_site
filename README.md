# Javier's Personal Site

Not much to see here (README WIP) 🤷🏽‍♂️

## TODO

- Moniotoring solution
- Create first post
- check views (responsiveness)
- check blog icons

## Hosting and publishing

The refreshed portfolio is available on OpenAI Sites, while the production custom domain currently uses S3. GitHub does not automatically deploy the site. `.openai/hosting.json` links this source to the existing Site project. The custom domain `javiercarrillo.dev` currently uses the S3 fallback because Sites custom-domain routing remains unresolved. The refreshed version is also available on the assigned Sites hostname.

The existing manually dispatched AWS Release workflow remains a fallback. Do not run it inadvertently: it publishes a release and syncs the build to the S3 bucket. A branch push or draft pull request does not trigger that workflow.

Legacy pages, assets, and the résumé PDF retain their original paths through files in `public/`.

## Writing blog posts

Add Markdown files under `src/content/posts/`. Required frontmatter: `section`, quoted `date` (YYYY-MM-DD), `title`, and `description`. Optional fields: `author` (defaults to Javier Carrillo), `tags` (defaults to []), `image` with `url`/`alt`, `demo`, and `archived` (both default false).

Set `demo: true` for sample posts so they are labeled Demo. Set `archived: true` to keep an older article URL while excluding it from current blog listings. Filenames determine `/posts/<slug>/` URLs. Run `npm run build` to validate content. Production updates currently publish manually to S3; the GitHub repository has no automatic Sites deployment.
