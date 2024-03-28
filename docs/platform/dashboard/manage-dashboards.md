---
title: Manage Dashboards
hide_title: true
sidebar_label: Manage Dashboards
keywords:
    - iot
    - fathym
    - iot ensemble
    - azure
    - logic apps
    - alerts
    - notifications
    - email
    - text
    - biotech
hide_table_of_contents: true
---

# Managing OpenBiotech Dashboards 

In the getting started workflow there is the opportunity [to select and install](https://www.openbiotech.co/docs/getting-started/devices) default data dashboard services. These dashboard services provide an accessible, in-platform way to view and explore device data.

There are currently two dashboard services, one required and one optional:

- **Azure Data Explorer (required):** [Azure Data Explorer](https://azure.microsoft.com/en-us/products/data-explorer) is an analytics service for real-time and time-series analysis on large volumes of data streams. Use it to quickly identify patterns, anomalies and trends in your data. Azure Data Explorer’s primary purpose is to power OpenBiotech’s turnkey [Device Data Dashboard](https://www.openbiotech.co/docs/platform/dashboard/device-data-dashboard) (this is why its installation is required), but you can also access and use Azure Data Explorer directly within the platform. 

- **Freeboard (optional):** [Freeboard](https://github.com/Freeboard/freeboard) is an open-source, configurable dashboard for viewing real-time device data.

To access and manage these dashboard services from the OpenBiotech platform, view the sidebar to the left. 

![OpenBiotech Device Data Dashboard](https://www.fathym.com/iot/img/screenshots/biotech-device-data-dashboard.png)

Select the ![OpenBiotech IoT Settings Icon](https://www.fathym.com/iot/img/screenshots/biotech-iot-settings-icon.png) button and the IoT section will expand.

![OpenBiotech IoT Sidebar Expanded](https://www.fathym.com/iot/img/screenshots/biotech-iot-sidebar-expanded.png)

In the Dashboards part, you can access and load Azure Data Explorer’s interface by clicking the edit button beside it.

![OpenBiotech Azure Data Explorer](https://www.fathym.com/iot/img/screenshots/biotech-azure-data-explorer.png)

To start working with Azure Data Explorer, visit this [Azure documentation](https://learn.microsoft.com/en-us/azure/data-explorer/). 

If Freeboard was installed in the getting started workflow it would also appear under Dashboards in the IoT sidebar. For this enterprise Freeboard is not yet installed, but if you wish to install it at any point, click on Create Dashboard. 

![OpenBiotech Create New Dashboard](https://www.fathym.com/iot/img/screenshots/biotech-create-new-dashboard.png)

From the Dashboard Type dropdown menu, select Freeboard (the only option currently) and then click Add Dashboard. Freeboard will now be installed on the platform. 

![OpenBiotech Create New Dashboard Dropdown](https://www.fathym.com/iot/img/screenshots/biotech-create-dashboard-dropdown-selection.png)


