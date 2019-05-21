---
title: CloudDial Guides
date: 2019-04-16T09:15:16.967Z
---
Cloud Dial is the essential Call Centre Tool.

Working alongside ECN's Hosted Voice platform myCloudPBX, Cloud Dial is a full featured hosted dialler.

## CloudDial Sign-In Options

::: tip
Contact your Administrator for your CloudDial URL
:::

![clouddial login screen](/images/clouddial-login.png)

On the CloudDial login screen you have 4 options to choose from.

* **Forgotten Password:** Password reset link.
* **Sign In:** This button is used in conjunction with your username & password to login.
* **Registration:** Use this button to register as a new user.
* **Agents Sign In:** This button is reserved for CloudDial Agents to sign in. 

### Agent Sign In

::: tip
Contact your Administrator for your CloudDial URL
:::

From the CloudDial sign-in page, click the '**Agents Sign In**' button and you will be greeted with the following screen:

![](/images/clouddial-agentsignin.png)

This screen allows an agent to enter in their preferred Username.

They then enter in the extension number of their phone and click '**Sign In**'.
Their extension will now ring, and once answered, they are logged into CloudDial.

When an agent first signs into CloudDial, they will be greeted with the following choice:

![clouddial waiting screen. choose select campaign or continue to hold.](/images/clouddial-agents-1.png)

* **Select Campaign:** When selected, you will be prompted to choose from a list of active campaigns available to you.
* **Continue to Hold:** This will place you into a holding status and you'll be able to answer incoming calls, but won't be making outbound calls.

Click '**Select Campaign**' when you are ready to join a campaign.

<img style="width: auto; height: auto;" src="/images/clouddial-agents-choose-campaign.png">

On this screen you will be able to see all campaigns available to you.
Use the '**Select**' button to join a campaign and start dialling.

## New Features

### Custom Dialling Order

Based on customer feedback, we have added the ability to choose the order in which the numbers in your campaigns are dialled.

To start you will need to add a column to your campaign list in the numerical order you wish to dial the numbers.

Once you have your contact list created, you can create your new campaign.

<img style="width: auto; height: auto;" src="/images/clouddial-orderedcampaign-1.png">

From the '**Management**' menu on the left hand side, click '**Campaign Management**'.

<img style="width: auto; height: auto;" src="/images/clouddial-orderedcampaign-2.png">

In the top right hand corner click the arrow next to the '**New Campaign**' button and choose '**New Advanced Campaign**'.

<img style="width: auto; height: auto;" src="/images/clouddial-orderedcampaign-3.png">

On this screen you must enter the following information:

* **Campaign Name:** This is for your reference. (Your Agents will see this when they join campaigns).
* **Country:** Choose your country.
* **Dialling Prefix:** This will be your caller ID for your outbound calls.
* **Redial Attempts:** This determines how many times CloudDial will dial the number before giving up.
* **Power Factor:** The number of simultaneous calls dialled in relation as a ratio to the number of active agents on your campaign.
* **Select Contacts:** Use the '**Select**' button to upload your CloudDial campaign data.

Click '**Next**' when complete.

<img style="width: auto; height: auto;" src="/images/clouddial-orderedcampaign-4.png">

The '**Field Mapping**' tab allows you to map custom fields in your CloudDial campaign data into the system.

Match the columns in your uploaded data to the references shown.

::: tip
If you have a specific order you wish to dial the numbers, select that column for the '**Sequence of Call**' field.
:::

Click '**Next**' when complete.

<img style="width: auto; height: auto;" src="/images/clouddial-orderedcampaign-5.png">

From the '**Call Direction**' menu, you can choose between;

* **Outbound:** CloudDial will handle outbound calls only for this campaign.
* **Inbound:** CloudDial will handle inbound calls only for this campaign.
* **Inbound & Outbound:** CloudDial will handle both inbound & outbound calls for this campaign.

From the '**Campaign Script**' menu, you can choose from all of your pre-created campaign scripts. 
These will show for the Agent while on each phone call.

You can also enter in additional notes that will appear on your agents screen while they are waiting for a call.

In the '**Tags**' section you can assign relevant tags to the campaign. This will be used for tag based routing when enabled.

<img style="width: auto; height: auto;" src="/images/clouddial-orderedcampaign-6.png">

Answering Machine Detection (AMD) allows CloudDial to first make sure there is a human answering the phone instead of a voicemail system before bridging the call to an Agent. This can save your Agents valuable time chasing leads instead of leaving voicemail messages.

To enable, check the option to '**Switch on AMD**'.

When AMD is detected CloudDial can either hangup, or leave a pre-recorded voicemail message.

If you have chosen to leave a voicemail message, you will need to select your sound file in the next section before pressing '**Next**'.

<img style="width: auto; height: auto;" src="/images/clouddial-orderedcampaign-7.png">

Here you can add your '**Wrapup Reasons**'.
These will be used by the Agents at the end of their calls to measure their KPIs.

When you are happy with the configuration of the campaign, click '**Finish**'.

### Customise Agent Screens

You can customise the options an Agent has access to with '**Custom Agent Screens**'.

To do this, you must first enable the '**Version 2 for Agent Screens**' feature.

<img style="width: auto; height: auto;" src="/images/clouddial-customagent-1.png">

From the '**Settings**' menu on the left hand side, click '**Preferences**'.

This will open the Preferences window.

<img style="width: auto; height: auto;" src="/images/clouddial-customagent-2.png">

From the list set '**Enable Version 2 for Agent Screens**' to '**Yes**'.

Click '**Configure**' to configure the Agent Screens.

Choose from the list of options you wish to allow the Agents:

Click '**Save**' when finished.

### Blaster Campaign Type

::: tip
documentation coming soon

:::

### Call Recordings

::: tip New Feature:
In order to meet PCIDSS Compliance, we have enhanced the call recording functionality to enable an Agent to '**mute**' a recording while taking payment or other personal information.
:::

While an Agent is on an active call, they will be offered the following call recording options:

* **Start/Stop Recording this Arrangement:** When '**started**' the main call recording will continue to run, and a _new_ recording will be started. This enables you to capture just the relevant part of the call into a small file. 
* **Stop All Recordings:** This will **stop** all recordings, including any arrangements. 
* **Mask/Unmask Recording:** This will mute the audio the recording. (Typically used while taking credit card payments).



### Wrapup Reason Categories

::: tip
documentation coming soon
:::
