---
title: Developers - Storage Access - SQL Server
hide_title: true
sidebar_label: SQL Server
keywords:
    - iot
    - azure
    - database
    - sql server
    - iot dashboard
hide_table_of_contents: true
---

# Storage Access with Logic Apps and SQL Server

These instructions show how to use Logic Apps to call the Open Biotech warm query every 12 hours and insert the data into a SQL Server database. Before we get started, here's an overview of the entire Logic App with the steps collapsed.

![Completed Steps](https://www.fathym.com/iot/img/screenshots/logic-apps-sql-server-overview.png)

## Step 1: HTTP

For the first step of the Logic App, search for 'HTTP'.

![Search for HTTP](https://www.fathym.com/iot/img/screenshots/alerts/search-for-http.png)

Configure the HTTP trigger with the following settings from your Open Biotech account. This example is using the Warm Query.
- Method: `GET`
- URI: `https://dashboard.openbiotech.co/api/data/cold/execute`
- Header: `Authorization: Bearer ***********`
- How often do you want to check for items?: `12 Hour`

![HTTP Settings](https://www.fathym.com/iot/img/screenshots/alerts/http-settings.png)

:::info
In the HTTP trigger above, use the 'How often do you want to check for items' fields to control how often the HTTP trigger calls the Open Biotech Warm Query for new data.
:::

## Step 2: Compose

For the next step of the Logic App, search for 'Compose'.

![Search for Compose](https://www.fathym.com/iot/img/screenshots/alerts/search-for-compose.png)

For the Compose step we need to list an example JSON payload the Logic App will receive from the HTTP trigger. For the Open Biotech Warm Query, you can use the following:

```
{
  "iothub-connection-device-id": "emotibit",
  "iothub-enqueuedtime": "2024-02-14T16:49:56.2200000Z",
  "DeviceID": "Emotibit",
  "DeviceType": "emotibit",
  "DeviceData": {
    "Timestamp": "1707929392"
  },
  "SensorReadings": {
    "EA": [
      {
        "Data": 0.03017691,
        "Millis": 0
      },
      {
        "Data": 0.030176779,
        "Millis": 134
      }
    ],
    "EL": [
      {
        "Data": 26543.40039,
        "Millis": 0
      },
      {
        "Data": 26543.59961,
        "Millis": 134
      }
    ],
    "PI": [
      {
        "Data": 6421,
        "Millis": 0
      },
      {
        "Data": 6414,
        "Millis": 0
      },
      {
        "Data": 6405,
        "Millis": 0
      },
      {
        "Data": 6424,
        "Millis": 160
      }
    ],
    "PR": [
      {
        "Data": 7675,
        "Millis": 0
      },
      {
        "Data": 7669,
        "Millis": 0
      },
      {
        "Data": 7683,
        "Millis": 0
      },
      {
        "Data": 7697,
        "Millis": 160
      }
    ],
    "PG": [
      {
        "Data": 1223,
        "Millis": 0
      },
      {
        "Data": 1221,
        "Millis": 0
      },
      {
        "Data": 1221,
        "Millis": 0
      },
      {
        "Data": 1232,
        "Millis": 160
      }
    ],
    "TH": [
      {
        "Data": 22.74003029,
        "Millis": 134
      }
    ]
  },
  "SensorMetadata": {
    "BatteryPercentage": 99,
    "MACAddress": "58:f4:cc:7e:dc:0c",
    "EmotibitVersion": "V01b"
  }
}
```

Copy/paste the JSON payload above into the Compose input:

![Compose Settings](https://www.fathym.com/iot/img/screenshots/alerts/compose-settings.png)

## Step 3: Parse JSON

For the next step of the Logic App, search for 'Parse JSON'.

![Search for Parse JSON](https://www.fathym.com/iot/img/screenshots/alerts/search-for-parsejson.png)

For the Parse JSON content, use the dynamic `Outputs` object from the previous Compose step. For the Schema, click the 'Use sample payload to generate schema' link and it will automatically generate the schema based on the `Outputs` object. Refer to the screenshot below:

![Parse JSON Settings](https://www.fathym.com/iot/img/screenshots/alerts/parsejson-settings.png)

## Step 4: For Each

For the next step of the Logic App, search for 'For Each'. Select the 'Control' option.

![Search For Each](https://www.fathym.com/iot/img/screenshots/alerts/search-for-foreach.png)

Within the Controls, select the 'For each' action.

![Search For Each](https://www.fathym.com/iot/img/screenshots/alerts/search-for-foreach-control.png)

For the output, select the dynamic `Payloads` object from the previous Parse JSON step.

![Search For Each](https://www.fathym.com/iot/img/screenshots/logic-apps-for-each-payloads.png)

## Step 5: Insert into SQL Server

Click the 'Add an Action' button to add an action to the For Each. Search for 'sql server' and select the 'SQL Server' option.

![Search for SQL Server](https://www.fathym.com/iot/img/screenshots/logic-apps-choose-operation-sql-server.png)

Within the SQL Server option, select 'Import row'.

![Select SQL Server Import Row](https://www.fathym.com/iot/img/screenshots/logic-apps-sql-server-import-row.png)

After you authorize with the SQL Server, the form will allow you to select your server, database, and table. After those are selected, you can add Parameters for each of your data properties. The screenshot below is based on the IoT Ensemble emulated data.

![List SQL Server Parameters](https://www.fathym.com/iot/img/screenshots/logic-apps-for-each-sql.png)

Save and run the logic app to see it in action.

## Overview of Steps

Here's an overview of the entire Logic App with the steps collapsed. The Logic App calls the IoT Ensemble warm query every 12 hours and inserts the data into a SQL Server database.

![Overview of Steps](https://www.fathym.com/iot/img/screenshots/logic-apps-sql-server-overview.png)
