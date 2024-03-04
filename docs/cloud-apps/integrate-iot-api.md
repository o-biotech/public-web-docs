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

# Integrating with IoT Ensemble APIs Overview

Serving as a reverse proxy, an API Proxy processor makes it possible to access APIs without divulging sensitive security keys.  

To connect to IoT Ensemble APIs or any other APIs, we need to configure an API proxy by adding it to our project (that was set up in the previous section). 

## Configure an API Proxy 

To configure an API proxy, you need to add a new route to your project. Click the edit button to enter the project dashboard and then click Add Route. A Create Application form will pop up. 

![Application Form](https://www.fathym.com/iot/img/screenshots/create_application_form.png)

First, select Proxy and API in the Type fields.

![Application Form](https://www.fathym.com/iot/img/screenshots/create_application_api_proxy.png)

Now you need to give the proxy a name, description and a path for the route.  

**Name:** ```IoT Ensemble API Proxy``` 

**Description:** ```The API Proxy for IoT Ensemble APIs```  

**Route:** ```/api/iot```   

The next steps are to complete the Inbound Path, API Root and Security fields.  

**Inbound Path:** ```api/iot```

**API Root:** ```https://fathym-cloud-prd.azure-api.net/fcp-iotensemble```

**Security:** ```lcu-subscription-key~<API Key Value>``` 

As you can see, for the Security field you need to add your IoT Ensemble API key.  

To retrieve this, navigate to the [IoT Ensemble Dashboard](https://www.fathym.com/dashboard/iot) and copy the primary key value. 

![IoT API Keys](https://www.fathym.com/iot/img/screenshots/iot_api_keys.png)

Then simply paste the value after ```lcu-subscription-key~``` in the security field.  

The Allowed Methods field can remain blank.  

Once these steps are completed, click save application. An API proxy for IoT Ensemble APIs is now configured for the project and will retrieve emulated and/or device data streaming from IoT Ensemble.  

## Configure additional API integrations  

With Fathym’s modular application structure, additional API integrations can be added as child applications to the project’s API route. For example, the route is configured as /api and the API proxy for IoT Ensemble APIs is configured as a child application /iot within that. The path is then /api/iot.  

The API Proxy for [Habistack Dashboard](https://www.fathym.com/dashboard/forecast) could be configured as /api/forecast, and if an API proxy is configured for Freeboard it could be /api/freeboard. When multiple API proxies are configured under an /api route, this is how it looks in the dashboard. 

![Biotech API Routes](https://www.fathym.com/iot/img/screenshots/biotech_api_routes.png)