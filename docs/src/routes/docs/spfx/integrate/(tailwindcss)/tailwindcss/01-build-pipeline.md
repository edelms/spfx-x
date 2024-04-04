---
title: Extend the SPFx build pipeline for tailwindcss
prev: intro
next: 02-prepare-stylesheets
---

# 1. Extend the SPFx build pipeline for tailwindcss

We have to customize the existing build process provided by SharePoint Framework to incorporate a Tailwind CSS build step.\
With this guideance we will create a new SPFx Webpart project, and use that as a base for the required configuration.

Before you continue, make sure your local development environment is ready:\
[Follow Microsoft's documentation](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment)

## Project setup

- Create a new SPFx project\
`yo @microsoft/sharepoint`

- You can use any project settings, for this sample I will use this configuration:
    - ? What is your solution name? ___spfx-tailwindcss-demo___
    - ? Which type of client-side component to create? __WebPart__
    - ? What is your Web part name? ___TailwindDemo___
    - ? Which template would you like to use? __Minimal__

- Open the project folder

- Install additional dev dependencies\
`npm i -D gulp-postcss postcss-import tailwindcss`

---

## Extend the `gulpfile.js`

SharePoint Framework uses a Gulp-based build system. The `gulpfile.js` in the root of the project serves as the backbone of the build process, orchestrating various tasks to compile, bundle, and package the solution for deployment.

### Add the pre-build task
Add the highlighted code section to your gulpfile.

```js showLineNumbers {4-23} title="gulpfile.js"
...
build.addSuppression(`Warning - [sass] The local CSS ...`);

// Tailwind
const postcss = require('gulp-postcss');
const atimport = require('postcss-import');
const tailwind = require('tailwindcss');
const tailwindcss = build.subTask(
    'tailwindcss',
    function (gulp, buildOptions, done) {
        gulp
            .src('assets/main.css')
            .pipe(
                postcss([
                    atimport(),
                    tailwind('./tailwind.config.js'),
                ])
            )
            .pipe(gulp.dest('assets/dist'));
        done();
    }
);
build.rig.addPreBuildTask(tailwindcss);
...
```

---

## Add `tailwind.config.js`
Two important differences from an usual Tailwind configuration is adding the `important` property, and disabling the built-in `preflight`.
Using those changes we can build a custom preflight, and make sure only our own content will be styled using Tailwind CSS.

- Create a `tailwind.config.js` file in the root of the project

```js showLineNumbers "important" "preflight" title="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.ts", "./src/**/*.tsx"],
    important: '#tw',
    corePlugins: {
        preflight: false
    },
}
```

---

## Add `postcss.config.js`
- Create a `postcss.config.js` file in the root of the project

```js showLineNumbers title="postcss.config.js"
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    }
}
```
