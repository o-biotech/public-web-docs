---
title: Developers - Storage Access - Grafana
hide_title: true
sidebar_label: Grafana
keywords:
    - iot
    - azure
    - connect a device
    - iot hub
    - grafana
    - iot dashboard
hide_table_of_contents: true
---

# Storage Access with Grafana

Grafana has many options for importing data. We recommend using the [JSON API data source for Grafana](https://github.com/marcusolsson/grafana-json-datasource) plugin to load your OpenBiotech data. It's a data source plugin for loading JSON data from REST APIs into Grafana.

The OpenBiotech Dashboard displays your API Keys. 

![API Keys](https://www.fathym.com/iot/img/screenshots/biotech_api_storage_access_dark.png)

For the Cold Query, use this URL:

```console
https://dashboard.openbiotech.co/api/data/cold/execute
```

For the Warm Query, use this URL:

```console
https://dashboard.openbiotech.co/api/data/warm/explorer
```

## Configuring Grafana Data Source

From the Grafana Home, click on Connections > Data Sources. 

![Grafana Data Sources](https://www.fathym.com/iot/img/screenshots/biotech-grafana-data-source.png)

Click the 'Add new data source' button and search for 'json'.  Select the 'JSON API' plugin.

![Grafana Data Sources](https://www.fathym.com/iot/img/screenshots/grafana-2.jpg)

This example uses the Warm Query. Use the following values in the form: 

- URL: `https://dashboard.openbiotech.co/api/data/warm/explorer`
- Auth: `No Authentication`
- Custom HTTP Headers: `Authorization: Bearer ***********`

![Grafana JSON API](https://www.fathym.com/iot/img/screenshots/biotech_grafana_warm_ds.png)

![Grafana JSON API Success Test](https://www.fathym.com/iot/img/screenshots/grafana_apitest_success.png)

Click the 'Save & Test' button to verify the connection is successful. It should say 'Success' like the screenshot above. 

## Create a Grafana Dashboard 

Create a new dashboard and Add Visualization . For the data source, select the one you added above. 

![Grafana Panel](https://www.fathym.com/iot/img/screenshots/grafana_ds_dashboard_selection.png)

Switch to the Table visualization to easily view the raw data from storage. Use the screenshot below as a reference for how to access the device properties. 

![Grafana Query](https://www.fathym.com/iot/img/screenshots/grafana_table_visualization.png)

Success! Now that your data is loaded into Grafana, you can build dashboards like this:

![Grafana Dashboard](https://www.fathym.com/iot/img/screenshots/grafana_biotech_device_dashboard.png)



 
