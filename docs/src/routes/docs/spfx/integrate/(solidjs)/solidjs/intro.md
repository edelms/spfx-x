---
title: How to use SolidJS with SPFx
next: 01-setup-project
---

# How to use SolidJS with SPFx

## Overview

SolidJS, a lightweight JavaScript library for building user interfaces, offers a refreshing take on reactive programming and component-based architecture.
On the other hand, SharePoint Framework (SPFx) stands as a versatile framework for building engaging, customized experiences within Microsoft SharePoint environments.

By combining the power of SolidJS with the extensibility of SPFx, developers gain a potent toolkit for crafting dynamic, responsive, and scalable SharePoint solutions.
In this documentation, we will explore the process of integrating both technologies.

Before you continue, you should be familiar with those technologies, follow these links for more information:
- [Overview of the SharePoint Framework](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)
- [SolidJS Tutorial](https://www.solidjs.com/tutorial/introduction_basics)


### Why?
- __Performance__\
It utilizes fine-grained reactive updates to ensure that only the necessary parts of the UI are re-rendered when state changes occur. This approach leads to faster rendering and more efficient use of system resources compared to other UI frameworks.
- __Size__\
SolidJS is designed to be lightweight, with a small bundle size compared to some other UI libraries/frameworks.
- __Developer experience__\
SolidJS offers a straightforward API and clear documentation, making it easy for developers to get started and build applications quickly. Its syntax is minimalistic and intuitive, which can lead to improved developer productivity.


### Why not?
- __Learning Curve__\
Although SolidJS aims to be developer-friendly, it may still have a learning curve, especially for those new to reactive programming or component-based frameworks.
- __Ecosystem Maturity__\
Compared to more established frameworks like React, SolidJS has a smaller ecosystem. There are fewer third-party libraries, tutorials, and community resources available.
- __For SharePoint developers__\
Many resoures from Microsoft or the PnP community are focused on React and cannot be used directly.

### Tested versions
- NodeJS `18.19.0`
- SPFx `1.18.2`
- SolidJS `1.8.15`
