---
title: Getting Started - Data
hide_title: true
sidebar_label: Data
keywords:
    - iot
    - iot ensemble
    - fathym
    - azure
    - connect a device
    - iot hub
    - dashboard
    - biotech
hide_table_of_contents: true
---

# Set Up Data

The third section of the OpenBiotech getting started workflow is to start flowing and exploring device data in the cloud.

![Biotech Set Up Step 3](https://www.fathym.com/img/screenshots/biotech_set_up_data_step.png)

Within the data section of the getting started workflow are the following three steps:

1.	Confirm Data Flowing
2.	Explore Data
3.	Develop Solutions

![Biotech Set Up Steps](https://www.fathym.com/img/screenshots/biotech_set_up_steps.png)

## 1.) Confirm Data Flowing

In this step you must start flowing data to the cloud, whether real or simulated. This is so the system can start working with data. 

This step uses IoT Hub values generated previously in the Devices section.

![Biotech data Flow Description](https://www.fathym.com/img/screenshots/biotech_data_flow_desc.png)

There are two pathways in this step.

-	Flow physical device data
-	Flow simulated device data

If you have a physical device at hand, there are instructions on using a connection string to establish device-to-cloud telemetry and start flowing real device data to the cloud. If you don’t have a device or prefer to test the system with simulated data first, there are instructions on using Docker to generate simulated IoT Hub data.

![Biotech IoT Hub Keys](https://www.fathym.com/img/screenshots/biotech_iot_hub_keys.png)

To get started, first select the IoT Hub Key you would like to use. These keys are shared access policies that define access control and permissions to IoT Hub.

![Biotech IoT Hub Access Rights](https://www.fathym.com/img/screenshots/biotech_iot_hub_access_rights_selection.png)

We suggest proceeding with _iothubowner_, as it is the policy with all permissions. You can learn more about the permission levels for each IoT Hub Key in these [Azure docs](https://learn.microsoft.com/en-us/azure/iot-hub/authenticate-authorize-sas?tabs=node). 

For each IoT Hub Key role a different Key and Connection String are generated.

Next, select the IoT Hub device. You will see the device name you saved in the Devices section.

![Biotech IoT Hub Device List](https://www.fathym.com/img/screenshots/biotech_iot_device_list.png)

### Physical device data:

To connect a physical device to IoT Hub, a Device Connection String is provided.

![Biotech IoT Device Connection String](https://www.fathym.com/img/screenshots/biotech_device_connection_String.png)

:::info
This Device Connection String consists of the Hostname, Device ID that was just selected and a Shared Access Key. This Connection String is ready to be used on physical devices. Adding a connection string to a device is a different process for different devices. As an example, you can reference the [Cyton tutorial](https://www.openbiotech.co/docs/tutorials/cyton-biosensing-board).
:::

### Simulated device data: 

![Biotech Simulated Data Command](https://www.fathym.com/img/screenshots/biotech_simulated_docker.png)

To flow simulated data to IoT Hub, first install [Docker](https://docs.docker.com/get-docker/) on your computer if you haven’t already. Make sure Docker Desktop is running. 

Copy the provided Docker command and, returning to the Fathym CLI, run the command in your terminal. Data should soon start populating your terminal.

It can take a couple of minutes for that data to be confirmed in OpenBiotech.

![CLI Data Simulator](https://www.fathym.com/img/screenshots/cli_data_simulator.png)

When the system has confirmed that simulated device data is flowing to IoT Hub, click Move to Explore Data.

![Biotech Explore Data Button](https://www.fathym.com/img/screenshots/biotech_explore_data_button.png)

## 2.) Explore Data

Now that data is flowing into the system, this step provides initial access to the data dashboard services that were configured earlier in the workflow – Azure Data Explorer and Freeboard.

![Biotech Confirm Data Flowing](https://www.fathym.com/img/screenshots/biotech_confirm_data_step.png)

You can start exploring the device data that is now flowing into these services or continue to the next step. You will also have access to these services once this workflow is complete.

![Biotech Confirm Data Flowing](https://www.fathym.com/img/screenshots/azure_storage_explorer.png)

## 3.) Develop Solutions

Finally, this step provides API access so you can connect and send data downstream to any third-party system or assemble and deploy custom applications powered by device data.

![Biotech Develop Solutions Step](https://www.fathym.com/img/screenshots/biotech_develop_solutions_step.png)

The provided API URL and ACCESS TOKEN enable you to call the warm data API that was configured earlier. You will also have access to these API values once this workflow is complete.

![Biotech API Access](https://www.fathym.com/img/screenshots/biotech_api_access.png)

Use the format ‘Bearer (token)’ when incorporating the API Access Token as an authorization header in third-party services (such as Power BI).

When ready, click Complete Getting Started Setup to finish the workflow and move on to the main dashboards.






