---
title: Power BI
hide_title: true
sidebar_label: Power BI
keywords:
    - iot
    - azure
    - connect a device
    - iot hub
    - power bi
    - iot dashboard
hide_table_of_contents: true
---

# Storage Access with Microsoft Power BI

There are a lot of options in Power BI Desktop for importing data to be used in reports and visualizations for data interpretation. OpenEnsemble provides connection URLs and Storage Access Keys so you can import data from your devices into Power BI using the **Web** data source.

Your OpenEnsemble Dashboard will give you access to API Access Storage Keys as well as interactive forms to obtain request URLs for cold and warm storage queries.  This is all you need to get started visualizing data with Power BI!

## OpenEnsemble Storage Access

OpenEnsemble provides out-of-the-box APIs that allow you to interact with your data and devices.  Leveraging the warm query endpoint will allow us to easily connect with Power BI.  Check out the [getting started guide](../../integrations/connecting-downstream) for more details.

## Configuring Power BI Desktop

Make sure that you've downloaded and installed [Power BI Desktop](https://powerbi.microsoft.com/en-us/downloads/).  

### Using a Web Query to Make a GET API Call in Power BI

Go to **Home > Get Data > Web**.

![Power BI Get Data Web](https://www.fathym.com/iot/img/screenshots/power-bi-get-data-web.png)

Once this has been selected, a popup will appear allowing input of the API URL. You will need to select the **Advanced** radio button to input the **Access Key** as an additional header parameter.

![Power BI From Web Advanced](https://www.fathym.com/iot/img/screenshots/power-bi-from-web-advanced.png)

The API request URL can be obtained from the dashboard using either the cold or warm query APIs.  Here is a sample warm query URL you can start with, and the dashboard will assist in discovering the parameters for this query.

```console
https://dashboard.openbiotech.co/api/data/warm/explorer
```

Now input the request URL from above (or obtained from the dashboard) into the Power BI **URL Parts** text field.  Then enter `Authorization` as a header parameter key, along with the **Bearer (token)** copied from OpenEnsemble Dashboard in the value text field.

![Power BI From web Advanced Enter Values](https://www.fathym.com/iot/img/screenshots/biotech-power-bi-from-web-advanced-enter-values.png)

With these values entered, select **OK** and the Power Query Editor will load your payloads.  These will need to be converted to a JSON source and a table before you can visualize your data.

## Preparing Data for Use

Now that the data is connected into our report, we need to convert it to a table.  Do this by selecting **To Table** and then **OK** from the following popup.

![Power BI Get Data Web to Table](https://www.fathym.com/iot/img/screenshots/power-bi-get-data-web-to-table.png)

![Power BI Get Data Web to Table Prompt](https://www.fathym.com/iot/img/screenshots/power-bi-get-data-web-to-table-prompt.png)

The data is still showing as a single complex option.  Select the **expand arrows** icon and Power BI will begin to break down the complex object into columns.

![Power BI Get Data Web Table Expand](https://www.fathym.com/iot/img/screenshots/power-bi-get-data-web-table-expand.png)

After converting to a table and expanding the record, you may notice that some columns still say **Record**. You will need to repeat this expanding process on those columns to expose the nested json data for use in Power BI.

### Using a Blank Query to Make a POST API Call in Power BI

Sometimes, pulling data from a URL isn't quite enough—you might need to send a **POST request** to an API to run a more specific query and return just the data you care about. You can do this in Power BI by creating a **Blank Query** using Power Query’s M language.

Let’s start by creating a blank query inside Power BI:

Go to **Home > Get Data > Blank Query**.

![Power BI Get Data Blank Query](https://www.fathym.com/iot/img/screenshots/power-bi-get-data-blank.png)

In the Power Query Editor, click **Advanced Editor**.

![Power BI Advanced Editor Button](https://www.fathym.com/iot/img/screenshots/power-bi-advanced-editor-button.png)

:::tip
You’ll use this editor to write custom logic that connects to your API, sends a POST request, and formats the response for use in Power BI.
:::

This example query:

- Sends a POST request with a Kusto-style query
- Uses bearer token authentication
- Parses the response JSON
- Expands the results into a clean table
- Adds alert flags and status indicators

Below is a complete working M code example for a POST request referencing a DHT22 device:

```js
let
    // Your API endpoint goes here
    // highlight-next-line
    url = "YOUR_API_URL_HERE",

    // Add your bearer token here
    // highlight-next-line
    bearerToken = "YOUR_BEARER_TOKEN_HERE",

    // This is the query you'll send to the API
    queryText = "set truncationmaxrecords=5000; Devices | where DeviceID == 'DHT22' | project DeviceID, EnqueuedTime, Latitude = RawData['DeviceData']['Latitude'], Longitude = RawData['DeviceData']['Longitude'], Temperature = RawData['SensorReadings']['Temperature'], Humidity = RawData['SensorReadings']['Humidity'], SignalStrength = RawData['SensorMetadata']['_']['SignalStrength'], SensorType = RawData['SensorMetadata']['_']['SensorType'] | sort by EnqueuedTime desc | take 5000",

    // Format the query as a JSON body
    postBody = Text.ToBinary("{""Query"": """ & queryText & """}"),

    // Send the POST request with headers
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

    // Start transforming the response into a table
    #"Parsed JSON" = Json.Document(json),
    #"Converted to Table" = Record.ToTable(#"Parsed JSON"),
    Value = #"Converted to Table"{2}[Value],
    #"Converted to Table1" = Table.FromList(Value, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
    #"Expanded Column1" = Table.ExpandRecordColumn(#"Converted to Table1", "Column1", {"name", "data"}, {"Column1.name", "Column1.data"}),
    #"Expanded Column1.data" = Table.ExpandListColumn(#"Expanded Column1", "Column1.data"),
    #"Expanded Column1.data1" = Table.ExpandRecordColumn(#"Expanded Column1.data", "Column1.data", {"DeviceID", "EnqueuedTime", "Latitude", "Longitude", "Temperature", "Humidity", "SignalStrength", "SensorType"}, {"DeviceID", "EnqueuedTime", "Latitude", "Longitude", "Temperature", "Humidity", "SignalStrength", "SensorType"}),

    // Clean up data types
    #"Changed Type" = Table.TransformColumnTypes(#"Expanded Column1.data1", {
        {"EnqueuedTime", type datetime},
        {"Temperature", type number},
        {"Humidity", type number}
    }),

    // Add a formatted time column
    #"Added FormattedTime" = Table.AddColumn(#"Changed Type", "FormattedTime", each DateTime.ToText([EnqueuedTime], "yyyy-MM-dd HH:mm:ss"), type text),

    // Add a flag to highlight high temperatures
    #"Added TempAlert" = Table.AddColumn(#"Added FormattedTime", "TempAlert", each [Temperature] > 80, type logical),

    // Add a status label for quick visuals
    #"Added Status" = Table.AddColumn(#"Added TempAlert", "Status", each 
        if [Temperature] > 80 then "🚨 HIGH TEMP" 
        else if [Temperature] >= 75 and [Temperature] <= 80 then "⚠️ WARNING" 
        else "✔ OK", type text)
in
    #"Added Status"

```

:::note Replace placeholders
Be sure to update:

"YOUR_API_URL_HERE" with the actual API endpoint you're calling.

"YOUR_BEARER_TOKEN_HERE" with a valid authorization token.
:::

:::info What is set truncationmaxrecords=5000 ?

This is a Kusto Query Language (KQL) directive used to increase the maximum number of records returned in a response.

By default, APIs may truncate results (e.g. to 500 rows), but this setting tells the engine to allow up to 5,000 records to be returned. It should be placed at the beginning of your KQL query when querying large datasets.

:::

:::caution Security Tip
Avoid hardcoding secrets like tokens if you plan to publish your Power BI report. Consider using parameters or credentials stored securely through a gateway instead.
:::

Congratulations! The device data has now been loaded into Power BI. The final step before you can use the data in visualizations is to transform the data from a Text type to Number, Dates, and other types.

## Transforming Data with Power BI

Transforming Data with Power BI will allow you to customize data based on requirements. Power BI allows the user to remove duplicate values, create new columns, define table headers, convert data types, use calculated columns etc.  Power BI has an incredible number of features that are dedicated to helping clean and prepare data for analysis.  You may want to use Power Query Editor to clean up and shape this data before you start building reports.

Additional information on how to shape your data can be found all over the internet, here are a couple places to get started.  You may want a learning path for [cleaning, transforming and loading data](https://docs.microsoft.com/en-us/learn/modules/clean-data-power-bi/), and to expand on that, look into [shaping and combing data](https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-shape-and-combine-data#shape-data).
  
When your query is where you want it, select **Close & Apply** from Power Query Editor's File menu.

![Power BI Get Data Web Close and Apply](https://www.fathym.com/iot/img/screenshots/power-bi-get-data-web-close-apply.png)

This action applies the changes and closes the editor.  The transformed dataset appears in the Power BI Desktop, ready to be used for creating reports.

## Visualize Data with Power BI

Now that you have transformed and loaded your data, it is time to prepare reports and visualizations for data interpretation and analysis.  In the Fields pane on the right, you see the fields in the data model you just transformed and created.

![Power BI Data Fields](https://www.fathym.com/iot/img/screenshots/power-bi-data-fields.png)

Power BI can help you create compelling reports where you can change visualizations, customize colors or axes, apply filters, drag fields, and more!  All these changes are fun to do, easy to undo, and quick to take effect.  The **Visualizations** pane provides the tools necessary for adding and configuring multiple visualizations.  Power BI has a growing list of visualizations you can download and use in your own reports that transforms complicated data into something easy to understand.  This ease provides insights to make informed decisions quickly.

![Power BI Get Data Web Close and Apply](https://www.fathym.com/iot/img/screenshots/power-bi-visualizations.png)

Additional information on how to visualize and bring your data to life can be located across the internet.  You can get started on [building your report](https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-excel-stunning-report#build-your-report) and work through a quick [10 minute example](https://docs.microsoft.com/en-us/learn/modules/build-your-first-power-bi-report/4-exercise-create-visuals-in-power-bi) to get you going.

![Completed Power BI Dashboard](https://www.fathym.com/iot/img/pbi_temp_humidity_dashboard_example.png)
