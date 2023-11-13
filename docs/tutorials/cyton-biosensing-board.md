---
title: Connecting OpenBCI's Cyton Hardware and Streaming Live Sensor Data with IoT Ensemble
hide_title: true
sidebar_label: Connect OpenBCI's Cyton Hardware to IoT Ensemble
keywords:
    - iot
    - iot ensemble
    - fathym
    - azure
    - connect a device
    - iot hub
    - dashboard
    - biotech
    - cyton
hide_table_of_contents: true
---

# Connecting OpenBCI's Cyton Hardware and Streaming Live Sensor Data with Fathym's IoT Ensemble

![Cyton Biosensing Board](https://www.fathym.com/iot/img/cyton_biosensing_board.png)

In this tutorial, we will be taking OpenBCI’s Cyton Biosensing Board, reading its sensor datastreams, and sending real-time messages to Fathym's IoT Ensemble. The Cyton allows you to gather 8-channels of scientifically-validated physiological data.

## Things you will need

- **Cyton Biosensing Board** 
:::info
Cyton Biosensing Board can be purchased at: https://shop.openbci.com/products/cyton-biosensing-board-8-channel
:::
- **A Windows computer/laptop PC operating system**
:::note
Program only functions for Windows OS currently. 
:::
- **OpenBiotech Data Streaming Application**
:::info
OpenBiotech's IoT streaming application can be downloaded here: https://github.com/o-biotech/openbiotech-iot-stream-brainflow/releases
:::

## Part 1 - Hooking Up Your Hardware
1. You will need to plug in your USB “dongle” into your computer. Ensure that the small toggle on your USB dongle is set to “GPIO_6.”

2. Plug in the provided lithium ion battery into the Cyton board itself. 

3. Once this is done, slide the small toggle switch to “PC.”

If you need additional docs for setting up the Cyton board, go [here](https://docs.openbci.com/GettingStarted/Boards/CytonGS/)

:::note 
No need to install OpenBCI’s GUI, just follow the hardware setup portion.
:::

## Part 2 - Download the OpenBiotech IoT Stream Application

Now that we have the board set up, we need to download and install the data streaming application to your Windows PC. 

1. Download the “.msi” file from the release page [here](https://github.com/o-biotech/openbiotech-iot-stream-brainflow/releases).

2. Run the downloaded file, which should open up a wizard installer.

3. Complete step through of the installation wizard.

![Biotech Wizard Start Screen](https://www.fathym.com/iot/img/startscreen_biotech_wizard_installer.png)

:::tip
Certain firewalls/virus protection programs may attempt to block the download/install of the file. Be sure to make a firewall exception in order for the application to install/run.
:::

## Part 3 - Register with Fathym IoT Ensemble and Create a Device

To get started with OpenBiotech’s tools, simply [sign up for fathym](https://www.fathym.com/) for free on the Fathym website. This will give you access to the Fathym Platform, IoT Ensemble and Habistack.

First you will land on the Fathym platform dashboard. To get started with OpenBiotech, let’s navigate to the IoT Ensemble dashboard. In the navbar, click Discover.  

![Dashboard Header Links](https://www.fathym.com/img/screenshots/fathym_dashboard_header_links.png)

Then select and launch IoT Ensemble. 

![Launch IoT Ensemble Card](https://www.fathym.com/img/screenshots/launch_iot_ensemble_card.png)

To get started with a device, simply enter a device name and enroll it.

![Enroll New Device](https://www.fathym.com/iot/img/screenshots/dashboard-enroll-device.png)

We'll start off with a symmetric key protected device, and can move to other security in the future.  Once created, the connection string will be available for use in the next steps.

![Device List](https://www.fathym.com/iot/img/screenshots/dashboard-device-list-first-device.png)

All that's needed for the following sections is the device connection string.  Copy it from the dashboard, after creating a first device, using the ![Icon Copy](https://www.fathym.com/iot/img/screenshots/icon-copy.png) button.

![Copy Connection String](https://www.fathym.com/iot/img/screenshots/dashboard-device-list-single-record.png)

:::note
When connecting devices, the connection is to a cloud-native Azure IoT Hub.  We don't place any technology between the device and the IoT Hub, making it possible to develop solutions with the full capabilities of Azure IoT Hub.  [Read more](https://docs.microsoft.com/en-us/azure/iot-hub/quickstart-send-telemetry-cli) on how to connect devices using the connection string.
:::

## Part 4 - Running the application and Streaming your Data

1. Open the newly installed OpenBiotech IoT Stream - Brainflow application. This application utilizes Brainflow, a library for obtaining, parsing and analyzing EEG, EMG, ECG and other kinds of data from biosensors. 

![OpenBiotech Connection String Prompt](https://www.fathym.com/iot/img/brainflow_connection_string_prompt.png)

2. When prompted, paste your IoT Ensemble connection string (copied from the previous step).

3. The application will ask you to select which computer port the Cyton is connected to. Type the corresponding port selection and hit enter.

![OpenBiotech Port Selection](https://www.fathym.com/iot/img/brainflow_port_selection.png)

If everything is correct, the application will start to read and pull data from the Cyton board, and send them to the device created within IoT Emsemble.

![OpenBiotech Datastream](https://www.fathym.com/iot/img/brainflow_datastream.png)

From there, you can use IoT Ensemble’s built in [API endpoints](https://www.openbiotech.co/docs/ingest-process-send/connecting-downstream) to query and access your data.