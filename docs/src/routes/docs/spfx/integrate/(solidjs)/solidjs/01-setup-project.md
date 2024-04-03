---
title: Setup the SPFx project
prev: intro
next: 02-build-pipeline
---

# 1. Setup the SPFx project

We create a new SPFx WebPart project, and add some properties.

Before you continue, make sure your local development environment is ready:\
[Follow Microsoft's documentation](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment)

---

## Yeoman

Microsoft provides a Yeoman (`yo`) based generator to scaffold our new SPFx project.

- Create a new SPFx project\
`yo @microsoft/sharepoint`

    Use these options in the project wizard:
    - ? What is your solution name? ___spfx-solidjs-demo___
    - ? Which type of client-side component to create? __WebPart__
    - ? What is your Web part name? ___SolidDemo___
    - ? Which template would you like to use? __Minimal__

---

## Install dependencies

Open your project folder in a terminal.

- Install additional dependencies\
`npm i solid-js`

- Install additional dev dependencies\
`npm i -D @babel/preset-env @babel/preset-typescript babel-loader@8.3.0 babel-preset-solid`

---

## Add some WebPart properties

To be able to test some more advanced features, let's add some WebPart properties.

- Navigate to the folder `src/webparts/solidDemo`
- Open the `SolidDemoWebPart.ts`, this file was generated when we created the project.
    - Add the imports for the property pane,
    - extend the props interface,
    - and implement the `getPropertyPaneConfiguration` method.

```ts showLineNumbers {3,7-8,13-25} title="SolidDemoWebPart.ts"
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';
...

export interface ISolidDemoWebPartProps {
    text1: string;
    text2: string;
}

export default class SolidDemoWebPart extends BaseClientSideWebPart<ISolidDemoWebPartProps> {
    ...
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
        return {
            pages: [{
                header: { description: 'Settings', },
                groups: [{
                    groupFields: [
                        PropertyPaneTextField('text1', { label: 'Text', }),
                        PropertyPaneTextField('text2', { label: 'Text 2', }),
                    ],
                }],
            }]
        };
    }
}

```