---
title: Ready-To-Go Launch Pad 
hide_title: true
sidebar_label: Ready-To-Go Launch Pad 
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

# Ready-To-Go Launch Pad

## DevOps >> AutoMagic

Fathym Platform gives users an intuitive and comprehensive workflow for deploying applications and integrating them with APIs. It also goes beyond this by providing pre-configured automations that eliminate the steps involved in manually integrating and deploying apps.  

Instead of importing and deploying a dashboard app and manually integrating with OpenBiotech device data via an API proxy, you can instead install an automated launch pad that deploys a biometric dashboard auto populated with simulated or real device data. 

## Low-Code Units (LCUs) 

In the OpenBiotech and Fathym system, pre-configured automations and launch pads are referred to as Low-Code Units (LCUs). Without getting bogged down in jargon, we will provide a quick overview here as you will see the term LCU pop up. 

LCUs are essentially curated code packages that can be deployed to your enterprise, composable automations of all sorts of software components, configurations and services. These flexible packages are versatile and can range from instructions for creating repositories and scaffolding code, to installing API configurations or deploying cloud resources or app templates. They are building blocks for efficiently assembling and deploying applications in the cloud. 

For example, there are LCUs for launching SPA starter apps, for setting up, scaffolding and deploying new repositories, for installing Google Tag Manager to an app, and for deploying containerized applications, CMS or databases on Azure. Individual LCU components are also combined to create launch pads – comprehensive and often full stack automations that drastically simplify the process of assembling and launching cloud-based applications for various application use cases. An example of this is the biotech launch pad. 

## Biotech launch pad 

The biotech launch pad consists of a data dashboard and a Freeboard dashboard that are auto populated with device data from IoT Ensemble when deployed. To install this package, we are simply going to ask the Thinky AI bot to do it.  

Navigate to [Fathym Thinky AI](https://www.fathym.com/thinky)

If you have registered for Fathym already you can set your active enterprise, set your name, and agree to Responsible AI terms. 

![Enterprise Set](https://www.fathym.com/iot/img/screenshots/thinky_active_ent_set.png)

Click on LCU and then Find. 

![Thinky Initial Options](https://www.fathym.com/iot/img/screenshots/thinky_initial_assist_card.png)

![LCU Options](https://www.fathym.com/iot/img/screenshots/thinky_lcu_options.png)

Thinky will then provide a list of available LCU packages, but you can further filter the list by typing ‘biotech’. 

Select Biotech Launch Pad – GitHub Fork. 

![Biotech GH LCU](https://www.fathym.com/iot/img/screenshots/thinky_biotech_gh_lcucard.png)

:::note
Alternatively, click the Install button and enter the full LCU package name in the chat: ```@o-biotech/lcu-biotech-iot-launch-control@thinky```
:::

Thinky then brings you through several steps to collect information. 

Many LCU packages collect various parameters to define and set the conditions of their operation. For example, as an LCU is installed Thinky can request information such as selecting a GitHub organization or Fathym project, or inputting API keys, a location or a container ID for Google Tag Manager. This enables Thinky to operate as a virtual developer and fully set everything up on your behalf. 

For this launch pad, Thinky will first ask what (new or existing) project to deploy the package to. In this case, select the option to create a new project. Thinky will prompt you to authorize GitHub if not authorized yet and then select the GitHub organization you would like to fork the code into.

![Thinky New Project](https://www.fathym.com/iot/img/screenshots/thinky_create_new_project.png)

![Thinky GitHub Auth](https://www.fathym.com/iot/img/screenshots/thinky_gh_auth.png)

![Thinky GitHub Organization](https://www.fathym.com/iot/img/screenshots/thinky_gh_org_selection.png)

Thinky will then ask for your IoT Ensemble API key and provide a link that navigates to your IoT Ensemble dashboard. 

![Thinky IoT Launch](https://www.fathym.com/iot/img/screenshots/thinky_iot_api_card.png)

Copy your API key and paste it in the chat. 

![IoT API Keys](https://www.fathym.com/iot/img/screenshots/iot_api_keys.png)

Thinky will ask for your Habistack API key and provide a link that navigates to your Habistack dashboard. Again, copy the API key and paste it in the chat.  

Thinky will ask for a Geocodio API key. Geocodio is a third-part tool that provides an API for defining specific locations for American and Canadian addresses. You can sign up for free and easily fetch your API key (Thinky provides a link to the Geocodio API dashboard).  

![Geocodio API Keys](https://www.fathym.com/iot/img/screenshots/geocodio_api_keys.png)

To conclude the required steps for this launch pad, Thinky will ask you to enter the default location to load the data for. Enter a town or city (e.g., Boulder, Colorado) or perhaps the address for your house or apartment. 

At this point the launch is all set to run and will commence installation.  

![Biotech LCU Phases](https://www.fathym.com/iot/img/screenshots/thinky_biotech_gh_phases.png)

Once the launch pad deployment is complete, you can view it in your [Fathym Dashboard](https://www.fathym.com/dashboard/) 

As you can see, four routes have been deployed: /, /api, /dashboard and /freeboard.

![Biotech Routes](https://www.fathym.com/iot/img/screenshots/biotech_routes_configured.png)

Under / is a landing page that introduces the biotech launch pad. Click the launch button to open the page in your browser.

![Biotech Homepage Route](https://www.fathym.com/iot/img/screenshots/biotech_homepage_route.png)

Under /api there are four APIs configured for this project: IoT Ensemble, Habistack, Geocodio and also the API for Freeboard.   

![Biotech API Routes](https://www.fathym.com/iot/img/screenshots/biotech_api_routes.png)

Under /dashboard is a data dashboard that pulls forecast data from Habistack and emulated and/or custom device data from IoT Ensemble. Click the launch button to open the dashboard in your browser. 

![Biotech Data Dashboard Route](https://www.fathym.com/iot/img/screenshots/biotech_data_dashboard_route.png)

Under /Freeboard is a freeboard dashboard that was deployed from an NPM package. Click the launch button to open the dashboard in your browser.  

![Biotech Freeboard Route](https://www.fathym.com/iot/img/screenshots/biotech_freeboard_route.png)

Freeboard is a simple and open-source dashboard for viewing Internet of Things data. To switch off emulated data so that only custom device data populates the dashboard, click the edit button at the top of the dashboard. 

![Freeboard Edit Button](https://www.fathym.com/iot/img/screenshots/freeboard_edit_button.png)

Under data sources, click on Fathym Device Data and the following form will appear. In the URL field, simply change ‘true’ to ‘false’ and click Save. 

![Freeboard DataSource Settings](https://www.fathym.com/iot/img/screenshots/freeboard_datasource_settings.png)

## Configure dashboard state 

When the launch pad is deployed, the data dashboard is auto-populated with emulated data and, if a device is hooked up to IoT Ensemble, that device’s data will also load. The purpose of the emulated data is to show how the dashboard looks and works if you launched the dashboard without a connected device, and to help assess and potentially modify the dashboard before connecting a device. 

However, if you have a connected device and presumably only want to view custom device data streaming into your dashboard, there’s an easy way to configure the dashboard for that without digging into and updating the source code in GitHub.  

The Fathym platform has a State Config tool that can override and modify an application’s state config file (in its GitHub repository). In this case, we want to modify the state config of the data dashboard route to switch off the emulated data stream.  

In the project for your deployed biotech launch pad, click on the edit button for the /dashboard route. 

![Biotech Data Dashboard Route](https://www.fathym.com/iot/img/screenshots/biotech_data_dashboard_route.png)

To the right of the dashboard, you should now see the Manage State Config tool. Click on Edit Config. 

![State Config Button](https://www.fathym.com/iot/img/screenshots/manage_state_config_button.png)

The following JSON value will already populate the field. 

![State Config Settings](https://www.fathym.com/iot/img/screenshots/state_config_settings.png)

Change ```includeEmulated=true``` to ```includeEmulated=false``` and click Save.  

Then click the launch button beside the /dashboard route to open the data dashboard in your browser. If a device is connected to IoT Ensemble, you will now only view that device data in the dashboard. If no device is connected, no data will load at all. 
