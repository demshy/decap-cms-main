[![Netlify Status](https://api.netlify.com/api/v1/badges/258a10dd-ef97-4e72-80ed-9d7efc84d8a8/deploy-status)](https://app.netlify.com/sites/hugo-template/deploys)

# Hugo Template

Template project for sites built with Hugo, Decap, and Netlify

* Client:
* Netlify URL: https://hugo-template.netlify.app/
* Production URL:

## Installing

You need Hugo installed on your machine: <https://gohugo.io/getting-started/quick-start/>

This repository is set up to be developed with [Visual Studio Code](https://code.visualstudio.com/) editor. Please install reccommended extensions listed in [extensions.json](.vscode/extensions.json)

If this is your first time running the project, run

`npm install` and `npx husky install`

When you have that run one of these commands for local dev server:

`hugo server` or `npm run dev`

and open your local site on http://localhost:1313/

## Development

We use [BEM](http://getbem.com/) naming convention for CSS class names.

We follow the standard Javascript style.

### Linters

There are 3 linters set up:
- [stylelint](https://stylelint.io/) for CSS
- [eslint](https://eslint.org/) for JS
- [htmlhint](https://htmlhint.com/) for HTML

If quick fixes are possible, VS Code will fix them on save. A pre-commit git hook is also in place. It triggers all 3 linters on staged files, and if there are errors, it prevents the commit.

## Deployment

To deploy to production, push to `main` branch

### Development URL

There is no development URL out of the box. To create this environment, follow these steps:

1. create branch `develop`
2. Go to Netlify dashboard -> your site -> Settings -> Build & deploy -> Deploy contexts -> Edit settings
3. Under Branch deploys select Let me add individual branches and add `develop`
4. push some code to `develop` branch and see it on <https://develop--hugo-template.netlify.app>

## Additional setup

These configurations are optional based on the demands of your project.

### Configure Github Actions

See [How to Configure Github Actions on a Site](https://github.com/poslovnimediji/knowledgebase/wiki/How-to-Configure-Github-Actions-on-a-Site).

### Configure Decap CMS + Netlify Identity

See [How to enable Netlify Identity for Decap CMS on a site](https://github.com/poslovnimediji/knowledgebase/wiki/How-to-enable-Netlify-Identity-for-Decap-CMS-on-a-site).

### Netlify Large Media

Netlify large media is (deprecated)[https://answers.netlify.com/t/large-media-feature-deprecated-but-not-removed/100804]

Don't use it with new projects anymore. Preferably use cloudinary instead

## Built With

* [Hugo](https://gohugo.io/)
* [Decap CMS](https://decapcms.org/)
* [Netlify](https://www.netlify.com)
