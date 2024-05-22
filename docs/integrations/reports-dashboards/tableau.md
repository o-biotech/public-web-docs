---
title: Developers - Storage Access - Tableau
hide_title: true
sidebar_label: Tableau
keywords:
    - iot
    - azure
    - connect a device
    - iot hub
    - tableau
    - iot dashboard
hide_table_of_contents: true
---

# Storage Access with Tableau

Tableau Desktop has many options for importing data. You can import data from a file or from a server. Unfortunately, there is no free option for loading data from a REST API, so let's use the JSON file option and create a historical report.

The OpenBiotech Dashboard displays your API Storage Access Keys. 

![API Storage Access](https://www.fathym.com/iot/img/screenshots/biotech_api_storage_access_dark.png)

In the Cold Storage APIs section, click the "Download Last 7 Days of Data" button and execute it.  

![API Cold Download Button](https://www.fathym.com/iot/img/screenshots/biotech-cold-download-button-highlight.png)

## Loading JSON into Tableau

From the Tableau Home, click on 'JSON file' and browse to the json file you saved in the previous step. 

![Tableau Data Sources](https://www.fathym.com/iot/img/screenshots/tableau-json-file.png)

After loading your json file, select the schema levels you'd like available for analysis and click OK. I normally select all of the schema levels and then determine which data properties I want to use when building the worksheets.

![Tableau Data Sources](https://www.fathym.com/iot/img/screenshots/tableau-schema-levels.png)

Tableau will load the json data into a table to use as the data source for your worksheets.

![Tableau Data Sources](https://www.fathym.com/iot/img/screenshots/tableau-datasource.png)

Success! Now that your data is loaded into Tableau, you can build worksheets and dashboards like this:

![Tableau Dashboard](https://www.fathym.com/iot/img/screenshots/tableau-dashboard.png)
 
