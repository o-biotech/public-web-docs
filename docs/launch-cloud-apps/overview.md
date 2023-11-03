---
title: Fathym Platform - Overview
hide_title: true
sidebar_label: Fathym Platform Overview
keywords:
    - iot
    - iot ensemble
    - fathym
    - azure
    - connect a device
    - iot hub
    - biotech
hide_table_of_contents: true
---

# Fathym Platform Overview

The Fathym platform is a central hub for deploying and hosting application endpoints and integrating these endpoints with APIs: Whether APIs for databases, content management systems, or native integration with Fathym IoT Ensemble and Habistack APIs. 

Fathym gives you a complete DevOps (CI/CD) workflow, pre-configured automations and open-source templates for assembling data-driven and cloud-based web applications, without needing any cloud or web development expertise. Get started with out-of-the box launch pads and easily fork templates to GitHub and make them your own or import custom code with GitHub or NPM. 

Here we will provide a quick overview of OpenBiotech and Fathym’s default application architecture and hierarchy, and in the following sections will show how to install a pre-configured launch pad or import, integrate and deploy custom apps. 

## The Fathym Application Structure

Fathym’s default structure enables you to assemble, deploy and host web applications in a highly modular fashion. 

![Fathym Application Structure](https://www.fathym.com/img/fathym_application_structure.png)

Let’s quickly go through the primary elements of this architecture.  

**Enterprise:** An Enterprise is what makes up your digital organization in Fathym. It is the default structure and all the projects, apps, configs and pipelines that can populate that structure. All the components and relationships that make up your enterprise are represented as code in a graph database. This is referred to as **Enterprise as Code (EaC).** 

**Projects:** A project is a web application or website that consists of one or a series of routes. Projects are assigned a domain and additional routes deployed to a project are hosted as sub directories of that domain. Users can register a custom domain for their project. 

**Routes:** A route is a path that handles requests to a defined part of a web project and delivers it to end users. Different GitHub repositories or NPM packages can be deployed as routes (or sub directories) in a web project, facilitating a modular application architecture. In Fathym’s default architecture, each route has its own individual source control and build pipeline. 

**Child Applications:** Under each route or sub directory that is deployed in a project, many child applications can be deployed. Each child application can have its own individual source control and build pipeline. For example, under the route example.com/blog, you can host blog pages under that route as example.com/blog/blog1 and example.com/blog/blog2 etc. 

## Application Types

Fathym facilitates four distinct application processor types that handle requests in different ways and that can be used within the same project: View Package, Proxy, Redirect and OAuth. 

**1.** **View Package**

Leverage a view package processor when delivering a visual interface (JS/CSS/HTML) to a user. This provides modern web standards in caching, edge CDN, and can fully leverage the Fathym modifier system. You can deploy view packages with GitHub, NPM or simply ZIP file. 

- **NPM:** The NPM processor provides a way to leverage NPM packages as the source of content for your view package. The system will load the NPM package into Fathym’s Distributed File System (DFS) and then deliver its contents to end users as defined by your routes. 

- **GitHub:** The GitHub processor provides a way to leverage GitHub artifacts as the source of content for your view package. The system will load the GitHub artifact into Fathym’s Distributed File System (DFS) and then deliver its contents to your end users as defined by your routes.

**2.** **Proxy Processors** 

Serving as a reverse proxy, the proxy processor makes it possible to access and connect to APIs without divulging sensitive security keys. They enable the seamless integration between frontends deployed on Fathym and any API/backend data source. There are two types, API Proxy and Single Page Application Proxy.  

- **API Proxy:** The API allows for the configuration of a reverse proxy to API instances such as IoT Ensemble and Habistack, but also Azure Functions, AWS lambdas or almost any other API. 

- **SPA Proxy:** The SPA proxy allows for the configuration of a reverse proxy to existing applications. This is used most often in our local development environments, but in theory should work for almost any other site. 

**3.** **Redirects** 

The redirect processor allows you to redirect any matched route to the URL of your choosing. Use a 301, 302, 307 or 308 redirect code as configured. 

**4.** **OAuth** 

The OAuth processor enables the configuration of GitHub authentication via the OAuth protocol. 