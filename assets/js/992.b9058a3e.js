(window.webpackJsonp=window.webpackJsonp||[]).push([[992],{364:function(e,t,n){"use strict";n.r(t);var a=n(28),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Slate, Simple C++ Chat System - Epic Wiki")]),e._v(" "),n("h1",{attrs:{id:"slate-simple-c-chat-system"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slate-simple-c-chat-system"}},[e._v("#")]),e._v(" Slate, Simple C++ Chat System")]),e._v(" "),n("p",[n("strong",[e._v("Rate this Article:")])]),e._v(" "),n("p",[e._v("0.00")]),e._v(" "),n("p",[n("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}})]),e._v(" "),n("p",[e._v("Approved for Versions:4.10")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/a/a5/Icon_template_note1.png",alt:"Note"}})]),e._v(" "),n("p",[n("strong",[e._v("Some or all of the information on this page is inconsistent, irrelevant or confusing.")])]),e._v(" "),n("p",[e._v("Please help clean it up if you are able.")]),e._v(" "),n("h2",{attrs:{id:"contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#Getting_Started"}},[e._v("2 Getting Started")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#Adding_Classes"}},[e._v("3 Adding Classes")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#MyGameMode.h"}},[e._v("3.1 MyGameMode.h")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#MyGameMode.cpp"}},[e._v("3.2 MyGameMode.cpp")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#MyHUD.h"}},[e._v("3.3 MyHUD.h")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#MyHUD.cpp"}},[e._v("3.4 MyHUD.cpp")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#MyPlayerState.h"}},[e._v("3.5 MyPlayerState.h")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#MyPlayerState.cpp"}},[e._v("3.6 MyPlayerState.cpp")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#MyChatWidget.h"}},[e._v("3.7 MyChatWidget.h")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#MyChatWidget.cpp"}},[e._v("3.8 MyChatWidget.cpp")])])])])]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[n("em",[e._v("Author:")]),e._v(" "),n("a",{attrs:{href:"//forums.unrealengine.com/member.php?43891-WhooKid"}},[e._v("WhooKid")]),e._v(" ("),n("a",{attrs:{href:"//forums.unrealengine.com/showthread.php?94453-Simple-C-Chat-System&p=438276"}},[e._v("talk")]),e._v(")")]),e._v(" "),n("p",[n("a",{attrs:{href:"/File:Ue4chat7.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/8/8f/Ue4chat7.jpg/400px-Ue4chat7.jpg",alt:""}})])]),e._v(" "),n("p",[n("a",{attrs:{href:"/File:Ue4chat7.jpg",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),e._v(" "),n("p",[e._v("Simple C++ Chat System with Slate")]),e._v(" "),n("p",[e._v("I made a lightweight simple chat system with Slate widgets and server RPCs.")]),e._v(" "),n("p",[e._v("The way it works is a widget is created then attached in the Hud class. The user presses enter to focus the inputbox and when he submits the message is passed to the player state then is replicated on the server and then to all players with a multicast server call.")]),e._v(" "),n("p",[e._v("You will have to enable slate and extend 4 classes.")]),e._v(" "),n("ul",[n("li",[n("em",[e._v("MyGameMode")]),e._v(" extends "),n("em",[e._v("AGameMode")])]),e._v(" "),n("li",[n("em",[e._v("MyHUD")]),e._v(" extends "),n("em",[e._v("AHUD")])]),e._v(" "),n("li",[n("em",[e._v("MyPlayerState")]),e._v(" extends "),n("em",[e._v("APlayerState")])]),e._v(" "),n("li",[n("em",[e._v("MyChatWidget")]),e._v(" extends "),n("em",[e._v("SCompoundWidget")])])]),e._v(" "),n("h2",{attrs:{id:"getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),n("p",[n("a",{attrs:{href:"/File:Ue4chat8.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/d/d5/Ue4chat8.jpg/400px-Ue4chat8.jpg",alt:""}})])]),e._v(" "),n("p",[n("a",{attrs:{href:"/File:Ue4chat8.jpg",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),e._v(" "),n("p",[e._v("Enable Slate in your PROJECT.Build.cs file")]),e._v(" "),n("p",[e._v("First thing you have to do is enable the Slate module."),n("br"),e._v("\nIt can be done with this tutorial "),n("a",{attrs:{href:"/Slate,_Hello",title:"Slate, Hello"}},[e._v("Slate,_Hello")]),e._v("."),n("br"),e._v("\nTo enable slate you need to open your PROJECT.Build.cs in your source/PROJECT folder and uncomment the line:"),n("br"),e._v('\nPrivateDependencyModuleNames.AddRange(new string[] { "Slate", "SlateCore" });')]),e._v(" "),n("h2",{attrs:{id:"adding-classes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-classes"}},[e._v("#")]),e._v(" Adding Classes")]),e._v(" "),n("p",[e._v("Now you need to extend the 4 classes and add the code. You may already have these classes extended so you may have to add this code to your existing classes."),n("br"),e._v("\nTo extend a class go to File > New C++ Class..."),n("br"),e._v("\nThe first 3 classes are extending main classes so you can find them in the main search area.")]),e._v(" "),n("p",[e._v("The Last class MyChatWidget extends SCompoundWidget add you will have to click the Show All Classes button and type in SCompoundWidget.")]),e._v(" "),n("p",[e._v("Once you have all the classes extended you need to add the code. You will have to rename the include files to your project name and possible some other class names if you chose different ones.")]),e._v(" "),n("p",[e._v("Note you will also have to change the Project name in each .h file to your project name. (ex CHATTUTORIAL_API to MYGAME_API)")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"/File:Ue4chat3.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/4/46/Ue4chat3.jpg/120px-Ue4chat3.jpg",alt:""}})])]),e._v(" "),n("p",[e._v("Extending the AGameMode class in Editor.")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"/File:Ue4chat9.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/5/57/Ue4chat9.jpg/120px-Ue4chat9.jpg",alt:""}})])]),e._v(" "),n("p",[e._v("Extending the SCompoundWidget class with Show All Classes enabled.")])])]),e._v(" "),n("h3",{attrs:{id:"mygamemode-h"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mygamemode-h"}},[e._v("#")]),e._v(" MyGameMode.h")]),e._v(" "),n("p",[e._v('// Fill out your copyright notice in the Description page of Project Settings.\n \n#pragma once\n \n#include "GameFramework/GameMode.h"\n#include "MyGameMode.generated.h"\n \n/**\n*\n*/\nUCLASS()\nclass CHATTUTORIAL_API AMyGameMode : public AGameMode\n{\nGENERATED_BODY()\n \npublic:\nAMyGameMode();\n \n};')]),e._v(" "),n("h3",{attrs:{id:"mygamemode-cpp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mygamemode-cpp"}},[e._v("#")]),e._v(" MyGameMode.cpp")]),e._v(" "),n("p",[e._v('// Fill out your copyright notice in the Description page of Project Settings.\n \n#include "ChatTutorial.h"\n#include "MyGameMode.h"\n \n#include "MyHUD.h"\n#include "MyPlayerState.h"\n \nAMyGameMode::AMyGameMode()\n{\n// assign our custom classes above their parents\nHUDClass = AMyHUD::StaticClass();\nPlayerStateClass = AMyPlayerState::StaticClass();\n \n/* use this is you wish to extend the c++ into a bp and assign the bp to the class\nstatic ConstructorHelpers::FClassFinder'),n("AMyHUD",[e._v(" hudclassobj(TEXT(\"Blueprint'/MyHUD.MyHUD_C'\"));\nif (hudclassobj.Class != NULL)\nHUDClass = hudclassobj.Class;\n \nstatic ConstructorHelpers::FClassFinder"),n("AMyPlayerState",[e._v(" psclassobj(TEXT(\"Blueprint'/MyPlayerState.MyPlayerState_C'\"));\nif (psclassobj.Class != NULL)\nPlayerStateClass = psclassobj.Class;\n*/\n}")])],1)],1),e._v(" "),n("h3",{attrs:{id:"myhud-h"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#myhud-h"}},[e._v("#")]),e._v(" MyHUD.h")]),e._v(" "),n("p",[e._v('// Fill out your copyright notice in the Description page of Project Settings.\n \n#pragma once\n \n#include "GameFramework/HUD.h"\n#include "MyHUD.generated.h"\n \nUSTRUCT()\nstruct FSChatMsg // Struct to hold the message data to be passed between classes\n{\nGENERATED_USTRUCT_BODY()\n \nUPROPERTY() // UProperty means this variable will be replicated\nint32 Type;\n \nUPROPERTY()\nFText Username;\n \nUPROPERTY()\nFText Text;\n \nFText Timestamp; // Dont replicate time because we can set it locally once we receive the struct\n \ndouble Created;\n \nvoid Init(int32 NewType, FText NewUsername, FText NewText) // Assign only the vars we wish to replicate\n{\nType = NewType;\nUsername = NewUsername;\nText = NewText;\n}\nvoid SetTime(FText NewTimestamp, double NewCreated)\n{\nTimestamp = NewTimestamp;\nCreated = NewCreated;\n}\nvoid Destroy()\n{\nType = NULL;\nUsername.GetEmpty();\nText.GetEmpty();\nTimestamp.GetEmpty();\nCreated = NULL;\n}\n};\n \n/**\n*\n*/\nUCLASS()\nclass CHATTUTORIAL_API AMyHUD : public AHUD\n{\nGENERATED_BODY()\n \npublic:\n \nAMyHUD();\n \nTSharedPtr<class SMyChatWidget> MyUIWidget; // Reference to the main chat widget\n \nAPlayerController* MyPC;\n \nUFUNCTION(BlueprintCallable, Category = "User")\nvoid AddMessageBP(const int32 Type, const FString& Username, const FString& Text, const bool Replicate); // A Blueprint function you can use to place messages in the chat box during runtime\n \nprotected:\n \nvirtual void PostInitializeComponents() override; // All game elements are created, add our chat box\n \nvirtual void DrawHUD() override; // The HUD is drawn on our screen\n};')]),e._v(" "),n("h3",{attrs:{id:"myhud-cpp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#myhud-cpp"}},[e._v("#")]),e._v(" MyHUD.cpp")]),e._v(" "),n("p",[e._v('// Fill out your copyright notice in the Description page of Project Settings.\n \n#include "ChatTutorial.h"\n#include "MyHUD.h"\n \n#include "MyChatWidget.h"\n#include "MyPlayerState.h"\n \nAMyHUD::AMyHUD()\n{\n \n}\n \nvoid AMyHUD::PostInitializeComponents()\n{\nSuper::PostInitializeComponents();\n \nif (GEngine && GEngine->GameViewport) // make sure our screen is ready for the widget\n{\nSAssignNew(MyUIWidget, SMyChatWidget).OwnerHUD(this); // add the widget and assign it to the var\nGEngine->GameViewport->AddViewportWidgetContent(SNew(SWeakWidget).PossiblyNullContent(MyUIWidget.ToSharedRef()));\n}\n}\n \nvoid AMyHUD::DrawHUD()\n{\nSuper::DrawHUD();\n \nif (!MyPC)\n{\nMyPC = GetOwningPlayerController();\nAddMessageBP(2, TEXT(""), TEXT("Welcome. Press Enter to chat."), false); // random Welcome message shown to the local player. To be deleted. note type 2 is system message and username is blank\nreturn;\n}\n \nif (MyPC->WasInputKeyJustPressed(EKeys::Enter))\nif (MyUIWidget.IsValid() && MyUIWidget->ChatInput.IsValid())\nFSlateApplication::Get().SetKeyboardFocus(MyUIWidget->ChatInput); // When the user presses Enter he will focus his keypresses on the chat input bar\n}\n \nvoid AMyHUD::AddMessageBP(const int32 Type, const FString& Username, const FString& Text, const bool Replicate)\n{\nif (!MyPC || !MyUIWidget.IsValid())\nreturn;\n \nFSChatMsg newmessage;\nnewmessage.Init(Type, FText::FromString(Username), FText::FromString(Text)); // initialize our struct and prep the message\nif (newmessage.Type > 0)\nif (Replicate)\n{\nAMyPlayerState* MyPS = Cast<AMyPlayerState>(MyPC->PlayerState);\nif (MyPS)\nMyPS->UserChatRPC(newmessage); // Send the complete chat message to the PlayerState so it can be replicated then displayed\n}\nelse\nMyUIWidget->AddMessage(newmessage); // Send a local message to this client only, no one else receives it\n}')]),e._v(" "),n("h3",{attrs:{id:"myplayerstate-h"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#myplayerstate-h"}},[e._v("#")]),e._v(" MyPlayerState.h")]),e._v(" "),n("p",[e._v('// Fill out your copyright notice in the Description page of Project Settings.\n \n#pragma once\n \n#include "GameFramework/PlayerState.h"\n \n#include "MyHUD.h"\n \n#include "MyPlayerState.generated.h"\n \n/**\n*\n*/\nUCLASS()\nclass CHATTUTORIAL_API AMyPlayerState : public APlayerState\n{\nGENERATED_BODY()\n \npublic:\n \nAMyPlayerState();\n \nUFUNCTION(Server, Reliable, WithValidation) // for player to player rpc you need to first call the message on the server\nvirtual void UserChatRPC(const FSChatMsg& newmessage); // first rpc for the server\nUFUNCTION(NetMulticast, Reliable, WithValidation) // then the server calls the function with a multicast that executes on all clients and the server\nvirtual void UserChat(const FSChatMsg& newmessage); // second rpc for all the clients\n};')]),e._v(" "),n("h3",{attrs:{id:"myplayerstate-cpp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#myplayerstate-cpp"}},[e._v("#")]),e._v(" MyPlayerState.cpp")]),e._v(" "),n("p",[e._v('// Fill out your copyright notice in the Description page of Project Settings.\n \n#include "ChatTutorial.h"\n#include "MyPlayerState.h"\n \n#include "MyHUD.h"\n#include "MyChatWidget.h"\n \nAMyPlayerState::AMyPlayerState()\n{\n \n}\n \nbool AMyPlayerState::UserChatRPC_Validate(const FSChatMsg& newmessage)\n{\nreturn true;\n}\nvoid AMyPlayerState::UserChatRPC_Implementation(const FSChatMsg& newmessage)\n{\nUserChat(newmessage);\n}\nbool AMyPlayerState::UserChat_Validate(const FSChatMsg& newmessage)\n{\nreturn true;\n}\nvoid AMyPlayerState::UserChat_Implementation(const FSChatMsg& newmessage)\n{\nAPlayerController* MyCon;\nAMyHUD* MyHud;\n \nfor (FConstPlayerControllerIterator Iterator = GetWorld()->GetPlayerControllerIterator(); Iterator; ++Iterator) // find all controllers\n{\nMyCon = Cast<APlayerController>(*Iterator);\nif (MyCon)\n{\nMyHud = Cast<AMyHUD>(MyCon->GetHUD());\nif (MyHud && MyHud->MyUIWidget.IsValid())\nMyHud->MyUIWidget->AddMessage(newmessage); // place the chat message on this player controller\n}\n}\n}')]),e._v(" "),n("h3",{attrs:{id:"mychatwidget-h"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mychatwidget-h"}},[e._v("#")]),e._v(" MyChatWidget.h")]),e._v(" "),n("p",[e._v('// Fill out your copyright notice in the Description page of Project Settings.\n \n#pragma once\n \n#include "MyHUD.h"\n#include "SlateBasics.h"\n \n/**\n*\n*/\nclass CHATTUTORIAL_API SMyChatWidget : public SCompoundWidget\n{\nSLATE_BEGIN_ARGS(SMyChatWidget) : _OwnerHUD(){} // the OwnerHUD var is passed to the widget so the owner can be set.\n \nSLATE_ARGUMENT(TWeakObjectPtr<class AMyHUD>, OwnerHUD)\n \nSLATE_END_ARGS()\n \npublic:\n \nvoid Construct(const FArguments& InArgs);\n \nTSharedRef<ITableRow> OnGenerateRowForList(TSharedPtr<FSChatMsg> Item, const TSharedRef<STableViewBase>& OwnerTable); // the function that is called for each chat element to be displayed in the chatbox\nTArray<TSharedPtr<FSChatMsg>> Items; // array of all the current items in this players chat box\nTSharedPtr< SListView< TSharedPtr<FSChatMsg> > > ListViewWidget; // the acutall widgets for each chat element\n \nconst FSlateFontInfo fontinfo = FSlateFontInfo(FPaths::EngineContentDir() / TEXT("UI/Fonts/Comfortaa-Regular.ttf"), 15); // Font, Font Size  for the chatbox\n \nTWeakObjectPtr<class AMyHUD> OwnerHUD;\n \nTSharedPtr< SVerticalBox > ChatBox;\nTSharedPtr< SEditableText > ChatInput;\n \nvoid OnChatTextChanged(const FText& InText);\nvoid OnChatTextCommitted(const FText& InText, ETextCommit::Type CommitMethod);\n \nvoid AddMessage(const FSChatMsg& newmessage); // the final stage, this function takes the input and does the final placement in the chatbox\n \nvoid Tick(const FGeometry& AllottedGeometry, const double InCurrentTime, const float InDeltaTime); // The full widget ticks and deletes messages\n};')]),e._v(" "),n("h3",{attrs:{id:"mychatwidget-cpp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mychatwidget-cpp"}},[e._v("#")]),e._v(" MyChatWidget.cpp")]),e._v(" "),n("p",[e._v('// Fill out your copyright notice in the Description page of Project Settings.\n \n#include "ChatTutorial.h"\n#include "MyChatWidget.h"\n \n#include "MyHUD.h"\n#include "MyPlayerState.h"\n \n#define LOCTEXT_NAMESPACE "SMyChatWidget"\n \nvoid SMyChatWidget::Construct(const FArguments& InArgs)\n{\nOwnerHUD = InArgs._OwnerHUD;\n \nChildSlot // Build the base for the chatbox\n.VAlign(VAlign_Bottom)\n.HAlign(HAlign_Left)\n.Padding(15) // move the chat box out from the corner\n[\nSNew(SVerticalBox) // outter container\n+ SVerticalBox::Slot()\n.AutoHeight()\n.MaxHeight(408.f)\n.VAlign(VAlign_Bottom)\n[\nSAssignNew(ListViewWidget, SListView< TSharedPtr< FSChatMsg > >) // a ListView widget that takes the array of messages and draws them on the hud\n.ListItemsSource(&Items) //The Items array is the source of this listview\n.OnGenerateRow(this, &SMyChatWidget::OnGenerateRowForList) // The widget is trying to draw, give the elements\n.ScrollbarVisibility(EVisibility::Hidden)\n]\n+ SVerticalBox::Slot()\n.AutoHeight()\n.FillHeight(30.f)\n[\nSNew(SHorizontalBox)\n+ SHorizontalBox::Slot()\n.AutoWidth()\n.MaxWidth(600.f)\n[\nSAssignNew(ChatInput, SEditableText) // the widget for player input\n.OnTextCommitted(this, &SMyChatWidget::OnChatTextCommitted) // function to call when text is entered\n.OnTextChanged(this, &SMyChatWidget::OnChatTextChanged) // function to call when text is changed\n.ClearKeyboardFocusOnCommit(true)\n.Text(FText::FromString(""))\n.Font(FSlateFontInfo(fontinfo.FontMaterial, fontinfo.Size + 2)) // set the font for the input and add 2 font size\n.ColorAndOpacity(FLinearColor(1.f, 1.f, 1.f, 0.9f)) // send color and alpha R G B A\n.HintText(FText::FromString("Send a message to everyone.")) // hint message (optional)\n]\n]\n];\n}\n \nTSharedRef<ITableRow> SMyChatWidget::OnGenerateRowForList(TSharedPtr< FSChatMsg > Item, const TSharedRef<STableViewBase>& OwnerTable)\n{\nif (!Items.IsValidIndex(0) || !Item.IsValid() || !Item.Get()) // Error catcher\nreturn\nSNew(STableRow< TSharedPtr< FSChatMsg > >, OwnerTable)\n[\nSNew(SBox)\n];\n \nif (Item.Get()->Type === 1) // Type 1 is for player chat messages\nreturn\nSNew(STableRow< TSharedPtr< FSChatMsg > >, OwnerTable)\n[\nSNew(SWrapBox)\n.PreferredWidth(600.f)\n+ SWrapBox::Slot()\n[\nSNew(STextBlock) // places the timestamp\n.Text(Item.Get()->Timestamp)\n.ColorAndOpacity(FLinearColor(0.25f, 0.25f, 0.25f, 1.f))\n.Font(fontinfo)\n.ShadowColorAndOpacity(FLinearColor::Black)\n.ShadowOffset(FIntPoint(1, 1))\n]\n+ SWrapBox::Slot()\n[\nSNew(STextBlock) // places the username\n.Text(Item.Get()->Username)\n.ColorAndOpacity(FLinearColor::White)\n.Font(fontinfo)\n.ShadowColorAndOpacity(FLinearColor::Black)\n.ShadowOffset(FIntPoint(1, 1))\n]\n+ SWrapBox::Slot()\n[\nSNew(STextBlock) // adds the : between the username and chat text\n.Text(FText::FromString(" :  "))\n.ColorAndOpacity(FLinearColor(0.5f, 0.5f, 0.5f, 1.f))\n.Font(fontinfo)\n.ShadowColorAndOpacity(FLinearColor::Black)\n.ShadowOffset(FIntPoint(1, 1))\n]\n+ SWrapBox::Slot()\n[\nSNew(STextBlock) // places the user text\n.Text(Item.Get()->Text)\n.ColorAndOpacity(FLinearColor(0.5f, 0.5f, 0.5f, 1.f))\n.Font(fontinfo)\n.ShadowColorAndOpacity(FLinearColor::Black)\n.ShadowOffset(FIntPoint(1, 1))\n]\n];\nelse // 2 is for server messages, add more types for whispers friendslists etc\nreturn\nSNew(STableRow< TSharedPtr< FSChatMsg > >, OwnerTable)\n[\nSNew(SWrapBox)\n.PreferredWidth(600.f)\n+ SWrapBox::Slot()\n[\nSNew(STextBlock)\n.Text(Item.Get()->Timestamp)\n.ColorAndOpacity(FLinearColor(0.25f, 0.25f, 0.25f, 1.f))\n.Font(fontinfo)\n.ShadowColorAndOpacity(FLinearColor::Black)\n.ShadowOffset(FIntPoint(1, 1))\n]\n+ SWrapBox::Slot()\n[\nSNew(STextBlock)\n.Text(Item.Get()->Text)\n.ColorAndOpacity(FLinearColor(0.75f, 0.75f, 0.75f, 1.f))\n.Font(fontinfo)\n.ShadowColorAndOpacity(FLinearColor::Black)\n.ShadowOffset(FIntPoint(1, 1))\n]\n];\n}\n \nvoid SMyChatWidget::OnChatTextChanged(const FText& InText) // Called everytime the user presses a key on the input bar\n{\nFString SText = InText.ToString();\nif (SText.Len() > 120) // if there are more that 120 characters in the char box, remove the rest\n{\nSText = SText.Left(120);\nif (ChatInput.IsValid())\nChatInput->SetText(FText::FromString(SText));\n}\n}\n \nvoid SMyChatWidget::OnChatTextCommitted(const FText& InText, ETextCommit::Type CommitMethod) // The chat box is submitted\n{\nif (CommitMethod != ETextCommit::OnEnter) // only complete if the textbox was comitted with enter\nreturn;\n \nif (ChatInput.IsValid())\n{\nFText NFText = FText::TrimPrecedingAndTrailing(InText); // remove whitespace\nif (!NFText.IsEmpty())\n{\nAMyPlayerState* MyPS = Cast<AMyPlayerState>(OwnerHUD->MyPC->PlayerState); // cast to our player state that contains the rpc functions\nif (MyPS)\n{\n// Insert code here if you wish to have / commands\nFSChatMsg newmessage; // make a new struct to send for replication\nnewmessage.Init(1, FText::FromString(MyPS->PlayerName), NFText); // initialize the message struct for replication\nif (newmessage.Type > 0)\nMyPS->UserChatRPC(newmessage); // Send the complete chat message to the PlayerState so it can be replicated then displayed\n}\n}\nChatInput->SetText(FText()); // clear the chat box now were done with it\n}\n \nFSlateApplication::Get().SetUserFocusToGameViewport(0, EFocusCause::SetDirectly); // set the players focus back to the gameport\n}\n \nvoid SMyChatWidget::AddMessage(const FSChatMsg& newmessage) // this function is the last in line and does the actual placing of the message\n{\nint32 index = Items.Add(MakeShareable(new FSChatMsg())); // add a new message to the chatbox array\nif (Items[index].IsValid())\n{\nItems[index]->Init(newmessage.Type, newmessage.Username, newmessage.Text); // intiate our new message with the passed message\n \nint32 Year, Month, Day, DayOfWeek, Hour, Minute, Second, Millisecond; // set the timestamp and decay timer\nFPlatformTime::SystemTime(Year, Month, DayOfWeek, Day, Hour, Minute, Second, Millisecond);\nItems[index]->SetTime(FText::FromString(FString::Printf(TEXT("[ %02d:%02d:%02d ] "), Hour, Minute, Second)), FPlatformTime::Seconds()); // Comment this line to remove timestamps or replace FPlatformTime::Seconds() with 0 to slow decay the messages\n \nListViewWidget->RequestListRefresh(); // update the chatbox widget with our new array element\nListViewWidget->ScrollToBottom(); // scroll the chatbox to the bottom so our new message pops up\n}\n}\n \nvoid SMyChatWidget::Tick(const FGeometry& AllottedGeometry, const double InCurrentTime, const float InDeltaTime) // called everyframe and used for our gamelogic\n{\nSCompoundWidget::Tick(AllottedGeometry, InCurrentTime, InDeltaTime);\n \nif (Items.Num()) // make sure there is atleast one element in the chatbox array\n{\nif (!Items[0]->Created) // this element doesnt have a creation time and will last forever so lets set the creation time now and it was start decaying\nItems[0]->Created = InCurrentTime;\nif (InCurrentTime - Items[0]->Created > 20) // the first message in the array is older that 20 seconds\n{\nItems[0]->Destroy(); // clear the vars and pointers\nItems.RemoveAt(0); // remove the item from the array\nItems.Shrink();\n}\n}\n}')]),e._v(" "),n("p",[e._v("Once you compile all the classes. Make sure your game is using your new GameMode in the Project Settings Maps&Modes setting.")]),e._v(" "),n("p",[e._v("thanks to "),n("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v("!")]),e._v(" "),n("p",[e._v('Retrieved from "'),n("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Slate,_Simple_C%2B%2B_Chat_System&oldid=18817",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Slate,_Simple_C%2B%2B_Chat_System&oldid=18817"),n("OutboundLink")],1),e._v('"')]),e._v(" "),n("p",[n("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[e._v("Templates")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[e._v("Community Created Content")])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=s.exports}}]);