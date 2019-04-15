---
title: Business SIP
date: 2019-04-15T04:56:03.485Z
---
![number configuration page](/images/business_sip_direct_number_configuration.png)

## Logging into the management portal

To log into the [**Management Portal**](https://my.ecn.net.au) head to https://my.ecn.net.au and enter your Username & Password.

Note that you can click '**Register**' on the right hand side if you do not already have an account and you can recover your password with the '**Having trouble signing in**' button.

![login screen](/images/screen-shot-2019-04-15-at-2.49.17-pm.png)

Once logged in, click '**My Services**' and select your Business SIP service from under the '**Voice**' menu.

## Direct or Trunk Mode?

There are a few fundamental differences between **Direct Mode** and **Trunk Mode**.

**Direct Mode** is designed for a **_single endpoint_** such as an Analog Telephone Adapter (_ATA_) or an IP Phone.

**Trunk Mode** is designed to be used with a PBX system, either hardware based such as an NEC SL1100 or a software based solution, such as FusionPBX.

`If you are unsure which option to select, call 1300 790 111 to talk to one of our friendly staff.`

## Initial Setup

When you log into the [**ECN Portal**](https://my.ecn.net.au) you will need to configure your _Region_ and _Operating Mode_.
::: tip
You can also see a list of all numbers associated with the service below.
:::
**_IMAGE GOES HERE ONCE KRUNAL HAS FIXED STAGING...._**

### SIP Server

Choose the SIP Server that has closest represents your location.

::: tip HINT:
Ping each server to find the one with the best response time!
:::

### Operating Mode

Choose **Direct Mode** for a single endpoint solution, or **Trunk Mode** if you have your own PBX infrastructure.

## Configure Direct Mode

Direct mode has a lot of features built in for your convenience and you can see a lot of information from the direct mode configuration page.

### SIP Devices

Here you will be able to **_Add_**, **_Edit_** and **_Delete_** SIP devices from your configuration.

These are your individual endpoints. (ATA's or IP Phones).

![sip devices configuration section](/images/business_sip_direct_sip_devices.png)

From this screen you can see the currently _**Auth ID**_ (_This is the "username" for the service_)

You cannot see the _**Password**_ for security reasons, however you can click the '_**Reset**_' button to reset a forgotten password.

- - -

Select '_**Add New Device**_' to add a new endpoint.

![adding new endpoint](/images/business_sip_direct_new_device.png)

On this screen you will be prompted to configure the following:

**SIP Device Settings**

* **Device Name:** This is for your reference.
* **Authentication ID:** This is the '**_username_**' for the service.
* **Password:** This is the **ONLY** time your password will be visible to you, please pay attention here.
* **Default Outbound Caller ID:** This is the outbound caller ID that will be used unless otherwise specified by your endpoint.

**Enabled Call Types**

* Here you will choose the types of calls that are allowed. Local, National, Mobile, etc..

When you have finished making changes, click '**_Save_**'.

### Phone Number Configuration

Here you will be able to configure the call routing for individual numbers. You can **_add_**, **_edit_**, and **_remove_** routing as well as see a quick overview of existing configuration.

![phone number configuration screen](/images/business_sip_direct_phone_numbers.png)

For more information on an existing number, click '**_Edit_**' or click '**Add New Number**' to create a new one.

![number configuration page](/images/business_sip_direct_number_configuration.png)
