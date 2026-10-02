# Javier's Personal Site

Not much to see here (README WIP) 🤷🏽‍♂️

## TODO

- Moniotoring solution
- Create first post
- check views (responsiveness)
- check blog icons

## Hosting and publishing

The refreshed portfolio is hosted on OpenAI Sites. Publish updates manually through Sites; GitHub does not automatically deploy the site. `.openai/hosting.json` links this source to the existing Site project. The custom domain `javiercarrillo.dev` is pending validation and activation.

The existing manually dispatched AWS Release workflow remains a fallback. Do not run it inadvertently: it publishes a release and syncs the build to the S3 bucket. A branch push or draft pull request does not trigger that workflow.

Legacy pages, assets, and the résumé PDF retain their original paths through files in `public/`.
