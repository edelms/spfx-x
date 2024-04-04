---
title: How to use Tailwind CSS with SPFx
next: 01-build-pipeline
---

# How to use Tailwind CSS with SPFx

## Overview

Tailwind CSS is a utility-first CSS framework that enables developers to rapidly build modern web interfaces with minimal effort.
Unlike traditional CSS frameworks, which provide pre-designed components, Tailwind CSS focuses on providing a set of 
utility classes that can be directly applied to HTML elements.\
These utility classes encapsulate common styles such as margins, padding, colors, and more, allowing developers to quickly create
custom designs without writing custom CSS.

Integrating Tailwind CSS with SharePoint Framework offers developers a streamlined development experience, 
extensive customization options, and improved performance, ultimately resulting in the creation of visually 
appealing and responsive solutions within the SharePoint environment.

Before you continue, you should be familiar with SPFx, and understand the core concepts of Tailwind CSS as a utility-first framework.\
Follow these links for more information:
- [Overview of the SharePoint Framework](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)
- [Utility-First Fundamentals](https://tailwindcss.com/docs/utility-first)


### Why?
- __Rapid Development__\
Tailwind CSS's utility-first approach allows developers to style components quickly by applying pre-defined utility classes directly to HTML elements.
This accelerates development time, enabling faster prototyping and iteration.
- __Customization__\
Tailwind CSS offers extensive customization options, allowing developers to tailor the design of their SPFx components to match branding guidelines or project requirements precisely.
- __Responsive Design__\
Tailwind CSS provides responsive utility classes out of the box, enabling developers to create SPFx components that adapt seamlessly to various screen sizes and devices.
- __Optimized Bundle Size__\
Tailwind CSS offers built-in features, such as tree shaking and purging unused CSS, which help optimize the size of the final bundle.
This optimization reduces page load times and improves performance.

### Why not?
- __Learning Curve__\
Developers who are new to Tailwind CSS may face a learning curve when getting started with the framework.
Understanding the utility classes and how to effectively use them may require some time and practice.
- __Conflicts with Existing Styles__\
Integrating Tailwind CSS with SPFx could lead to conflicts with existing stylesheets already used in SharePoint sites.
Resolving these conflicts takes an additional effort while configuring the project.
- __Limited Themeability__\
SharePoint provides various theme customization options. Depending on your usecase, working with those options could require some advanced customization of Tailwind's default configuration.

### Tested versions
- NodeJS `18.19.0`
- SPFx `1.18.2`
- tailwindcsss `3.4.3`
