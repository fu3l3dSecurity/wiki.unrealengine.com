Solving Runtime Error Codes with Dependency Walker - Epic Wiki                    

Solving Runtime Error Codes with Dependency Walker
==================================================

  

0xc000007b is one of many well-known runtime error codes. You can check out other error codes and their more user friendly descriptions here: [Link](https://msdn.microsoft.com/en-us/library/cc704588.aspx)

Someone may correct or elaborate on this point but if we see code 0xc000007b, we are being told that a binary we tried use is either corrupt or not intended to be run in our process. That description is intended to be vague because this error code can cover a large number of situations. I would argue that there are no one-size-fits-all solutions to this problem but I will share ideas on how to track down the root cause of this issue. The root cause could vary from user to user and a case-by-case solution will be needed.

### Why am I seeing this code?

The short answer is that I won't know until I get more info from you. Often times, this error code is caused by a 64-bit process trying to use a 32-bit dll or vice versa. In our case, the 64-bit Launcher is probably trying to load a .dll that it wasn't meant to run with. The problem is that this isn't the only situation that could cause this error code. It could be a subtle problem with any of the binaries used/referenced. I'm not clear on all the ways users can get into this state but usually it has to do with dependencies that are corrupt, modified, incorrectly installed, or that have been tampered with. I'll be sure to update my answer if/when I find out more.

### How can I pinpoint the problem?

Some users have had luck uninstalling and then reinstalling some of the well-known dependencies(directx, VCRedist, etc). This is a hit or miss solution because we can't be sure which of those dependencies, if any, is causing the problem without investigating further. This is a valid approach to the problem and you may get lucky but if you want to know more about the root cause of this problem we'll need some tools:

**[Dependency Walker 2.2 x64](https://d26ilriwvtzlb.cloudfront.net/4/4d/Depends22_x64.zip "Depends22 x64.zip")** is a very useful tool for troubleshooting system errors related to loading and executing modules and we'll use it here to see what module is causing our 0xc000007b error. There are many ways of using dependency walker to pinpoint the problem and you could experiment with the tool(be sure to check out the depends.chm documentation that is packaged with it). Note: If you are having difficulty viewing the documentation, you may need to Unblock it in the properties (right click depends.chm -> Properties -> General Tab -> Unblock). Below I run you through an example of using Dependency Walker on my Unreal Engine Launcher.

### Using Dependency Walker

Here I intend to give you an overview of one of the ways you could use Dependency Walker to pinpoint the module that is causing issues. I had to tamper with one of my System Dlls to artificially reproduce the problem so your log files will be different but you'll be generating and reading the logs in a similar way on your computer.

1.  Download Dependency Walker 2.2 x64 from here: [Link](https://d26ilriwvtzlb.cloudfront.net/4/4d/Depends22_x64.zip "Depends22 x64.zip")
2.  Extract **depends22\_x64.zip** to **C:\\DWalker**
3.  Open a command window as administrator (Start Menu -> type “cmd” in the search box and right click on cmd.exe and select Run as Administrator)
4.  Enter the following command to switch to the folder we extracted Dependency Walker to: cd C:\\DWalker
5.  Enter the following command to have the tool generate logs while running Unreal Engine Launcher(Note: I have my Unreal engine installed to the default location, you would replace c:\\Program Files\\Unreal Engine in the command below with your install location):
    
    `depends.exe /c /f:1 /pb /pp:1 /pg:1 /ot:Log.txt "c:\Program Files\Unreal Engine\Launcher\Engine\Binaries\Win64\UnrealEngineLauncher.exe"`
    
6.  This will run Unreal Engine Launcher and you'll see the familiar 0xc000007b error message. Click OK to dismiss it as usual.
7.  You should now have a Log.txt file in the C:\\DWalker folder. In the next section I'll go over what to look for in this log to pinpoint the problem module.

### Reading Dependency Walker Logs

If you followed the steps above, you should have a Log.txt file in your c:\\DWalker folder. Open the log in a text editor and have a look. If you are anything like me, and seeing one of these logs for the first time, the contents of the log may make your head spin. Use the points below as a guide when searching for errors. I'll update this section whenever I find a different fail case. Note: Don't get hung up on every little warning/error you spot in the log, Dependency Walker may generate many warnings and errors for an application but most of these will be harmless and can be ignored. If you feel comfortable doing so, I would encourage you to share your log so that we can spot any common issues and hopefully find a way to get them fixed up in future releases.

Search the log for the strings in bold:

*   **Error: Modules with different CPU types were found**. This means the 64 bit process was given a 32 bit module. To pinpoint the module having the problem, look through the list of DLLs before the error appeared and find the one with the \[ E \]. Here is an example of my xinput dll having issues loading: `[ E ] c:\windows\system32\XINPUT1_3.DLL`
*   **Error: At least one file was not a 32-bit or 64-bit Windows module**. This means a DLL is probably corrupt. To pinpoint the module having the problem, look through the list of DLLs before the error appeared and find the one with the \[ ! \]. Here is an example of my xinput dll which is corrupt: `[ ! ] c:\windows\system32\XINPUT1_3.DLL`
*   **At least one module was corrupted or unrecognizable to Dependency Walker, but still appeared to be a Windows module**. This means a module was invalid. To pinpoint the module(s) having the problem, look through the list of DLLs before the warning appeared and find any with \[ ! \] or \[ !6\]. Here is an example of a module that has this issue: `[ !6] c:\windows\system32\D3DCOMPILER_43.DLL`

### What do I do once I pinpoint the problem?

First we'll need to pinpoint the product the DLL is associated with and try to reinstall/repair that product. In my case, above, XINPUT1\_3.dll is part of DirectX so I would download DirectX from a trusted Microsoft site and reinstall it. If the same issue shows up in the logs after I do that I would get more aggressive with my reinstall: I would backup my copy of the .dll, delete the original, try to reinstall again, and check to make sure a new copy of the dll was put in place. Note: Some people suggest to download DLLs from various websites but I want to caution you about this: I would personally never never never never… never use an untrusted site to download .dlls from. In other words, **do not use untrusted sites to download DLLs**.

Retrieved from "[https://wiki.unrealengine.com/index.php?title=Solving\_Runtime\_Error\_Codes\_with\_Dependency\_Walker&oldid=11139](https://wiki.unrealengine.com/index.php?title=Solving_Runtime_Error_Codes_with_Dependency_Walker&oldid=11139)"

[Categories](/Special:Categories "Special:Categories"):

*   [Epic Created Content](/Category:Epic_Created_Content "Category:Epic Created Content")
*   [Tutorials](/Category:Tutorials "Category:Tutorials")

  ![](https://tracking.unrealengine.com/track.png)