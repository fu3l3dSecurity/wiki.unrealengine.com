(window.webpackJsonp=window.webpackJsonp||[]).push([[1033],{1395:function(e,t,n){"use strict";n.r(t);var r=n(28),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("SubstancePlugIn - Epic Wiki")]),e._v(" "),n("h1",{attrs:{id:"substanceplugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#substanceplugin"}},[e._v("#")]),e._v(" SubstancePlugIn")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Overview")])]),e._v(" "),n("p",[e._v("This is a brief tutorial to help users who want to install the Allegorithmic Plug-In for Unreal Engine 4 to allow them to use Substance in UE4. These instructions have been tested and are working as of March 5th 2015 and on versions 4.7.0 + of the Unreal Engine and with Plug-in Version 4.7.0.5. For earlier versions, these instructions may work but have NOT been tested, please see the forums listed below for precise instructions with earlier versions.")]),e._v(" "),n("p",[n("strong",[e._v("Plug-In Referernce Pages on the UE4 and Allegorithmic Forums:")])]),e._v(" "),n("p",[n("a",{attrs:{href:"https://forum.allegorithmic.com/index.php?topic=1223.0",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[e._v("Substance plugin for UE4 - How to get it working")]),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://forum.allegorithmic.com/index.php?topic=4147.0",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[e._v("4.7.0.5 Plug In Release")]),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://forum.allegorithmic.com/index.php?board=23.0",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[e._v("Substance UE4 Forums, for future Plug-In Releases look here")]),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[e._v("#")]),e._v(" "),n("strong",[e._v("GitHub")])]),e._v(" "),n("p",[e._v("These instructions assume you want to get the most current version of the Plug-In from a Source Location with the Engine Source.")]),e._v(" "),n("p",[e._v("Find the Version of the Plug-In which works with the Engine Version you are using. Normally there is an updated plug-in version for each Full version of the engine and are denoted by the Engine Version number followed by an iteration number (4.7.0.5). Follow the Source Link.")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"/File:Substance_11.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/0/0b/Substance_11.jpg/1201px-Substance_11.jpg",alt:""}})])]),e._v(" "),n("p",[e._v("Download Link")])])]),e._v(" "),n("p",[e._v("You will be taken to Allegorithmic's Fork of the Unreal Engine 4, Download the Zip File. (NOTE: You will need to have a GitHub Account)")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"/File:Substance_12.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/b/b9/Substance_12.jpg/1200px-Substance_12.jpg",alt:""}})])]),e._v(" "),n("p",[e._v("GitHub Download")])])]),e._v(" "),n("p",[e._v("Open your download location and find the downloaded ZIP File.")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"/File:Substance_13.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/2/29/Substance_13.jpg/512px-Substance_13.jpg",alt:""}})])]),e._v(" "),n("p",[e._v("Zip File Location")])])]),e._v(" "),n("p",[e._v("Extract the Zip File to where you want your Engine to be installed. (I keep a Directory on a Secondary Drive for GitHub Builds)")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"/File:Substance_14.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/d/de/Substance_14.jpg/1200px-Substance_14.jpg",alt:""}})])]),e._v(" "),n("p",[e._v("Engine Installation Directory")])])]),e._v(" "),n("p",[e._v("Opening the newly extracted Directory, Run the Setup.bat file to download and Install all Engine Dependencies")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"/File:Substance_15.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/0/03/Substance_15.jpg/1200px-Substance_15.jpg",alt:""}})])]),e._v(" "),n("p",[e._v("Setup.bat")])])]),e._v(" "),n("p",[e._v("Once Dependencies are downloaded and the CMD window closes, Run the GenerateProjectFiles.bat file")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"/File:Substance_16.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/8/89/Substance_16.jpg/1200px-Substance_16.jpg",alt:""}})])]),e._v(" "),n("p",[e._v("GenerateProjectFiles.bat")])])]),e._v(" "),n("p",[e._v("Open the newly created Visual Studio Project Files in VS 2013 and Build Solution(as of 4.7.0 you must compile the engine on Visual Studio 2013)")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"/File:Substance_17.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/f/fe/Substance_17.jpg/1200px-Substance_17.jpg",alt:""}})])]),e._v(" "),n("p",[e._v("Build Solution")])])]),e._v(" "),n("p",[e._v("Once the Build is Complete, Find the UE4Editor.exe file to Open the Editor.")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"/File:Substance_18.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/c/c9/Substance_18.jpg/1200px-Substance_18.jpg",alt:""}})])]),e._v(" "),n("p",[e._v("Build Solution")])])]),e._v(" "),n("p",[e._v("Create a New Project.")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"/File:Substance_08.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/f/f0/Substance_08.jpg/1200px-Substance_08.jpg",alt:""}})])]),e._v(" "),n("p",[e._v("Create a New Project")])])]),e._v(" "),n("p",[e._v("Open Project Settings and insure that the Substance Sub-Section appears.")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"/File:Substance_09.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/5/55/Substance_09.jpg/1200px-Substance_09.jpg",alt:""}})])]),e._v(" "),n("p",[e._v("Project Settings")])])]),e._v(" "),n("p",[e._v("Enjoy!")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"/File:Substance_10.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/3/33/Substance_10.jpg/1200px-Substance_10.jpg",alt:""}})])]),e._v(" "),n("p",[e._v("Working Plug-In")])])]),e._v(" "),n("p",[e._v('Retrieved from "'),n("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=SubstancePlugIn&oldid=13646",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=SubstancePlugIn&oldid=13646"),n("OutboundLink")],1),e._v('"')]),e._v(" "),n("p",[n("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/index.php?title=Category:PlugIn&action=edit&redlink=1",title:"Category:PlugIn (page does not exist)"}},[e._v("PlugIn")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/Category:Epic_Created_Content",title:"Category:Epic Created Content"}},[e._v("Epic Created Content")])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=a.exports}}]);