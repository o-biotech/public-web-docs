---
slug: best-practice-schema
title: Deep Dive - IoT Schema Explained
hide_title: true
sidebar_label: IoT Schema Explained 
keywords:
    - IoT
    - IoT Ensemble
    - Fathym
    - best practice schema
hide_table_of_contents: true
---

# IoT Best Practice Schema Explained

To get the most out of the system, we recommend using our best practice schema to send IoT messages. This allows for the collection of device data, sensor readings, and sensor metadata to deliver a rich, pre-configured IoT experience.   In short, the structure is as follows:

```json
{
    "DeviceID": "{your-device-id}",
    "DeviceType": "{your-device-type}",
    "Version": "{your-message-version}",
    "Timestamp": "{telemetry-timestamp}",
    "DeviceData": {
        "PropertyName": {valid-json-value},
        ...
    },
    "SensorReadings": {
        "PropertyName": {number},
        ...
    },
    "SensorMetadata": {
        "_": {
            "PropertyName": {number 0-1.0},
            ...
        },
        "{SensorReadingPropertyName}": {
            "PropertyName": {number 0-1.0},
            ...
        }
    },
}
```

Following is a brief explanation of our best practice schema and how to use it.

:::note

If not using the best practice schema, data will still be accessible throughout the system. However, some more advanced features won't be accessible.

:::

## Root Properties

The root properties of the best practice schema are used for identifying, routing, and sequencing messages.

### DeviceID

The **DeviceID** is required string value and we recommend using the Device Name (or full Device ID) from the devices created in the dashboard.  If you would like to use a value other than these two, it is supported, just ensure your DeviceID is unique across all deployed devices.

### DeviceType

The **DeviceType** is optional, though recommended to properly work with historic data.  It is best for this to be a short descriptive value (i.e. 'boiler-monitor').

### Version

The **Version** is optional, though recommended to properly work with historic data.  We recommend adopting a [semantic versioning](https://semver.org/) strategy, though any string will work.

### Timestamp

The **Timestamp** is required to properly sequence the messages sent from device to cloud.  It should be in the ISO 8601 format as shown in the example below.

## **DeviceData** Property

When working with sensor/gateway setups, there is often a set of information more static to the device.  This could be latitudue and longitude information, building information, or anything else that isn't a sensor reading.

## **SensorReadings** Property

The information collected here should be numeric in order to work with downstream processing.  If the sensor is not returning numeric values, they should  be converted on the client side.

## **SensorMetadata** Property
On top of the readings sensors are taking, there can often be additional information to track (power, connectivity) for use in health monitoring and maintenance.  These values should be numeric and represent any valid number between 0 and 1 where 1 represents fully functioning and 0 represents not working.  As an example, a battery that is fully charged would be set to 1, where as a depleted battery would be set to 0.

### Special **_** Property

This special property on the SensorMetadata allows sending information relating to a gateway or other non-sensor health information.

## Payload Examples

### Open Biotech Data Example

```json
{
  "iothub-connection-device-id": "cytondevice",
  "iothub-enqueuedtime": "2024-02-08T17:44:51.1640000Z",
  "timestamp": "2024-02-08T17:44:51.2090000Z",
  "DeviceID": "CytonBoard",
  "DeviceType": "EEG",
  "Version": "1.0",
  "SensorReadings": {
    "1": "-154361.28131881732",
    "2": "-154929.50736636014",
    "3": "-154641.48278730904",
    "4": "-155028.7491117417",
    "5": "132315.68870731458",
    "6": "18695.513152541298",
    "7": "-68085.33586088847",
    "8": "-154866.43074350726"
  }
}
```
