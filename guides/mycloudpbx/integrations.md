---
title: Integrations
date: 2021-05-10T02:55:38.318Z
---
# Integrations

Integrations allow administrators to capture changes and events actioned via the myECN customer portal or a PBX. 

Using the webhook, external workflows can be called, for example when your client creates a new myCloudPBX extension, creating a callback request inside your CRM for an account manager to complete a wellness check.

A Webhook is a way for 2 applications to communicate and share real-time data. A Webhook works in the same way as an API only in reverse - data is pushed from the application rather than pulled (API).

myECN Integrations can also be used to provide live data feeds to third-party or external billing systems. 

There are two main types of Integrations that can be enabled.

* **myECN Integrations:** These integrations are specific to an account.
* **Service Integrations:** This integration is specific to one PBX.

## myECN Integrations

myECN Integrations include the following:

* Create User
* Delete User
* Modify User

![](/images/integrations_menu1.png)

From the '**My Admin**' menu, select '**Integrations**'.

![](/images/integrations_screen1.png)

On this page, you can see all of your active integrations.

* **Name:** This name is for your reference.

* **Type:** This is the type of Integration, currently Webhook only.

* **Trigger Service Type:** This is the trigger, currently myCloudPBX only.

* **Trigger Event:** Create User, Delete User, etc.


Click the <img style="width: auto; height: 25px;" src="/images/cog_icon.png"> icon to edit an Integration.

Click the <img style="width: auto; height: 25px;" src="/images/stop_square_icon.png"> icon to disable an Integration.

Click the <img style="width: auto; height: 25px;" src="/images/play_icon.png"> icon to enable an Integration.

## myECN Integration Configuration

To create a new Integration, click '_Create New Integration_'.

<img style="width: auto; height: auto;" src="/images/new_integration_details.png"> 

Enter the following information:

* **Integration Name:** This is for your reference

* **Type:** Webhook

* **Request URL:** The URL the payload will be sent to.

* **Method:** POST | GET. Most endpoints will use POST. GET support for legacy applications.

* **Format:** JSON | QUERY. JSON payload or QUERY string.

* **Path Arguments:** Additional path arguments.

* **Trigger Service Type:** Service type.


<img style="width: auto; height: auto;" src="/images/new_integration_authentication.png"> 

Enter the following information:

* **Authentication Type:** None | Basic Auth | Token.

* **Username:** Username [optional]

* **Password:** Password [optional]

* **Token:** Token [optional]

<img style="width: auto; height: auto;" src="/images/new_integration_headervalues.png"> 

A custom HTTP header can be added to requests, a typical request will start with X-, for example X-{myvalue}.

Enter the following information:

* **Request Name:** Name of the custom header value.

* **Request Value:** Value to be sent.

Field Values

The payload can be customized by selecting a predetermined value from the drop down list. In all cases the Request Key can be configured to align with your application. The following values are specific to the myCloudPBX service type. 

* **Extension Number:** myCloudPBX users configured extension number.

* **Name:** myCloudPBX users name.

* **Outbound Phone Number:** Outbound number configured for the extension.

* **Has Voicemail:** True: Voicemail is enabled. False: Voicemail is disabled.

* **Enabled Calls:** Comma separated list of call types enabled for the extension. 
Local, National, Mobile, International, International Other, Premium, Other.

* **Date/Time:** Date and Time of the request.

* **Service UUID:** Unique identifier of the service. A list of service UUIDs can be obtained using myECN API (https://developer.ecn.net.au)

* **Service Name:** System configured name of the service.

* **Service Friendly Name:** User configured name of the service.

When you are finished, click '**Save & Close**'.




