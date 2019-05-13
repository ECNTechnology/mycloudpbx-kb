---
title: Netcomm NF18ACV
date: 2019-05-13T01:37:22.245Z
---
This page will help you configure your **Netcomm NF18ACV** to work with your ECN provided Internet connection.

## Netcomms Management Interface

**Prerequisites:**

* Netcomm NF18ACV, plugged in and powered on. 
* Netcomm must be plugged into your computer with the provided Ethernet cable.(This cable must be plugged into one of the yellow LAN ports on the modem) 

Alternatively, you can use the provided wifi details on the provided card to connect your computer wirelessly to the modem. 

::: tip
TIP: You can also find the default WiFi username / password on the bottom of the modem stand).
:::

Please note that you may not have internet connection even after connecting to the modem if the modem had not been configured by ECN. 

All modems / routers sent from ECN Technology are preconfigured to connect to ECN network and therefore you don’t need to be reconfigured.

<img style="width: auto; height: auto;" src="/images/nf18acv-webinterface-1.png">

The default IP Address of the Netcomm NF18ACV is **192.168.20.1**.

Open your web browser and type in **192.168.20.1** in the address bar as shown in the above image.

The modem comes default with the following username & password.

* **Username:** admin
* **Password:** admin

::: warning
It is highly recommended that you change this password!
:::

Click '**_Login_**'.

## Configuration Guides

### Configuring for ADSL

- - -

**Prerequisites:** 

* An ADSL connection provided by ECN.
* Netcomm NF18ACV

<img style="width: 1100px; height: auto;" src="/images/nf18acv-fttn-1.jpg">

From the Netcomm homepage, click on '**_Internet_**' on the left hand column and then click on '**_Create New_**'.

<img style="width: auto; height: auto;" src="/images/nf18acv-adsl-2.png">

You will need to enter in the following information:

* **Description:** This is for your reference only.
* **Internet Service:** Choose '**_ADSL_**'.
* **Connection Type:** Choose '**_PPPoE_**'.
* **VPI:** 8
* **VCI:** 35
* **Username:** Enter the username provided by ECN. (Available at https://my.ecn.net.au).
* **Password:** Enter the password provided by ECN. (Available at https://my.ecn.net.au).

::: tip
If you do not know your username & password, contact ECN on 1300 790 111
:::

Click '**_Apply_**'.

If everything has been plugged in correctly, you should have Internet access within 60 seconds.

You will see the '**_ADSL_**' indicator light go solid on the modem, and the '**_Internet_**' will follow shortly.

### Configuring for NBN FTTN

- - -

**Prerequisites:** 

* Fibre to the Node NBN connection provided by ECN.
* Netcomm NF18ACV

<img style="width: auto; height: auto;" src="/images/nf18acv-fttn-1.jpg">

From the Netcomm homepage, click on '**_Internet_**' on the left hand column and then click on '**_Create New_**'.

<img style="width: auto; height: auto;" src="/images/nf18acv-fttn-2.png">

You will need to enter in the following information:

* **Description**: This is for your reference only.
* **Internet Service**: Choose 'VDSL'.
* **Connection Type**: Choose 'PPPoE'.
* **Username**: Enter the username provided by ECN. (Available at * https://my.ecn.net.au).
* **Password**: Enter the password provided by ECN. (Available at 
  https://my.ecn.net.au).
* **802.1P:** Leave unchanged at -1
* **VLAN Tag:** Leave unchanged at -1 (unless advised specifically by ECN).
  ::: tip
  If you do not know your username & password, contact ECN on 1300 790 111
  :::
  Click 'Apply'.

If everything has been plugged in correctly, you should have Internet access within 60 seconds.

You will see the '_**DSL**_' indicator light go solid on the modem, and the '_**Internet**_' will follow shortly.

You are now connected to the Internet!

### Configuring for NBN FTTP or HFC

- - -

**Prerequisites:** 

* HFC or FTTP NBN connection provided by ECN.
* Netcomm NF18ACV

<img style="width: auto; height: auto;" src="/images/nf18acv-fttn-1.jpg">

From the Netcomm homepage, click on '**_Internet_**' on the left hand column and then click on '**_Create New_**'.

<img style="width: auto; height: auto;" src="/images/nf18acv-hfc-fttp-1.png">

You will need to enter in the following information:

* **Description**: This is for your reference only.
* **Internet Service**: Choose 'Ethernet WAN'.
* **Connection Type**: Choose 'PPPoE'.
* **Username**: Enter the username provided by ECN. (Available at * https://my.ecn.net.au).
* **Password**: Enter the password provided by ECN. (Available at 
  https://my.ecn.net.au).
* **802.1P:** Leave unchanged at -1
* **VLAN Tag:** Leave unchanged at -1 (unless advised specifically by ECN).
  ::: tip
  If you do not know your username & password, contact ECN on 1300 790 111
  :::
  Click 'Apply'.

If everything has been plugged in correctly, you should have Internet access within 60 seconds.

You will see the indicator light go solid on the modem.

You are now connected to the Internet!

## WiFi Settings

The Netcomm NF18ACV comes preconfigured with WiFi and the default username / password can be found in the following locations:

* On the WiFi security card provided with the modem.
* On the bottom of the modem.

::: warning
**Note:** If you have changed your WiFi name / password this will no longer be correct.
:::

### Changing your WiFi Name & Password



## Configuring Voip Service

::: tip
Coming Soon!
:::
