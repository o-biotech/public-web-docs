---
title: Developers - Device Setup - Connect - HTTP
hide_title: true
sidebar_label: HTTP
keywords:
    - iot
    - fathym
    - iot ensemble
    - azure
    - connect a device
    - iot hub
    - postman
    - insomnia
hide_table_of_contents: true
---

# Connecting with HTTP

Next, we'll layout how you can use your connection string to generate a simple HTTP request to send data to the Azure IoT Hub.

## Connection String

The connection string for your device is displayed in your IoT Flow settings on the OpenBiotech dashboard.  It contains the DeviceId which is needed to make the requests.

![IoT Flow Settings](https://www.fathym.com/iot/img/screenshots/openbiotech-iot-flow-settings-cs.png)

To quickly copy the Device Connection String use the ![Icon Copy](https://www.fathym.com/iot/img/screenshots/bt_copy_button.png) button

## Obtain API Access Token

The API Access Token will be located in the OpenBiotech dashboard on the API tab. 

![API Storage Access](https://www.fathym.com/iot/img/screenshots/biotech_api_storage_access_dark_highlights.png)

To quickly copy the storage access keys use the ![Icon Copy](https://www.fathym.com/iot/img/screenshots/bt_copy_button.png) button

## cURL Request

We've laid out a curl command for the example below.

```cli
curl -X POST \
  https://dashboard.openbiotech.co/api/data/warm/explorer/devices/{device-id}/messages/events?api-version=2018-06-30 \
  -H 'Authorization: Bearer {token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "DeviceID":"{device-id}",
    "DeviceType":"Generic",
    "Timestamp":"2023-11-14T00:26:30.0217778+00:00",
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
    },
}'
```
:::tip
Need help installing Git and cURL for Windows 11/10? Here's a helpful [tutorial](https://www.youtube.com/watch?v=uBUHJOE4oP8) and [Git download link](https://git-scm.com/)
:::
