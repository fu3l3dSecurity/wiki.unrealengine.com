(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{697:function(e,t,a){"use strict";a.r(t);var r=a(28),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Oculus Rift - Epic Wiki")]),e._v(" "),a("h1",{attrs:{id:"oculus-rift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oculus-rift"}},[e._v("#")]),e._v(" Oculus Rift")]),e._v(" "),a("p",[e._v("From Epic Wiki")]),e._v(" "),a("p",[e._v("Jump to: "),a("a",{attrs:{href:"#mw-head"}},[e._v("navigation")]),e._v(", "),a("a",{attrs:{href:"#p-search"}},[e._v("search")])]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Supported_Platforms"}},[e._v("1.1 Supported Platforms")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Usage"}},[e._v("2 Usage")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Sanity_Check"}},[e._v("2.1 Sanity Check")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#In-Editor"}},[e._v("2.2 In-Editor")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#In-Game"}},[e._v("2.3 In-Game")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Useful_Console_Commands"}},[e._v("2.4 Useful Console Commands")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Config_Settings"}},[e._v("2.5 Config Settings")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Development"}},[e._v("3 Development")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#World_Scale"}},[e._v("3.1 World Scale")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Player_settings"}},[e._v("3.2 Player settings")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Height_.26_Width"}},[e._v("3.2.1 Height & Width")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Speed"}},[e._v("3.2.2 Speed")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Camera_Location"}},[e._v("3.2.3 Camera Location")])])])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#True_First_Person_Viewpoint"}},[e._v("4 True First Person Viewpoint")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Blueprint_functions"}},[e._v("4.1 Blueprint functions")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Default_Head_Tracking_Behaviour"}},[e._v("4.2 Default Head Tracking Behaviour")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Virtual_Head_Model"}},[e._v("4.3 Virtual Head Model")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#C.2B.2B_functions"}},[e._v("4.4 C++ functions")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Bugs_.2F_Issues"}},[e._v("5 Bugs / Issues")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Texture_Blurring_.2F_Vibrating"}},[e._v("5.1 Texture Blurring / Vibrating")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Limitations"}},[e._v("5.2 Limitations")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Simulation_Sickness"}},[e._v("5.3 Simulation Sickness")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#See_also"}},[e._v("6 See also")])])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Unreal Engine 4 supports the Oculus Rift through the use of a plugin."),a("br"),e._v("\nThis plugin is included as part of the initial UE4 download.")]),e._v(" "),a("h3",{attrs:{id:"supported-platforms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-platforms"}},[e._v("#")]),e._v(" Supported Platforms")]),e._v(" "),a("p",[e._v("Originally, the Rift was only supported in UE4 on Windows. OSX support was added as well starting in 4.4.1.")]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("h3",{attrs:{id:"sanity-check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sanity-check"}},[e._v("#")]),e._v(" Sanity Check")]),e._v(" "),a("p",[e._v("Unreal Engine 4 will automatically use an Oculus Rift if it is plugged in and the plugin is enabled.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:OculusRiftPlugin.jpg"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/9/9b/OculusRiftPlugin.jpg/300px-OculusRiftPlugin.jpg",alt:""}})])]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Oculus Rift Plugin")]),e._v(" is enabled by default.")]),e._v(" "),a("p",[e._v("To see if the plugin is active and your Rift has been detected:")]),e._v(" "),a("ul",[a("li",[e._v("Run a standalone game.")]),e._v(" "),a("li",[e._v("Bring the console (default: ~ / tilde).")]),e._v(" "),a("li",[e._v('Type in "showlog".')]),e._v(" "),a("li",[e._v('Type in "ovrversion".')]),e._v(" "),a("li",[e._v("The LibOVR version & built date should be printed to the log window.")])]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:OculusRiftPluginVersionCheck.jpg"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/0/00/OculusRiftPluginVersionCheck.jpg/300px-OculusRiftPluginVersionCheck.jpg",alt:""}})])]),e._v(" "),a("p",[e._v("Plugged in & enabled.")]),e._v(" "),a("p",[e._v('If the message "Command not recognised: ovrversion" is displayed instead, check that:')]),e._v(" "),a("ul",[a("li",[e._v("the plugin is enabled.")]),e._v(" "),a("li",[e._v("you are running UE4 on the Windows platform.")]),e._v(" "),a("li",[e._v("your Oculus Rift is plugged in.")]),e._v(" "),a("li",[e._v("Also check if you have installed the lastest runtime driver! (U4 uses this to activate the plugin: "),a("a",{attrs:{href:"https://developer.oculusvr.com/?action=dl",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.oculusvr.com/?action=dl"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("li",[e._v("your Oculus Rift is functioning correctly.")])]),e._v(" "),a("p",[e._v("For any hardware related issues, contact "),a("a",{attrs:{href:"https://support.oculusvr.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oculus VR Support"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"in-editor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-editor"}},[e._v("#")]),e._v(" In-Editor")]),e._v(" "),a("p",[e._v("Prior to release 4.7, the Rift did not work in the editor view port or any Play in Editor (PIE) game mode; i.e. Right-Clicking and selecting 'Play From Here' didn't work.")]),e._v(" "),a("p",[e._v("Release 4.7 introduced a "),a("strong",[e._v("VR Preview")]),e._v(" Play in Editor mode. Select "),a("em",[e._v("Options for Play in Editor (PIE)")]),e._v(", and select "),a("em",[e._v("VR Preview")]),e._v(" to preview in the Rift.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:PreviewInVR47.png",title:"VR Preview Mode"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/0/09/PreviewInVR47.png",alt:"VR Preview Mode"}})])]),e._v(" "),a("h3",{attrs:{id:"in-game"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-game"}},[e._v("#")]),e._v(" In-Game")]),e._v(" "),a("p",[e._v("To use in-game:")]),e._v(" "),a("ul",[a("li",[e._v("Create a non-PIE game mode, such as a Standalone Game.")]),e._v(" "),a("li",[e._v("If not full screen, press Alt-Enter.")]),e._v(" "),a("li",[e._v('Bring up the console (~ / tilde). and type "stereo on".')])]),e._v(" "),a("p",[e._v("If you have any issues, go through the "),a("a",{attrs:{href:"/index.php?title=Oculus_Rift#Sanity_Check",title:"Oculus Rift"}},[e._v("sanity check")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"useful-console-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useful-console-commands"}},[e._v("#")]),e._v(" Useful Console Commands")]),e._v(" "),a("p",[e._v("To see a full list, check out the OculusRiftHMD.cpp (full UE4 source required).")]),e._v(" "),a("p",[a("strong",[e._v("stereo show")]),a("br"),e._v("\nPrint list of settings to log.")]),e._v(" "),a("p",[a("strong",[e._v("stereo on/off")]),a("br"),e._v("\nEnabled/disable stereo rendering for HMD device.")]),e._v(" "),a("p",[a("strong",[e._v("stereo reset")]),a("br"),e._v("\nResets IPD & clears IPD/stereo overrides.")]),e._v(" "),a("p",[a("strong",[e._v("stereo HEADX=, HEADY= or HEADZ="),a("value")],1),a("br"),e._v("\nSets X, Y or Z component of head model.")]),e._v(" "),a("p",[a("strong",[e._v("stereo e="),a("value")],1),a("br"),e._v("\nOverride and set IPD.")]),e._v(" "),a("p",[a("strong",[e._v("hmd enable/disable")]),a("br"),e._v("\nEnable/disable HMD device.")]),e._v(" "),a("p",[a("strong",[e._v("hmd vsync on/off/reset")]),a("br"),e._v("\nControl or reset vsync.")]),e._v(" "),a("p",[a("strong",[e._v("ovrversion")]),a("br"),e._v("\nPrint LibOVR version build date to log.")]),e._v(" "),a("h3",{attrs:{id:"config-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-settings"}},[e._v("#")]),e._v(" Config Settings")]),e._v(" "),a("p",[e._v("Oculus Rift settings go in DefaultEngine.ini under the section Oculus.Settings."),a("br"),e._v('\nDefaultEngine.ini is located at "'),a("Path",{attrs:{to:"",YourGame:""}},[e._v('\\Config\\DefaultEngine.ini".')])]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:OculusRiftDefaultEngineIniLoc.jpg"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/2/28/OculusRiftDefaultEngineIniLoc.jpg/300px-OculusRiftDefaultEngineIniLoc.jpg",alt:""}})])]),e._v(" "),a("p",[e._v("Example location of DefaultEngine.ini.")]),e._v(" "),a("p",[e._v("The list and values were taken from the source of the plugin.")]),e._v(" "),a("p",[e._v("[Oculus.Settings]\n; In meters, not Unreal Units (cm)\n; Recommended for true first person viewpoint\n; since you are simulating the head.\n;HeadModel_v2=(X=0.0,Y=0,Z=0.0)\n; Default values\nHeadModel_v2=(X=0.12,Y=0,Z=0.17)")]),e._v(" "),a("p",[e._v("bChromaAbCorrectionEnabled=true\nbMagEnabled=true\nbDevSettingsEnabled=false\nbMotionPredictionEnabled=true\nbTiltCorrectionEnabled=true\nAccelGain=0.0\nMotionPrediction=0.04")]),e._v(" "),a("p",[e._v("bOverrideIPD=false\nIPD=0.064")]),e._v(" "),a("p",[e._v("bOverrideStereo=false\nProjectionCenterOffset=0.0\nLensCenterOffset=0.0\nFOV=90.0")]),e._v(" "),a("p",[e._v("bOverrideVSync=false\nbVSync=true")]),e._v(" "),a("p",[e._v("bOverrideScreenPercentage=false\n; Value is out of range [30..300]\nScreenPercentage=100.0")]),e._v(" "),a("p",[e._v("bAllowFinishCurrentFrame=false\nPositionScaleFactor=1.0\n; Defaults to true if DLL built with OVR_VISION_ENABLED defined.\n; Positional tracking for DK2 onwards perhaps?\nbHmdPosTracking=false\nbLowPersistenceMode=false")]),e._v(" "),a("p",[e._v("; Defaults to true.\n; If enabled, viewpoint rotation is updated during the render thread.\n; Depending on how you control a players view rotation, you may need to disable this.\nbUpdateOnRT=true")]),e._v(" "),a("h2",{attrs:{id:"development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[e._v("#")]),e._v(" Development")]),e._v(" "),a("h3",{attrs:{id:"world-scale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#world-scale"}},[e._v("#")]),e._v(" World Scale")]),e._v(" "),a("p",[e._v("By default, 1uu (Unreal Unit) is equal to 1cm.")]),e._v(" "),a("p",[e._v("There is a World to Meters variable, under World Settings, that can be changed to affect how the Rift and other devices behave.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:WorldSettingsWorldToMeters.jpg"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/d/d6/WorldSettingsWorldToMeters.jpg/300px-WorldSettingsWorldToMeters.jpg",alt:""}})])]),e._v(" "),a("p",[e._v("World to Meters setting under World Settings.")]),e._v(" "),a("h3",{attrs:{id:"player-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#player-settings"}},[e._v("#")]),e._v(" Player settings")]),e._v(" "),a("p",[e._v("You can find settings relating to a players speed, size and more under the Defaults tab of your characters Blueprint. They are also located under the particular component related to each setting, which you can find under the Components tab.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:MyCharacterBlueprintDefaults.jpg"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/c/c6/MyCharacterBlueprintDefaults.jpg/300px-MyCharacterBlueprintDefaults.jpg",alt:""}})])]),e._v(" "),a("p",[e._v("Defaults tab.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:MyCharacterBlueprintComponents.jpg"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/6/68/MyCharacterBlueprintComponents.jpg/300px-MyCharacterBlueprintComponents.jpg",alt:""}})])]),e._v(" "),a("p",[e._v("Components tab.")]),e._v(" "),a("h4",{attrs:{id:"height-width"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#height-width"}},[e._v("#")]),e._v(" Height & Width")]),e._v(" "),a("p",[e._v("Height is based off the Capsule Half Height."),a("br"),e._v("\nWidth is based off the Capsule Radius.")]),e._v(" "),a("p",[e._v("By default, the player is 192cm tall and 84cm wide."),a("br"),e._v("\nIn the Virtual Reality Demo, the player is 176cm tall and 68cm wide.")]),e._v(" "),a("h4",{attrs:{id:"speed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#speed"}},[e._v("#")]),e._v(" Speed")]),e._v(" "),a("p",[e._v("MaxWalkSpeed governs a characters speed while on the ground, in cm/s."),a("br"),e._v("\nBy default, the player moves at 600cm/s or 6m/s.")]),e._v(" "),a("h4",{attrs:{id:"camera-location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#camera-location"}},[e._v("#")]),e._v(" Camera Location")]),e._v(" "),a("p",[e._v("The location of the camera is usually based off the BaseEyeHeight variable."),a("br"),e._v("\nIn the First Person Template and Virtual Reality Demo, the camera is 160cm off the ground.")]),e._v(" "),a("h2",{attrs:{id:"true-first-person-viewpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#true-first-person-viewpoint"}},[e._v("#")]),e._v(" True First Person Viewpoint")]),e._v(" "),a("p",[e._v("One of the best ways to help with presence is to use a true first person viewpoint."),a("br"),e._v("\nBasically speaking, you bolt the camera to the players eyes."),a("br"),e._v("\nThis can be done in the following manner:")]),e._v(" "),a("ol",[a("li",[e._v("Create blueprint based on your character of choice.")]),e._v(" "),a("li",[e._v("Under components tab, add a camera component.")]),e._v(" "),a("li",[e._v("Drag the camera component over your characters mesh to attach it there.")]),e._v(" "),a("li",[e._v("Select the camera component and change its Parent Socket to the bone/socket of your choice.")]),e._v(" "),a("li",[e._v("Adjust the relative location & rotation if required (its under Transform).")]),e._v(" "),a("li",[e._v("Make sure Camera Settings => Use Controller View Rotation is enabled.")]),e._v(" "),a("li",[e._v("Compile the Blueprint.")]),e._v(" "),a("li",[e._v("Set the Default Pawn Class of your game mode to your TFP character.")]),e._v(" "),a("li",[e._v("Zero out the "),a("a",{attrs:{href:"/index.php?title=Oculus_Rift#Virtual_Head_Model",title:"Oculus Rift"}},[e._v("Virtual Head Model")]),e._v(".")])]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:TrueFirstPersonCameraSetup.jpg"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/f/f7/TrueFirstPersonCameraSetup.jpg/300px-TrueFirstPersonCameraSetup.jpg",alt:""}})])]),e._v(" "),a("p",[e._v("True First Person camera setup.")]),e._v(" "),a("h3",{attrs:{id:"blueprint-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-functions"}},[e._v("#")]),e._v(" Blueprint functions")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:BlueprintHMD.jpg"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/d/d9/BlueprintHMD.jpg/300px-BlueprintHMD.jpg",alt:""}})])]),e._v(" "),a("p",[e._v("List of "),a("a",{attrs:{href:"/index.php?title=Oculus_Rift_Blueprint",title:"Oculus Rift Blueprint"}},[e._v("Blueprint functions")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"default-head-tracking-behaviour"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-head-tracking-behaviour"}},[e._v("#")]),e._v(" Default Head Tracking Behaviour")]),e._v(" "),a("p",[e._v("By default, head tracking will affect the player's view, rotation and movement direction."),a("br"),e._v("\nThis behaviour can be altered via "),a("a",{attrs:{href:"/index.php?title=Oculus_Rift_Separate_View",title:"Oculus Rift Separate View"}},[e._v("C++ or Blueprints")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"virtual-head-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-head-model"}},[e._v("#")]),e._v(" Virtual Head Model")]),e._v(" "),a("p",[e._v("By default, a virtual head model will be used to offset the players viewpoint."),a("br"),e._v("\nFor a traditional first person viewpoint that rotates on a central axis, this is fine."),a("br"),e._v("\nFor a "),a("a",{attrs:{href:"/index.php?title=Oculus_Rift#True_First_Person_Viewpoint",title:"Oculus Rift"}},[e._v("true first person viewpoint")]),e._v(" that is already positioned at the location of the players eyes, this extra offset is unnecessary."),a("br"),e._v("\nSimilarly so for most third person viewpoints.")]),e._v(" "),a("p",[e._v("The dimensions of this virtual head model are determined by the "),a("a",{attrs:{href:"/index.php?title=Oculus_Rift#Config_Settings",title:"Oculus Rift"}},[e._v("HeadModel_v2")]),e._v(" config setting.")]),e._v(" "),a("h3",{attrs:{id:"c-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-functions"}},[e._v("#")]),e._v(" C++ functions")]),e._v(" "),a("p",[e._v("There are two main functions, outside of the actual plugin, that are responsible for controlling how the players viewpoint is modified by input from the Oculus Rift:")]),e._v(" "),a("ul",[a("li",[e._v("APlayerController::UpdateRotation().")]),e._v(" "),a("li",[e._v("APlayerCameraManager::UpdateViewTarget().")])]),e._v(" "),a("h2",{attrs:{id:"bugs-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bugs-issues"}},[e._v("#")]),e._v(" Bugs / Issues")]),e._v(" "),a("h3",{attrs:{id:"texture-blurring-vibrating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#texture-blurring-vibrating"}},[e._v("#")]),e._v(" Texture Blurring / Vibrating")]),e._v(" "),a("p",[e._v("This is caused by the TemporalAA."),a("br"),e._v("\nThe current work around is disable TemporalAA by switching the AA method to FXAA or None."),a("br"),e._v("\nIt is located in your global post processing volume settings, under Misc.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:OculusRiftBugTemporalAA.jpg"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/8/88/OculusRiftBugTemporalAA.jpg/300px-OculusRiftBugTemporalAA.jpg",alt:""}})])]),e._v(" "),a("p",[e._v("AA method.")]),e._v(" "),a("h3",{attrs:{id:"limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),a("ul",[a("li",[e._v("Currently, screen space reflections are not supported. "),a("a",{attrs:{href:"https://forums.unrealengine.com/showthread.php?651-Build-quality-reduction-in-Oculus-VR-mode",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"simulation-sickness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simulation-sickness"}},[e._v("#")]),e._v(" Simulation Sickness")]),e._v(" "),a("p",[e._v("Simulation Sickness is a form of motion sickness that occurs when using the Oculus Rift or other VR screen technology. To help reduce the likelihood of your user having a bad experience because of this, please follow best practices closely.")]),e._v(" "),a("p",[e._v("Resources:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://static.oculusvr.com/sdk-downloads/documents/OculusBestPractices.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oculus VR Best Practices Guide"),a("OutboundLink")],1),e._v(" - PDF")]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.gdcvault.com/play/1020714",target:"_blank",rel:"noopener noreferrer"}},[e._v("Developing Virtual Reality Games and Experiences"),a("OutboundLink")],1),e._v(" - video of GDC 2014 talk by Tom Forsyth")])]),e._v(" "),a("p",[e._v("Some specific suggestions, not intended to be exhaustive:")]),e._v(" "),a("ul",[a("li",[e._v("Avoid cinematic cameras or anything that takes control of the camera movements. This tends to be the worst offender for causing sim sickness.")]),e._v(" "),a("li",[e._v("Don't override the field of view angle (FOV) manually, and don't expose it as a user preference. The value needs to match the physical geometry of the headset and lenses and should be set automatically through the device's SDK and internal configuration. If there's a mismatch, the world will appear to warp when you turn your head, leading to discomfort or nausea.")]),e._v(" "),a("li",[e._v('Do not have "Walking Bob" for first person games. This refers to the screen moving to mimic the human body moving up and down as it walks.')]),e._v(" "),a("li",[e._v('Do not "shake" the camera. If a grenade goes off next to a player, a camera shake may make sense in games, but on the Oculus, it can trigger sim sickness quickly.')]),e._v(" "),a("li",[e._v("Design dimmer areas. Strong/vibrant lighting in games can cause sim sickness to occur more quickly. Avoid this by using cooler shades and dimmer lights than you normally would.")]),e._v(" "),a("li",[e._v("Keep your framerate high. Low framerates are another trigger for a lot of gamers, so make sure to optimize your game as much as possible. Try to keep over 60fps if possible, so that if there is lag it is less likely to be a problem. Future devices will require higher framerates, i.e. 75fps for Oculus Rift DK2, and (rumored) 90fps for the consumer release.")]),e._v(" "),a("li",[e._v("Keep height in mind. Some players become nauseated when looking at things that are very far up or down. This may be more caused by height phobias.")])]),e._v(" "),a("p",[e._v("Please note that simulation and motion sickness are still not fully understood by doctors, so this advice is based off of various user experiences along with some limited knowledge of disorientation.")]),e._v(" "),a("h2",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See also")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/index.php?title=Oculus_Rift_Separate_View",title:"Oculus Rift Separate View"}},[e._v("Oculus Rift Separate View")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/index.php?title=Oculus_Rift_Blueprint",title:"Oculus Rift Blueprint"}},[e._v("Oculus Rift Blueprint")])])]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=User:Kris&action=edit&redlink=1",title:"User:Kris (page does not exist)"}},[e._v("Kris")])]),e._v(" "),a("p",[e._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Oculus_Rift&oldid=429",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Oculus_Rift&oldid=429"),a("OutboundLink")],1),e._v('"')]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/index.php?title=Category:Code",title:"Category:Code"}},[e._v("Code")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/index.php?title=Category:Blueprint",title:"Category:Blueprint"}},[e._v("Blueprint")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);