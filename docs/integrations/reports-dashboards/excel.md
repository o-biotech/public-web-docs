---
title: Excel
hide_title: true
sidebar_label: Excel
keywords:
    - iot
    - azure
    - connect a device
    - iot hub
    - excel
    - iot dashboard
hide_table_of_contents: true
---

# Storage Access with Microsoft Excel

There are a lot of options in Excel for importing data to be used in reports for data interpretation. OpenEnsemble provides connection URLs and Storage Access Keys so you can import data from your devices into Excel using the **Blank Query** data source.

Your OpenEnsemble Dashboard will give you access to API Access Storage Keys as well as interactive forms to obtain request URLs for cold and warm storage queries.  This is all you need to get started importing data with Excel and parse the results for reporting and analysis!

## OpenEnsemble Storage Access

OpenEnsemble provides out-of-the-box APIs that allow you to interact with your data and devices.  Leveraging the warm query endpoint will allow us to easily connect with Excel.  Check out the [getting started guide](../../integrations/connecting-downstream) for more details.

## Using a Blank Query to Run a POST API Call in Excel

Excel isn’t just for spreadsheets—you can also connect it to APIs to pull in dynamic data using **Power Query**. This guide will show you how to use a **Blank Query in Excel** to send a **POST request** to an API and work with the response data, just like you would in Power BI.

### Step 1: Open Power Query in Excel

You’ll use Excel’s built-in Power Query editor. Here’s how to access it:

1. Open **Excel** (desktop version, ideally Office 365 or Excel 2019+).
2. Go to the **Data** tab.
3. Click **Get Data > From Other Sources > Blank Query**.
4. Once it loads, open **Advanced Editor**.

![Excel Get Data Blank Query](https://www.fathym.com/iot/img/screenshots/excel-get-data-blank.png)

![Excel Advanced Editor Button](https://www.fathym.com/iot/img/screenshots/excel-advanced-editor-button.png)

:::tip
If you’re used to Power BI, the steps and editor will feel very familiar. Excel and Power BI share the same Power Query engine and language.
:::

### Step 2: Example POST API Query in Power Query M

The queryText is written in Kusto Query Language (KQL), often used with platforms like Azure Data Explorer, ADX, and OpenEnsemble-style telemetry APIs. You can customize this query to match the fields and logic you need.

Here’s a full working query that sends a POST request to an API, parses the JSON response, and formats the result into a nice table in Excel using a DHT22 device.

Paste in the example code below:

```js
let
    // API endpoint
    // highlight-next-line
    url = "YOUR_API_URL_HERE",

    // Replace with your actual bearer token
    // highlight-next-line
    bearerToken = "YOUR_BEARER_TOKEN_HERE",

    // Raw query
    queryText = "set truncationmaxrecords=5000; Devices | where DeviceID == 'DHT22' | project DeviceID, EnqueuedTime, Latitude = RawData['DeviceData']['Latitude'], Longitude = RawData['DeviceData']['Longitude'], Temperature = RawData['SensorReadings']['Temperature'], Humidity = RawData['SensorReadings']['Humidity'], SignalStrength = RawData['SensorMetadata']['_']['SignalStrength'], SensorType = RawData['SensorMetadata']['_']['SensorType'] | sort by EnqueuedTime desc | take 5000",

    // JSON POST body
    postBody = Text.ToBinary("{""Query"": """ & queryText & """}"),

    // Send the POST request and parse JSON directly
    json = Json.Document(Web.Contents(
        url,
        [
            Headers = [
                #"Content-Type" = "application/json",
                #"Content-Encoding" = "UTF-8",
                #"Authorization" = "Bearer " & bearerToken
            ],
            Content = postBody
        ]
    )),

    // Parse response and expand
    #"Parsed JSON" = Json.Document(json),
    #"Converted to Table" = Record.ToTable(#"Parsed JSON"),
    Value = #"Converted to Table"{2}[Value],
    #"Converted to Table1" = Table.FromList(Value, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
    #"Expanded Column1" = Table.ExpandRecordColumn(#"Converted to Table1", "Column1", {"name", "data"}, {"Column1.name", "Column1.data"}),
    #"Expanded Column1.data" = Table.ExpandListColumn(#"Expanded Column1", "Column1.data"),
    #"Expanded Column1.data1" = Table.ExpandRecordColumn(#"Expanded Column1.data", "Column1.data", {"DeviceID", "EnqueuedTime", "Latitude", "Longitude", "Temperature", "Humidity", "SignalStrength", "SensorType"}, {"Column1.data.DeviceID", "Column1.data.EnqueuedTime", "Column1.data.Latitude", "Column1.data.Longitude", "Column1.data.Temperature", "Column1.data.Humidity", "Column1.data.SignalStrength", "Column1.data.SensorType"}),

    // Rename columns for clarity
    #"Renamed Columns" = Table.RenameColumns(#"Expanded Column1.data1", {
        {"Column1.data.DeviceID", "DeviceID"},
        {"Column1.data.EnqueuedTime", "EnqueuedTime"},
        {"Column1.data.Latitude", "Latitude"},
        {"Column1.data.Longitude", "Longitude"},
        {"Column1.data.Temperature", "Temperature"},
        {"Column1.data.Humidity", "Humidity"},
        {"Column1.data.SignalStrength", "SignalStrength"},
        {"Column1.data.SensorType", "SensorType"}
    }),

    // Convert types
    #"Changed Type" = Table.TransformColumnTypes(#"Renamed Columns", {
        {"EnqueuedTime", type datetime},
        {"Temperature", type number},
        {"Humidity", type number}
    }),

    // Clean FormattedTime column using 24-hour format
    #"Added FormattedTime" = Table.AddColumn(#"Changed Type", "FormattedTime", each DateTime.ToText([EnqueuedTime], "yyyy-MM-dd HH:mm:ss"), type text),

    // Add logical TempAlert flag
    #"Added TempAlert" = Table.AddColumn(#"Added FormattedTime", "TempAlert", each [Temperature] > 80, type logical),

    // Add Status string
    #"Added Status" = Table.AddColumn(#"Added TempAlert", "Status", each 
    if [Temperature] > 80 then "🚨 HIGH TEMP" 
    else if [Temperature] >= 75 and [Temperature] <= 80 then "⚠️ WARNING" 
    else "✔ OK", type text)
in
    #"Added Status"

```

:::note Replace placeholders
Don’t forget to replace:

"YOUR_API_URL_HERE" with your actual API endpoint.

"YOUR_BEARER_TOKEN_HERE" with your secure token or auth header.
:::

:::info What is set truncationmaxrecords=5000 ?

This is a KQL (Kusto Query Language) directive. Some APIs that use KQL will return only a limited number of results unless you specify otherwise. This line tells the query engine to allow up to 5,000 records in the response.

If you’re expecting large datasets, it’s a good idea to include this at the beginning of your query.
:::

:::warning Security Tip
If you plan to refresh this data in the Excel workbook, consider how you’re storing your token. Use parameters or credential management options in Excel where possible to avoid exposing sensitive values.
:::

That’s it! Your device data is now flowing into Excel through a secure POST API call. From here, you can start building charts, setting alerts, or filtering your device data—right inside Excel!

## Transforming Data with Excel

Transforming Data with Excel will allow you to customize data based on requirements. Excel allows the user to remove duplicate values, create new columns, define table headers, convert data types, use calculated columns etc.  Excel has an incredible number of features that are dedicated to helping clean and prepare data for analysis.  You may want to use Power Query Editor to clean up and shape this data before you start building reports.

Additional information on how to shape your data can be found all over the internet. Here is a link to help get started [cleaning and transforming your data](https://support.microsoft.com/en-us/office/top-ten-ways-to-clean-your-data-2844b620-677c-47a7-ac3e-c2e157d1db19).
  
When your query is where you want it, select **Close & Load** from Power Query Editor's File menu.

![Excel Get Data Close and Load](https://www.fathym.com/iot/img/screenshots/excel-get-data-close-apply.png)

This action applies the changes and closes the editor.  The transformed dataset appears in Excel, ready to be used for creating reports.

![Excel Report](https://www.fathym.com/iot/img/screenshots/dht22-excel-report.png)
