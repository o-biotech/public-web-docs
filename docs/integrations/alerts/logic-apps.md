---
title: Azure Logic Apps
hide_title: true
sidebar_label: Azure Logic Apps 
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

# Sending Email & Text Alerts using Azure Logic Apps

Azure Logic Apps is a cloud platform where you can create and run automated workflows with little to no code. By using the visual designer and selecting from prebuilt operations, you can quickly build a workflow that integrates and manages your data.

These instructions show how to use Logic Apps to call the OpenBiotech warm query every 12 hours and check if the Temperature of any of the results is greater than 90. If so, it sends an email alert. Before we get started, here's an overview of the entire Logic App with the steps collapsed.

![Completed Steps](https://www.fathym.com/iot/img/screenshots/alerts/completed-steps.png)

## Step 1: HTTP

For the first step of the Logic App, search for 'HTTP'.

![Search for HTTP](https://www.fathym.com/iot/img/screenshots/alerts/search-for-http.png)

Configure the HTTP trigger with the following settings from your OpenBiotech account. This example is using the Warm Query.
- Method: `GET`
- URI: `https://dashboard.openbiotech.co/api/data/warm/explorer`
- Header: `Authorization: Bearer ***********`
- How often do you want to check for items?: `12 Hour`

![HTTP Settings](https://www.fathym.com/iot/img/screenshots/alerts/biotech-http-settings.png)

After this step has been configured, save and run the trigger to verify API connection parameters were correct. If the connection was successful, copy the HTML Body results to use later when parsing the JSON.

![HTML Connesiton Test Results](https://www.fathym.com/iot/img/screenshots/alerts/biotech-html-logicapp-results.png)

:::info
In the HTTP trigger above, use the 'How often do you want to check for items' fields to control how often the HTTP trigger calls the OpenBiotech Warm Query for new data.
:::

## Step 2: Compose JSON

For the next step of the Logic App, search for 'Compose' and select from Data Operations.

![Search for Compose Data Operations](https://www.fathym.com/iot/img/screenshots/alerts/logicapps-compose-action-selection.png)

For the Compose content, use the dynamic HTTP `Body` object from the previous HTTP step. 

![Compose Data Operations](https://www.fathym.com/iot/img/screenshots/alerts/logicapps-compose-settings.png)

## Step 3: Parse JSON

For the next step of the Logic App, search for 'Parse JSON'.

![Search for Parse JSON](https://www.fathym.com/iot/img/screenshots/alerts/search-for-parsejson.png)

For the Parse JSON content, use the dynamic Compose `Outputs` object from the previous compose step. For the Schema, click the 'Use sample payload to generate schema' and paste in the body response saved from the HTTP request sent in step 1. Refer to the screenshot below:

![Parse JSON Settings](https://www.fathym.com/iot/img/screenshots/alerts/biotech-parsejson-settings.png)

## Step 4: Initialize Variable

For the next step of the Logic App, search for 'initialize variable'.

![Parse JSON Settings](https://www.fathym.com/iot/img/screenshots/alerts/logicapps-initialize-variable.png)

This step we will create a TempOver boolean variable that will trigger the alert later on in the flow if the variable conditions are met.

![Parse JSON Settings](https://www.fathym.com/iot/img/screenshots/alerts/logicapps-initialize-variable-settings.png)

## Step 5: For Each

For the next step of the Logic App, search for 'For Each'. Select the 'Control' option.

![Search For Each](https://www.fathym.com/iot/img/screenshots/alerts/search-for-foreach.png)

Within the Controls, select the 'For each' action.

![Search For Each](https://www.fathym.com/iot/img/screenshots/alerts/search-for-foreach-control.png)

For the output, select the dynamic `PrimaryResult` object from the previous Parse JSON step.

![Search For Each](https://www.fathym.com/iot/img/screenshots/alerts/biotech-foreach-settings.png)

Click the 'Add an Action' button to add an action to the For Each. Search for 'Condition'.

![Search For Each Condition](https://www.fathym.com/iot/img/screenshots/alerts/foreach-condition-search.png)

For this condition, I'm checking if the `Temperature is greater than 90`,  `DeviceID is equal to mj-biotech` AND if the `EnqueuedTime is greater than getPastTime(12, 'Hour')`.
If the conditions are True, I will send an email.

![For Each Condition Settings](https://www.fathym.com/iot/img/screenshots/alerts/biotech-foreach-condition-settings.png)

:::note
For the "getPastTime(12, 'Hour')" expression to work click on the expression tab of the dynamic content pop-up and add it there.
Adjust the past time to match how often the HTTP request is triggered in step 1.  
![Search For Each Condition](https://www.fathym.com/iot/img/screenshots/alerts/expression-tab-settings.png)
:::
## Step 6: Send Email

When the 'Temperature is over 90' condition is met, we can add an action to send an email alert in the true block. Click the 'Add an action' button inside of true and search for 'Send Email'. Select the 'Office 365 Outlook' option.

![Search for Send Email](https://www.fathym.com/iot/img/screenshots/alerts/search-for-sendemail.png)

Fill in the email Body, Subject, and To fields based on your needs. You can add dynamic content to give your alerts more context.

![Send Email Settings](https://www.fathym.com/iot/img/screenshots/alerts/biotech-sendemail-settings.png)

:::tip
Having a hard time authorizing with Outlook? Try allowing 3rd party cookies within your browser
:::


## Step 7: Email to Text (SMS)

Texting via email is easy. Type in the recipient's mobile number in front of the "@" sign based on the SMS Gateway. For example, if your recipient’s mobile number is 1-123-456-7891 and their carrier is AT&T, you would type in the following address in the "send to" box: `11234567891@txtatt.net`. Almost every single carrier has its own address for this specific purpose, here is a list of all the major carriers’ email to SMS gateways:

- T-Mobile – number@tmomail.net
- Virgin Mobile – number@vmobl.com
- AT&T – number@txt.att.net
- Sprint – number@messaging.sprintpcs.com
- Verizon – number@vtext.com
- Tracfone – number@mmst5.tracfone.com
- Ting – number@message.ting.com
- Boost Mobile – number@myboostmobile.com
- U.S. Cellular – number@email.uscc.net
- Metro PCS – number@mymetropcs.com

## Overview of Steps

Here's a trigger overview of the entire Logic App with the steps collapsed after all steps were successfully ran. The Logic App calls the OpenBiotech warm query every 12 hours and checks if the Temperature of any of the results is greater than 90. If so, it sends an email alert.

![Completed Steps](https://www.fathym.com/iot/img/screenshots/alerts/successful-logicapps-trigger.png)
