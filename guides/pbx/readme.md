---
title: PBX Articles
date: 2019-04-11T05:32:12.066Z
---
Use the menu on the left hand side of the screen to select the user guide for your device.

## ECN Management Portal

Use the ECN Portal to setup your individual emails, set passwords, configure email forwarding & auto-replies.

### Logging into the Management Portal

To log into the management portal navigate to <https://my.ecn.net.au> and enter your Username & Password.

Note that you can click '**Register**' on the right hand side if you do not already have an account and you can recover your password with the '**Having trouble signing in**' button.

![login screen](/images/screen-shot-2019-04-15-at-2.49.17-pm.png)

## Hosted PBX Dashboard

The Hosted PBX Dashboard can be used by management to easily view statistics and pull reports on the PBX.
<https://dashboard.ecn.net.au>
## Call Recordings

### Enabling Call Recordings
::: tip 
Coming Soon! 
:::
### Accessing Call Recordings
::: tip 
Coming Soon! 
:::

## Call Recording Encryption


To comply with data protection regulations and to provide enhanced security, myCloudPBX provides the option to encrypt call recordings with a user provided public key.

### Generating a Public/Private key pair.

To enable call recording encryption you will first need to generate a Public/Private key pair.

To create a Public/Private key-pair we recommend using OpenSSL

**Windows users**

Download OpenSSL for Windows (<https://wiki.openssl.org/index.php/Binaries>)

To run the commands below, go to the OpenSSL32 directory on your PC, and change to the /bin directory

::: tip 

You may need to open the command prompt with admin privileges (**run as administrator**) and you will need to restart your computer before generating a certificate.

:::

**Mac users**

OpenSSL comes shipped with Mac OS X version 10.6.2 onwards. 

You can use Terminal to run OpenSSL (Open _Applications_ > _Utilities_ > _Terminal_ or search for ‘_terminal_’ using the search bar in the top right hand corner of your screen) run the commands below.

::: tip 

You may need to run each OpenSSL command lines with elevated privileges.
– add _sudo_ before each command as needed.

:::

**Using OpenSSL**

The basics command line steps to generate a private and public key using OpenSSL are as follows:

::: warning 

openssl req -newkey rsa:2048 -nodes -keyout myprivatekey.pem -x509 -days 1825 -out mypublickey.pem

:::

::: danger WARNING!

STORE YOUR PRIVATE KEY IN A SAFE, SECURE LOCATION. IF THE PRIVATE KEY IS LOST, ENCRYPTED FILES CAN NOT BE DECRYPTED

:::

### Enabling Call Recording Encryption.

To enable call recording encryption you will first need to log into the https://my.ecn.net.au Portal.

Once logged in, click on '**_My Services_**' and then expand the '**_Voice_**' section.

Select the PBX you wish to enable call recording encryption.

Hover over '**_Addons_**' and click '**_Configure Addons_**'.

Enable the call recording encryption and paste a copy of your **_PUBLIC KEY_**.

Click '**_Save_**'

Recorded calls will now have a “.enc” suffix to identify call recorded with a user provided public key. 
### Decrypting Call Recordings

Decrypt Recordings using Openssl

::: warning 

openssl smime -decrypt -binary -in RECORDING_NAME.mp3.enc -inform DER -out RECORDING_NAME.mp3 -inkey myprivatekey.pem

:::

~~~~
test
~~~~

```
test
```

## Conference Calls

::: tip 
Coming Soon! 
:::
## Virtual FAX
### Allowed Senders
::: tip 
Coming Soon! 
:::
### Virtual FAX Call Routing
::: tip 
Coming Soon! 
:::
