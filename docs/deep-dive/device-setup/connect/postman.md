---
title: Developers - Device Setup - Connect - Postman
hide_title: true
sidebar_label: Postman
keywords:
    - iot
    - fathym
    - OpenEnsemble
    - azure
    - connect a device
    - iot hub
    - postman
    - openbiotech
hide_table_of_contents: true
---

# Connecting with Postman

Postman is a collaboration platform for API development.  You can download Postman or use the web version from [here](https://www.postman.com/).

## Connection String
The connection string for your device is displayed on your OpenEnsemble dashboard. It contains the DeviceId which is needed to make requests.

![IoT Flow Settings](https://www.fathym.com/iot/img/screenshots/openbiotech-iot-flow-settings-cs.png)

To quickly copy the Device Connection String use the ![Icon Copy](https://www.fathym.com/iot/img/screenshots/bt_copy_button.png) button

## API Access Token
The easiest way to get an API Access Token for some of these examples will be via an OpenEnsemble dashboard. On the APIs tab, you will find a button to copy the API Access Token at the top of the page. 

![API Storage Access](https://www.fathym.com/iot/img/screenshots/biotech_api_storage_access_dark_highlights.png)

## Postman Request
To send a request with Postman, follow these steps:

1. Start Postman, then create a new request by selecting the **New Request** button.
2. Change the request method from **GET** to **POST** via the dropdown at the top of the request.
3. Enter the Storage URL in the **Enter request URL** text box. A sample one is below from OpenIndustrial. 

    https://www.openindustrial.co/api/o-biotech/data/warm/explorer

4. Select the **Authorization** tab on your Postman request, then add a new Auth Type of **Bearer Token** and set its Token value to **API Access Token** from an OpenEnsemble dashboard (described above).  

5. Select the **Body** tab on your Postman request, then select the **Raw** radio button and paste the following query into the body text box.  Replace **{DeviceID}** with the **DeviceID** from the connection string from an OpenEnsemble dashboard (described above).
   
```console
{
  "Query": "Devices | where DeviceID == \"DHT22\" | project DeviceID, EnqueuedTime, MessageID, EventData = RawData[\"SensorReadings\"] | sort by EnqueuedTime desc | take 100"
}

```
7. Select **Send** to send the request.  You should receive a **200 OK** response along with a preview of the data. 

In the preview below, you are seeing data being returned for a DHT22 Temperature/Humidity device.

![Postman Post Query Dashboard](https://www.fathym.com/iot/img/screenshots/postman-post-query-dashboard.png)

