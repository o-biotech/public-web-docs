---
slug: connecting-downstream
title: Connecting Downstream Services
hide_title: true
sidebar_label: Connect Downstream
keywords:
    - iot
    - iot ensemble
    - fathym
    - azure
    - connect a device
    - iot hub
    - downstream services
    - cold storage
    - warm storage
    - power bi
hide_table_of_contents: true
---

# Connecting Downstream Services

The main goal of an IoT Solution is the need to collect device data and bring it into a set of preferred tools for visualization, AI/ML, application development, and more.  The following is a high level look at the APIs available for storage access and how to use them to get data downstream to other services.

## Storage Access

While our APIs allow connections directly with data sources, there is still often a need to massage the data into the correct format for other integrations (Azure Machine Learning's automated ML feature needs data in json lines or CSV format).  

When working with IoT storage data, how it is stored and what interval it is stored at is extremely important to the overall cost of the system.  We break our storage into three categories that support a cost-efficient way to handle data storage and access.  Cold storage contains historic data, warm storage contains near-term queryable data, and hot storage provides a way to stream individual messages to other services in real time.  The following high-level walk-through outlines APIs for accessing these storage types.

:::note

This storage access documentation focuses on our pre-built APIs available to all OpenBiotech users.

:::

### Access Keys

There are a few different places to locate API keys, the simplest is from the Storage Access section at the bottom of the dashboard.

![Storage Access](https://www.fathym.com/iot/img/screenshots/dashboard-storage-access.png)

To quickly copy storage access keys, use the ![Icon Copy](https://www.fathym.com/iot/img/screenshots/icon-copy.png) button, or use the ![Icon View](https://www.fathym.com/iot/img/screenshots/icon-view.png) and ![Icon Hide](https://www.fathym.com/iot/img/screenshots/icon-hide.png) buttons to toggle the visibility of the keys on screen.  

<!-- If needing to regenerate either of the keys, use the <img src="https://www.fathym.com/iot/img/screenshots/icon-refresh.png" class="text-image" /> button. -->

### Cold Storage

For many use cases, cold storage historic data can be formatted in an efficient way to support service integrations.  The APIs provided to access this data are geared at helping grab a time period of data and format it in a number of ways (JSON, CSV, JSON Lines, etc).  Use the dashboard to interactively call the **ColdQuery** endpoint, and explore the available parameters.  Following is a simple example that could be used to retrieve device telemetry data for Microsoft Power BI:

```cli
curl -X GET "https://fathym-cloud-prd.azure-api.net/fcp-iotensemble/ColdQuery?dataType=Telemetry&resultType=JSON&flatten=false" -H  "lcu-subscription-key: {subscription-key}"
```

There are values to replace and adjust the parameters as desired.  Here is a description on where to find the values for replacement.

- **{subscription-key}**  
The {subscription-key} can be located in the API Keys section as described above.

### Warm Storage

A queryable storage location, warm storage offers a way to work with data in a dynamic, no-sql way.  This storage type comes with a larger cost, and for that reason, controlling the amount of data in this storage is important.  Depending on license, the amount of data available in warm storage will vary.  With enterprise licenses, the retention period can be tuned to meet application needs and cost concerns.  Use the dashboard to interactively call the **WarmQuery** endpoint, and explore the available parameters.  Following is a simple example that could be used to retrieve device telemetry data for use in an application:

```cli
curl -X GET "https://fathym-cloud-prd.azure-api.net/fcp-iotensemble/WarmQuery?includeEmulated=false" -H  "lcu-subscription-key: {subscription-key}"
```

You can replace values and adjust the arguments as desired.  Here is a description of where to find the values for replacement.

- **{subscription-key}**  
The {subscription-key} can be located in the API Keys section as described above.

<!-- 
### Hot Storage

#### Webhooks

## Example Connections

The purpose of the storage access APIs is to provide a secure way to access data for visualizations, AI/ML, application development and more.  Using the provided APIs, many different types of integrations are possible.  For a complete look, read the [storage access guide](../devs/storage/overview) or dive right into [the examples](../devs/storage//overview).
 -->

## Downstream Services

 The purpose of the Storage Access APIs is to give rapid access to device data in a number of different formats that is ready to be used with other systems. In the next section, we will guide you on how to combine these APIs with the Fathym Platform to integrate with and launch cloud apps powered by device data, and on how to use the APIs to send device data downstream to various third-party services for dashboards (Power BI, Grafana, Tableau, SQL Server), alerts (Azure Logic Apps, Grafana) and AI/ML (Azure ML).
