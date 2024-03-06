---
title: Integrate with OpenBiotech APIs 
hide_title: true
sidebar_label: Integrate OpenBiotech APIs  
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

# Integrating with OpenBiotech APIs Overview

Serving as a reverse proxy, an API Proxy processor makes it possible to access APIs without divulging sensitive security keys. 

To connect to OpenBiotech APIs or any other APIs, we need to configure an API proxy by adding it to our project (that was set up in the previous section). Let’s create an API proxy for OpenBiotech's Warm API. 

## Configure an API Proxy 

To configure an API proxy, you need to add a new route to your project. Click the edit button to enter the project dashboard and then click Add Route. A Create Application form will pop up.

![Application Form](https://www.fathym.com/iot/img/screenshots/create_application_form.png)

First, select Proxy and API in the Type fields.

![Application Form](https://www.fathym.com/iot/img/screenshots/create_application_api_proxy.png)

Now you need to give the proxy a name, description and a path for the route.  

**Name:** ```OpenBiotech Warm API Proxy``` 

**Description:** ```The API Proxy for the OpenBiotech Warm API```  

**Route:** ```/api/openbiotech```   

The next steps are to complete the Inbound Path, API Root and Security fields. To do this, we need to access the [OpenBiotech APIs dashboard](https://dashboard.openbiotech.co/apis).  

![API Keys](https://www.fathym.com/iot/img/screenshots/biotech_api_storage_access_dark.png)

For the Warm Storage APIs, use the copy button to copy the API URL and paste it in the API proxy’s API Root field. Likewise, use the copy button to copy the API Access Token and paste the value after _Authorization~Bearer _ in the Security field.  

**Inbound Path:** ```api/openbiotech```

**API Root:** ```https://dashboard.openbiotech.co/api/data/warm/explorer```

**Security:** ```Authorization~Bearer <API ACCESS TOKEN>``` 

Once these steps are completed, click Save Application. An API proxy for OpenBiotech Warm API is now configured for the project and will retrieve simulated or real device data streaming from OpenBiotech. 

## Configure additional API integrations  

With Fathym’s modular application structure, additional API integrations can be added as child applications to the project’s API route. For example, the route is configured as /api and an API proxy for IoT Ensemble could be configured as a child application /iot within that. The path is then /api/iot. 

The API Proxy for Habistack could be configured as /api/forecast, and if an API proxy is configured for Freeboard, it could be /api/freeboard. When multiple API proxies are configured under an /api route, this is how it looks in the dashboard. 

![Biotech API Routes](https://www.fathym.com/iot/img/screenshots/biotech_api_routes.png)