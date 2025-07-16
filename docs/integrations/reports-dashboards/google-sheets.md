---
title: Google Sheets
hide_title: true
sidebar_label: Google Sheets
keywords:
    - iot
    - azure
    - connect a device
    - iot hub
    - google
    - google sheets
    - iot dashboard
hide_table_of_contents: true
---

# Storage Access with Google Sheets

Google Sheets is a powerful tool for building lightweight, cloud-based dashboards. OpenEnsemble makes it easy to pull your device data directly into Google Sheets using Google Apps Script and the provided storage access APIs.

Your OpenEnsemble Dashboard gives you access to Storage Keys and API endpoints, along with easy-to-use query builders. You can use these tools to fetch cold or warm telemetry data and update your sheets automatically.

## OpenEnsemble Storage Access

OpenEnsemble provides out-of-the-box APIs that allow you to interact with your data and devices.  Leveraging the cold query endpoint will allow us to easily connect with Power BI.  Check out the [getting started guide](../../integrations/connecting-downstream) for more details.

## Using Google Apps Script to Run a POST API Call

With a bit of scripting, you can set up a custom function in Google Sheets to run a **POST request** to your telemetry API and display the results in a dashboard-style worksheet.

### Step 1: Open Script Editor

1. Open your Google Sheet.
2. Go to **Extensions > Apps Script**.

![Open Google Sheets Script Editor](https://www.fathym.com/iot/img/screenshots/google-sheets-script-editor.png)

### Step 2: Paste the Script and Customize

The query in this script is written in Kusto Query Language (KQL)—commonly used with platforms like Azure Data Explorer, ADX, and OpenEnsemble’s telemetry APIs. You can update the query to return different fields or filter based on your device and data needs.

Below is a complete Google Apps Script function that sends a POST request with this query, parses the JSON response, and writes the results into a formatted table inside a Google Sheets tab for a DHT22 device.

Delete any default code and paste in the script below.

```js
function fetchAndUpdateIoTData() {
    // highlight-next-line
  var url = "YOUR_API_URL_HERE";
  var payload = {
    "Query": "set truncationmaxrecords=1000; Devices | where DeviceID == 'DHT22' | project DeviceID, EnqueuedTime, Latitude = RawData['DeviceData']['Latitude'], Longitude = RawData['DeviceData']['Longitude'], Temperature = RawData['SensorReadings']['Temperature'], Humidity = RawData['SensorReadings']['Humidity'], SignalStrength = RawData['SensorMetadata']['_']['SignalStrength'], SensorType = RawData['SensorMetadata']['_']['SensorType'] | sort by EnqueuedTime desc | take 1000"
  };

  var options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      // highlight-next-line
      "Authorization": "Bearer YOUR_BEARER_TOKEN_HERE"
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  var response = UrlFetchApp.fetch(url, options);
  var firstParse = JSON.parse(response.getContentText());
  var json = JSON.parse(firstParse);
  var table = json.tables.find(t => t.name === "PrimaryResult");
  if (!table || !table.data || table.data.length === 0) {
    SpreadsheetApp.getUi().alert("No data returned.");
    return;
  }

  var data = table.data;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dashboard") || SpreadsheetApp.getActiveSpreadsheet().insertSheet("Dashboard");
  sheet.clear();

  // Add custom columns
  var headers = Object.keys(data[0]);
  headers.push("FormattedTime", "Temp Alert", "Status");
  sheet.appendRow(headers);

  data.forEach(row => {
    var enqTime = row.EnqueuedTime || "";
    var formatted = enqTime ? new Date(enqTime).toLocaleString() : "";
    var temp = row.Temperature || 0;
    var alert = temp > 79;
    var status = alert ? "⚠️ HIGH TEMP" : "✔ OK";

    var rowValues = headers.map(h => {
      if (h === "FormattedTime") return formatted;
      if (h === "Temp Alert") return alert;
      if (h === "Status") return status;
      return row[h] ?? "";
    });

    sheet.appendRow(rowValues);
  });
}
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
If your script will be used by multiple people or refreshed regularly, consider using the Script Properties API or Google Workspace authentication flows to store tokens securely.
:::

### Step 3: Run the Script
Once you’ve saved your script:

1. Click the Run ▶️Run button to execute it.
2. Grant permissions when prompted.
3. Your Dashboard sheet will be updated with live device data.

![Google Sheets Permission](https://www.fathym.com/iot/img/screenshots/google-sheets-permission.png)

### Bonus: Automating and Refreshing Data
You can set your sheet to refresh on a schedule:

- In the script editor, go to Triggers (clock icon).
- Select `create a new trigger`
- Set `fetchAndUpdateIoTData` to run on a time-based trigger (e.g., every hour) and Save.

![Google Sheets Trigger Icon](https://www.fathym.com/iot/img/screenshots/google-sheets-script-triggers.png)

![Google Sheets Trigger Settings](https://www.fathym.com/iot/img/screenshots/google-sheet-time-trigger-settings.png)

:::info
Additional information on event triggers can be found [here](https://developers.google.com/apps-script/guides/triggers/installable).
:::

That’s it! Your IoT device data is now flowing into Google Sheets via a secure POST API call. From here, you can build charts, apply conditional formatting, or create dashboards to track real-time device insights.

![Google Sheets DHT22 Data](https://www.fathym.com/iot/img/screenshots/google-sheets-dht22-data.png)
