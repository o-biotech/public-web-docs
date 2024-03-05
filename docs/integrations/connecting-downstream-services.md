---
slug: connecting-downstream
title: Connecting Downstream Services
hide_title: true
sidebar_label: Overview
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

## API Storage Access

While our APIs allow connections directly with data sources, there is still often a need to massage the data into the correct format for other integrations (Azure Machine Learning's automated ML feature needs data in json lines or CSV format).  

When working with IoT storage data, how it is stored and what interval it is stored at is extremely important to the overall cost of the system.  We break our storage into three categories that support a cost-efficient way to handle data storage and access.  Cold storage contains historic data, warm storage contains near-term queryable data, and hot storage provides a way to stream individual messages to other services in real time.  The following high-level walk-through outlines APIs for accessing these storage types.

:::note

This storage access documentation focuses on our pre-built APIs available to all OpenBiotech users.

:::

### Access Keys

The API keys will be located within the API tab in the dashboard.

![API Storage Access](https://www.fathym.com/iot/img/screenshots/biotech_api_storage_access_dark_highlights.png)

To quickly copy storage access keys use the ![Icon Copy](https://www.fathym.com/iot/img/screenshots/bt_copy_button.png) button

### Cold Storage

For many use cases, cold storage historic data can be formatted in an efficient way to support service integrations.  The APIs provided to access this data are geared at helping grab a time period of data and format it in a number of ways (JSON, CSV, JSON Lines, etc). The following is a simple example that could be used to retrieve device telemetry data for Microsoft Power BI:

```cli
curl -X GET "https://dashboard.openbiotech.co/api/data/cold/execute" -H  "Authorization: Bearer {token}"
```

There are values to replace and adjust the parameters as desired.

:::info
The API Access Token can be located in the API section as described above.
:::

### Warm Storage

A queryable storage location, warm storage offers a way to work with data in a dynamic, no-sql way. This storage type comes with a larger cost, and for that reason, controlling the amount of data in this storage is important. The retention period can be tuned to meet application needs and cost concerns. The following is a simple example that could be used to retrieve device telemetry data for use in an application:

```cli
curl -X GET "https://dashboard.openbiotech.co/api/data/warm/explorer" -H  "Authorization: Bearer {token}"
```

You can replace values and adjust the arguments as desired. 

:::info
The API Access Token can be located in the API section as described above.
:::

### Hot Storage

Hot Storage refers to data that must be accessible immediately and reliably. Data coming from hot storage is known as “data streams.” In order to connect to this API, you will use the Hot Storage URL, API Access Token and connect with a SignalR client in any language. SignalR is an open-source library that facilitates to add real-time functionality to web applications. Using this, the server application can push real-time data to the client. This API can be viewed in action on your main dashboard, on the 'Streaming' tab.

```cli
https://dashboard.openbiotech.co/api/data/hot/connect
```
```cli
Authorization: Bearer {token}
```

:::info
The URL and API Access Token can also be located in the API section as described above.
:::

<!-- 
#### Webhooks

## Example Connections

The purpose of the storage access APIs is to provide a secure way to access data for visualizations, AI/ML, application development and more.  Using the provided APIs, many different types of integrations are possible.  For a complete look, read the [storage access guide](../devs/storage/overview) or dive right into [the examples](../devs/storage//overview).
 -->

## Downstream Services

 The purpose of the Storage Access APIs is to give rapid access to device data in a number of different formats that is ready to be used with other systems. In the next sections, we will guide you on how to combine these APIs to send device data downstream to various third-party services for dashboards (Power BI, Grafana, Tableau, SQL Server), alerts (Azure Logic Apps, Grafana) and AI/ML (Azure ML).

:::tip
Need help installing Git and cURL for Windows 11/10? Here's a helpful [tutorial](https://www.youtube.com/watch?v=uBUHJOE4oP8) and [Git download link](https://git-scm.com/)
:::


