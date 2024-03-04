---
title: Import Custom Applications 
hide_title: true
sidebar_label: Import Custom Applications 
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

# Import Custom Applications Overview

In the previous section we showed how easy it is to launch a dashboard template auto-populated with device data. However, it is also very straightforward to import custom apps or dashboards and integrate them with IoT Ensemble or any other APIs. 

## Import an app to the Fathym Platform 

Let’s start by creating a new project in your Fathym enterprise. Go to the [Fathym dashboard](https://www.fathym.com/dashboard/create-project).

At the top of the Create Project page you will see the Deploy a Project option. Click the Import from Git button. 

![Custom App](https://www.fathym.com/iot/img/screenshots/import_custom_app_gh.png)

First, give your new project a name.  

![Input Project Name](https://www.fathym.com/iot/img/screenshots/input_project_name.png)

Next, select which GitHub organization, repository and the main branch you want to deploy.  

![GitHub Source Details](https://www.fathym.com/iot/img/screenshots/project_github_source.png)

Finally, set the build command, install command and output directory. Generally, you don’t need to modify the pre-populated build command ```npm run build``` and install command ```npm i```  

![Custom Project Build Pipeline](https://www.fathym.com/iot/img/screenshots/custom_project_build_pipeline_details.png)

For the output directory, you can select the option that fits the JavaScript framework/library that powers your application. 

![Output Directories](https://www.fathym.com/iot/img/screenshots/output_directory_options.png)

:::note
If the framework for your application isn’t represented in the list, you can manually add the appropriate output directory command. 
:::

When you’re ready, click deploy. This will configure and initialize a build pipeline through GitHub Actions for the source control of the repository and branch you have selected.  

Navigate to the main dashboard again and you will see the project deploying in the activity feed. Click on Open Repository to view the GitHub repository and click Build Details to see the GitHub Actions workflow running. Once that workflow is complete, click the launch button beside your new project to open and view it in your browser. 

## Import additional routes 

As detailed in the Launch Cloud Apps section, the Fathym platform enables you to assemble, deploy and host web applications in a highly modular fashion. To add an additional route to your new project, enter your project in the dashboard and then Add Route.  

![Add Route](https://www.fathym.com/iot/img/screenshots/project_add_route.png)

A Create Application form will pop up.

![Application Form](https://www.fathym.com/iot/img/screenshots/create_application_form.png)

The Type field provides the four processor options that were detailed in the Launch Cloud Apps overview: View Package, Redirect, Proxy, OAuth. 

View Package is the application type for deploying application frontends and dashboards and is also the type we just used to import a repository from GitHub. If you’re adding additional routes to a project, you can import repositories from GitHub or now also packages from NPM.  

As was also detailed earlier, you can add multiple child applications to each route in your project. To do this, click the edit button beside a route and then click Add Application.  

![Child Application Add](https://www.fathym.com/iot/img/screenshots/add_child_application.png)

## Proxy

One of the application processor types listed above is Proxy and these are used as the integration layer of a project. There are two proxy options: API Proxy and SPA proxy. In the next section we will add an API proxy to connect our application to IoT Ensemble APIs so that it is populated with emulated or custom device data. 