---
title: Manage Storage Flows
hide_title: true
sidebar_label: Manage Storage Flows
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

# Managing Storage Flows

In the getting started workflow, there is a section that involves [establishing an IoT cloud infrastructure](https://www.openbiotech.co/docs/getting-started/cloud) that configures device data storage and access flows.

There are three data flows, one is required and two are optional. Each flow is best suited for different use cases and involves different data processing costs – cold flow the cheapest and hot flow the most expensive.

- **Cold (optional):** The cold flow allows for long term storage with slower querying performance – ideal for AI/ML and deep analytics.

- **Warm (required):** The warm flow allows for shorter term storage with better querying performance, routing data into a time-series window for analytics, alerts and dashboards.

- **Hot (optional):** The hot flow provides data immediately, with no data storage, into applications such as real-time dashboards. When you select this option OpenBiotech integrates with GitHub and sets up a repository in your preferred organization.

As you can see, the warm storage option is required and always provisioned for OpenBiotech to operate. However, cold and hot flows are optional and so it is possible to update preferences and configure or delete these storage flows.

![OpenBiotech Device Data Dashboard](https://www.fathym.com/iot/img/screenshots/biotech-device-data-dashboard.png)

To update infrastructure preferences from the OpenBiotech platform, view the sidebar to the left.

Select the ![OpenBiotech IoT Settings Icon](https://www.fathym.com/iot/img/screenshots/biotech-iot-settings-icon.png) button and the IoT section will expand.

![OpenBiotech IoT Sidebar Expanded](https://www.fathym.com/iot/img/screenshots/biotech-iot-sidebar-expanded.png)

Click the settings cogwheel button in the IoT sidebar.

![OpenBiotech IoT Flow Settings](https://www.fathym.com/iot/img/screenshots/openbiotech-iotflow-settings-row.png)

This leads you to the Manage EaC IoT Settings page. Here you can manage data storage infrastructure and configure Azure IoT Hub telemetry.

![OpenBiotech Storage Flow Setup](https://www.fathym.com/iot/img/screenshots/openbiotech-manage-storage-flows.png)

The box is checked for warm storage as it was required during setup, but not for cold or hot storage. Now let’s select the cold and/or hot storage options to provision these flows if not yet provisioned during setup.

![OpenBiotech Storage Flow Selection](https://www.fathym.com/iot/img/screenshots/openbiotech-storage-flow-selection.png)

For the hot storage option, you will be prompted to sign into GitHub (If you do not yet have GitHub, [sign up here](https://github.com/).)

To enable OpenBiotech to configure GitHub on your behalf, you will be prompted to install the GitHub app [OpenBiotech Web Manager](https://github.com/apps/open-biotech-web-manager). You will then be able to select one of your GitHub organizations.

![OpenBiotech Storage Flow GitHub Setup](https://www.fathym.com/iot/img/screenshots/openbiotech-storage-github-setup.png)

OpenBiotech will then set up a GitHub repository (default name ‘iot-ensemble-device-flow') in that organization.

To complete the step and provision the infrastructure, click Establish IoT Infrastructure. OpenBiotech now automates the deployment of various underlying configurations and Azure services and resources.

This process will take approximately 10 minutes.

![OpenBiotech Storage Flow Provisioning Progress](https://www.fathym.com/iot/img/screenshots/openbiotech-provisioning-progress.png)
