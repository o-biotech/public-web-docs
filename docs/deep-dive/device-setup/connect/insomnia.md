---
title: Developers - Device Setup - Connect - Insomnia
hide_title: true
sidebar_label: Insomnia
keywords:
    - iot
    - fathym
    - iot ensemble
    - azure
    - connect a device
    - iot hub
    - openbiotech
    - insomnia
hide_table_of_contents: true
---

# Connecting with Insomnia

Insomnia is a free cross-platform desktop application that takes the pain out of interacting with HTTP-based APIs.  You can download Insomnia from [here](https://insomnia.rest)

## Connection String
The connection string for your device is displayed on your OpenEnsemble dashboard. It contains the DeviceId which is needed to make requests.

![IoT Flow Settings](https://www.fathym.com/iot/img/screenshots/openbiotech-iot-flow-settings-cs.png)

To quickly copy the Device Connection String use the ![Icon Copy](https://www.fathym.com/iot/img/screenshots/bt_copy_button.png) button

## API Access Token
The easiest way to get an API Access Token for some of these examples will be via an OpenEnsemble dashboard. On the APIs tab, you will find a button to copy the API Access Token at the top of the page. 

![API Storage Access](https://www.fathym.com/iot/img/screenshots/biotech_api_storage_access_dark_highlights.png)

## Insomnia Request
To send a request with Insomnia, follow these steps:

1. Start Insomnia and open or create a workspace. Then select the **Create** button and select Request Collection.
2. Give the Request Collection a name of your choosing and select Create.
3. Select **New HTTP Request** button. 
4. Change the request method dropdown from **GET** to **POST**.
5. Enter the Storage URL in the **URL** text box. A sample one is below from OpenIndustrial. 

    https://www.openindustrial.co/api/o-biotech/data/warm/explorer

6. Select the **Body** tab on your Insomnia request, then select the **JSON** from the dropdown menu. 

Paste the following query into the body text box.  Replace **{DeviceID}** with the **DeviceID** from the connection string from an OpenEnsemble dashboard (described above).
   
```console
{
  "Query": "Devices | where DeviceID == \"DHT22\" | project DeviceID, EnqueuedTime, MessageID, EventData = RawData[\"SensorReadings\"] | sort by EnqueuedTime desc | take 100"
}

```

7. Select the **Auth** tab on your Insomnia request, then add a new Auth Type of **Bearer Token** from the dropdown menu. Set its Token value to **API Access Token** from an OpenEnsemble dashboard (described above).  

8. Select **Send** to send the request.  You should receive a **200 OK** response along with a preview of the data. 

In the preview below, you are seeing data being returned for a DHT22 Temperature/Humidity device.

![Postman Post Query Dashboard](https://www.fathym.com/iot/img/screenshots/insomnia-post-query-dashboard.png)