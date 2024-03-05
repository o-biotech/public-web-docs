---
title: Developers - Device Setup - Connect - Postman
hide_title: true
sidebar_label: Postman
keywords:
    - iot
    - fathym
    - iot ensemble
    - azure
    - connect a device
    - iot hub
    - postman
    - openbiotech
hide_table_of_contents: true
---

# Connecting with Postman

Postman is a collaboration platform for API development.  You can download Postman from here:

https://www.postman.com/

## Connection String
The connection string for your device is displayed on your IoT Ensemble dashboard. It contains the DeviceId which is needed to make requests.

## Generate SAS Token
The easiest way to get a SAS Token going for some of these examples will be via your IoT Ensemble dashboard. Next to the device, you will find a link to generate a SAS token. This is never saved in the system, and can only be accessed the first time you see it.

## Postman Request
To send a request with Postman, follow these steps:

1. Start Postman, then create a new request by selecting the **File -> New -> Request** menu option, or via the **New** button.
2. Enter a name for the request on the **Save Request** dialog, select a folder to save it to, then select **Save**.
3. Change the request method from **GET** to **POST** via the dropdown at the top of the request.
4. Enter the following URL in the **Enter request URL** text box.  Replace **{device-id}** in the URL with the **DeviceId** from the connection string from your IoT Ensemble dashboard (described above).

    https://fathym-cloud-prd.azure-devices.net/devices/{device-id}/messages/events?api-version=2018-06-30

    For example, if your connection string looked like this:

    `HostName=fathym-cloud-prd.azure-devices.net;DeviceId=f1e5c1b5-f86b-4d08-99c1-efbf8fbbf6f1-Test-Device;SharedAccessKey=6cmhsKbRxOX8oin1XTJXTfTO9R5Fhs8bT4QaWCE19&k1`

    Then the URL would look like this:

    `https://fathym-cloud-prd.azure-devices.net/devices/f1e5c1b5-f86b-4d08-99c1-efbf8fbbf6f1-Test-Device/messages/events?api-version=2018-06-30`

5. Select the **Headers** tab on your Postman request, then add a new header with a key of **Authorization** and set its value to the value of the **SAS Token** from the IoT Ensemble dashboard (described above).  It should look similar to this:

    `Authorization SharedAccessSignature sr=fathym-cloud-prd.azure-devices.net%2Fdevices%2Ff1e5c1b5-f96b-4c09-99b1-egbf8ecbf5f1-Test-Device&sig=oZcOiPfmz%2BnBEYPuPsPuemwfI%2FSbxcga8CXCLC6iYB0%3D&se=1610045395`

6. Select the **Body** tab on your Postman request, then select the **Raw** radio button and paste the following JSON into the body text box.  Replace **{device-id}** with the **DeviceId** from the connection string from your IoT Ensemble dashboard (described above).
   
```console
{
    "DeviceID":"{device-id}",
    "DeviceType":"Generic",    
    "Timestamp":"2024-11-14T00:26:30.0217778+00:00",
    "Version":"0.0.2",
    "DeviceData": {
        "Latitude": 40.7578,
        "Longitude": -104.9733,
        "Floor": 2,
        "Room": "Conference Room 5"
    },
    "SensorReadings": {
        "Temperature": 105,
        "Humidity": 83,
        "Occupancy": 8,
        "Occupied": 1
    },
    "SensorMetadata": {
        "_": {
            "SignalStrength": 1
        },
        "Temperature": {
            "Battery": 0.4
        }
    }
}
```
7. Select **Send** to send the request.  You should receive a **204 No Content** response.

