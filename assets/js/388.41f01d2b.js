(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{828:function(e,t,n){"use strict";n.r(t);var a=n(28),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Create Custom K2 Node For Blueprint - Epic Wiki")]),e._v(" "),n("h1",{attrs:{id:"create-custom-k2-node-for-blueprint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-custom-k2-node-for-blueprint"}},[e._v("#")]),e._v(" Create Custom K2 Node For Blueprint")]),e._v(" "),n("h2",{attrs:{id:"contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents:")]),e._v(" "),n("p",[e._v("I will show you how to create real Blueprint Node using C++. Normally all you need is expose function from C++, back to blueprints, but creating custom node have big benefits. One the biggest is dynamic allocation of pins!")]),e._v(" "),n("h2",{attrs:{id:"preparations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preparations"}},[e._v("#")]),e._v(" Preparations")]),e._v(" "),n("p",[e._v("You will need to make some preprations before you can make custom node. First you need to add custom Editor Module your plugin, game or engine module. As it requires quite a bit of editor specific modules dependencies. For now assume you are working on plugin. open .uplugin file and add this code:")]),e._v(" "),n("p",[e._v('"Modules" :\n[\n{\n"Name": "GameInventorySystem",\n"Type": "Runtime",\n"LoadingPhase" : "PreDefault"\n},\n{\n"Name" : "GameInventorySystemEditor",\n"Type" : "Editor"\n}\n],')]),e._v(" "),n("p",[e._v("The first module is your runtime module. Second one is editor module, which will have dependencies on runtime module. Name your modules however you want, although it's good practice to postfix editor modules with Editor.")]),e._v(" "),n("p",[e._v("Also please note I will be using code from my own plugin.")]),e._v(" "),n("p",[e._v("Now in runtime module we need to add, BlueprintFunctionLibrary, and in it at least one function.")]),e._v(" "),n("p",[e._v('class GAMEINVENTORYSYSTEM_API UGISBlueprintFunctionLibrary : public UBlueprintFunctionLibrary\n{\nGENERATED_UCLASS_BODY()\npublic:\nUFUNCTION(BlueprintCallable, meta = (WorldContext = "WorldContextObject", FriendlyName = "Create Item Data", BlueprintInternalUseOnly = "true"), Category = "Game Inventory System")\nstatic class UGISItemData* Create(UObject* WorldContextObject, TSubclassOf<class UGISItemData> ItemType, APlayerController* OwningPlayer);\n};')]),e._v(" "),n("p",[e._v("Important part about UFUNCTION is BlueprintInternalUseOnly, which hides node from blueprint. That is fully intentional, we don't want this node to show in BP. Also don't forget to add implementation. Which will return pointer to created item. You can do it just by using ConstructObject<> or you can create template function like this:")]),e._v(" "),n("p",[e._v("template< class T >\nT* CreateDataItem(APlayerController* OwningPlayer, UClass* UserWidgetClass)\n{\nif (!UserWidgetClass->IsChildOf(UGISItemData::StaticClass()))\n{\nreturn nullptr;\n}\n \n// Assign the outer to the game instance if it exists, otherwise use the player controller's world\nUWorld* World = OwningPlayer->GetWorld();\nStaticCast<UObject*>(World);\nUGISItemData* NewWidget = ConstructObject<UGISItemData>(UserWidgetClass, OwningPlayer);\nreturn Cast<T>(NewWidget);\n}")]),e._v(" "),n("p",[e._v("You can also add additional post construction initialization steps in this function, to accomodate for your specific needs.")]),e._v(" "),n("p",[e._v("Now move to editor module and open YourModuleName.Build.cs")]),e._v(" "),n("p",[e._v("Add this:")]),e._v(" "),n("p",[n("code",[e._v('PublicIncludePaths.AddRange( new string[] { "YourRunTimeModule", "YourRunTimeModule/Public" // ... add public include paths required here ... } ); PrivateIncludePaths.AddRange( new string[] { "YourRunTimeModuleEditor/Private", // ... add other private include paths required here ... } ); PublicDependencyModuleNames.AddRange( new string[] { "Core", "YourRunTimeModule" // ... add other public dependencies that you statically link with here ... } ); PrivateDependencyModuleNames.AddRange( new string[] { // ... add private dependencies that you statically link with here ... "Core", "CoreUObject", "InputCore", "Slate", "Engine", "AssetTools", "UnrealEd", // for FAssetEditorManager "KismetWidgets", "KismetCompiler", "BlueprintGraph", "GraphEditor", "Kismet", // for FWorkflowCentricApplication "PropertyEditor", "EditorStyle", "Slate", "SlateCore", "MovieSceneCore", "Sequencer", "DetailCustomizations", "Settings", "RenderCore", } );')])]),e._v(" "),n("h2",{attrs:{id:"implementing-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementing-node"}},[e._v("#")]),e._v(" Implementing Node:")]),e._v(" "),n("p",[e._v("Now add new class, to your editor module. Name it something Like BPNode_MyNode (mine is named BPNode_CreateItemData). Epic convention is K2, but it was from before Blueprint name has been invented (;.")]),e._v(" "),n("p",[e._v("Header:")]),e._v(" "),n("p",[e._v('#pragma once\n#include "K2Node.h"\n#include "K2Node_ConstructObjectFromClass.h"\n#include "BPNode_CreateItemData.generated.h"\n \nUCLASS(BlueprintType, Blueprintable)\nclass GAMEINVENTORYSYSTEMEDITOR_API UBPNode_CreateItemData : public UK2Node_ConstructObjectFromClass\n{\nGENERATED_UCLASS_BODY()\n \n// Begin UEdGraphNode interface.\nvirtual void AllocateDefaultPins() override;\nvirtual FLinearColor GetNodeTitleColor() const override;\n//this is where node will be expanded with additional pins!\nvirtual void ExpandNode(class FKismetCompilerContext& CompilerContext, UEdGraph* SourceGraph) override;\n// End UEdGraphNode interface.\n \n// Begin UK2Node interface\nvoid GetMenuEntries(FGraphContextMenuBuilder& ContextMenuBuilder) const;\nvirtual FText GetMenuCategory() const override;\n// End UK2Node interface.\n \n/** Get the owning player pin */\nUEdGraphPin* GetOwningPlayerPin() const;\n \nprotected:\n/** Gets the default node title when no class is selected */\nvirtual FText GetBaseNodeTitle() const;\n/** Gets the node title when a class has been selected. */\nvirtual FText GetNodeTitleFormat() const;\n/** Gets base class to use for the \'class\' pin.  UObject by default. */\nvirtual UClass* GetClassPinBaseClass() const;\n**  */\nvirtual bool IsSpawnVarPin(UEdGraphPin* Pin) override;\n};')]),e._v(" "),n("p",[e._v("Implementation:")]),e._v(" "),n("p",[e._v('// Copyright 1998-2014 Epic Games, Inc. All Rights Reserved.\n \n#include "GameInventorySystemEditor.h"\n \n#include "GISBlueprintFunctionLibrary.h"\n#include "GISItemData.h"\n \n#include "KismetCompiler.h"\n#include "BlueprintNodeSpawner.h"\n#include "EditorCategoryUtils.h"\n#include "K2ActionMenuBuilder.h"\n \n#include "BPNode_CreateItemData.h"\n \n#define LOCTEXT_NAMESPACE "GameInventorySystem"\n \n//Helper which will store one of the function inputs we excpect BP callable function will have.\nstruct FBPNode_CreateItemDataHelper\n{\nstatic FString OwningPlayerPinName;\n};\n \nFString FBPNode_CreateItemDataHelper::OwningPlayerPinName(TEXT("OwningPlayer"));\n \nUBPNode_CreateItemData::UBPNode_CreateItemData(const FObjectInitializer& ObjectInitializer)\n: Super(ObjectInitializer)\n{\nNodeTooltip = LOCTEXT("NodeTooltip", "Creates a new Item Data");\n}\n \n//Adds default pins to node. These Pins (inputs ?) are always displayed.\nvoid UBPNode_CreateItemData::AllocateDefaultPins()\n{\nSuper::AllocateDefaultPins();\n \nconst UEdGraphSchema_K2* K2Schema = GetDefault<UEdGraphSchema_K2>();\n \n// OwningPlayer pin\nUEdGraphPin* OwningPlayerPin = CreatePin(EGPD_Input, K2Schema->PC_Object, TEXT(""), APlayerController::StaticClass(), false, false, FBPNode_CreateItemDataHelper::OwningPlayerPinName);\nSetPinToolTip(*OwningPlayerPin, LOCTEXT("OwningPlayerPinDescription", "The player that \'owns\' the this item."));\n}\n \nFLinearColor UBPNode_CreateItemData::GetNodeTitleColor() const\n{\nreturn Super::GetNodeTitleColor();\n}\n \nFText UBPNode_CreateItemData::GetBaseNodeTitle() const\n{\nreturn LOCTEXT("CreateItemData_BaseTitle", "Create Item Data");\n}\n \nFText UBPNode_CreateItemData::GetNodeTitleFormat() const\n{\nreturn LOCTEXT("CreateItemData", "Create {ClassName} Item Data");\n}\n \n//which class can be used with this node to create objects. All childs of class can be used.\nUClass* UBPNode_CreateItemData::GetClassPinBaseClass() const\n{\nreturn UGISItemData::StaticClass();\n}\n \n//Set context menu category in which our node will be present.\nFText UBPNode_CreateItemData::GetMenuCategory() const\n{\nreturn FText::FromString("Game Inventory System");\n}\n \nvoid UBPNode_CreateItemData::GetMenuEntries(FGraphContextMenuBuilder& ContextMenuBuilder) const\n{\nUBPNode_CreateItemData* TemplateNode = NewObject<UBPNode_CreateItemData>(GetTransientPackage(), GetClass());\n \nconst FString Category = TEXT("UGame Inventory System");\nconst FText   MenuDesc = LOCTEXT("CreateItemDataMenuOption", "Create Item Data...");\nconst FString Tooltip = TEXT("Create a new Item Data container");\n \nTSharedPtr<FEdGraphSchemaAction_K2NewNode> NodeAction = FK2ActionMenuBuilder::AddNewNodeAction(ContextMenuBuilder, Category, MenuDesc, Tooltip);\nNodeAction->NodeTemplate = TemplateNode;\n}\n \n//gets out predefined pin\nUEdGraphPin* UBPNode_CreateItemData::GetOwningPlayerPin() const\n{\nUEdGraphPin* Pin = FindPin(FBPNode_CreateItemDataHelper::OwningPlayerPinName);\ncheck(Pin == NULL || Pin->Direction == EGPD_Input);\nreturn Pin;\n}\n \nbool UBPNode_CreateItemData::IsSpawnVarPin(UEdGraphPin* Pin)\n{\nreturn(Super::IsSpawnVarPin(Pin) &&\nPin->PinName != FBPNode_CreateItemDataHelper::OwningPlayerPinName);\n}\n \n//and this is where magic really happens. This will expand node for our custom object, with properties\n//which are set as EditAwnywhere and meta=(ExposeOnSpawn), or equivalent in blueprint.\nvoid UBPNode_CreateItemData::ExpandNode(class FKismetCompilerContext& CompilerContext, UEdGraph* SourceGraph)\n{\nSuper::ExpandNode(CompilerContext, SourceGraph);\n \n//look for static function in BlueprintFunctionLibrary\n//In this class and of this name\nstatic FName Create_FunctionName = GET_FUNCTION_NAME_CHECKED(UGISBlueprintFunctionLibrary, Create);\n//with these inputs (as a Side note, these should be probabaly FName not FString)\nstatic FString WorldContextObject_ParamName = FString(TEXT("WorldContextObject"));\nstatic FString WidgetType_ParamName = FString(TEXT("ItemType"));\nstatic FString OwningPlayer_ParamName = FString(TEXT("OwningPlayer"));\n \n//get pointer to self;\nUBPNode_CreateItemData* CreateItemDataNode = this;\n \n//get pointers to default pins.\n//Exec pins are those big arrows, connected with thick white lines.\nUEdGraphPin* SpawnNodeExec = CreateItemDataNode->GetExecPin();\n//gets world context pin from our static function\nUEdGraphPin* SpawnWorldContextPin = CreateItemDataNode->GetWorldContextPin();\n//the same as above\nUEdGraphPin* SpawnOwningPlayerPin = CreateItemDataNode->GetOwningPlayerPin();\n//get class pin which is used to determine which class to spawn.\nUEdGraphPin* SpawnClassPin = CreateItemDataNode->GetClassPin();\n//then pin is the same as exec pin, just on the other side (the out arrow).\nUEdGraphPin* SpawnNodeThen = CreateItemDataNode->GetThenPin();\n//result pin, which will output our spawned object.\nUEdGraphPin* SpawnNodeResult = CreateItemDataNode->GetResultPin();\n \nUClass* SpawnClass = (SpawnClassPin != NULL) ? Cast<UClass>(SpawnClassPin->DefaultObject) : NULL;\nif ((0 == SpawnClassPin->LinkedTo.Num()) && (NULL == SpawnClass))\n{\nCompilerContext.MessageLog.Error(*LOCTEXT("CreateItemDAtaNodeMissingClass_Error", "Spawn node @@ must have a class specified.").ToString(), CreateItemDataNode);\n// we break exec links so this is the only error we get, don\'t want the CreateItemData node being considered and giving \'unexpected node\' type warnings\nCreateItemDataNode->BreakAllNodeLinks();\nreturn;\n}\n \n//////////////////////////////////////////////////////////////////////////\n// create \'UWidgetBlueprintLibrary::Create\' call node\nUK2Node_CallFunction* CallCreateNode = CompilerContext.SpawnIntermediateNode<UK2Node_CallFunction>(CreateItemDataNode, SourceGraph);\nCallCreateNode->FunctionReference.SetExternalMember(Create_FunctionName, UBPNode_CreateItemData::StaticClass());\nCallCreateNode->AllocateDefaultPins();\n \n//allocate nodes for created widget.\nUEdGraphPin* CallCreateExec = CallCreateNode->GetExecPin();\nUEdGraphPin* CallCreateWorldContextPin = CallCreateNode->FindPinChecked(WorldContextObject_ParamName);\nUEdGraphPin* CallCreateWidgetTypePin = CallCreateNode->FindPinChecked(WidgetType_ParamName);\nUEdGraphPin* CallCreateOwningPlayerPin = CallCreateNode->FindPinChecked(OwningPlayer_ParamName);\nUEdGraphPin* CallCreateResult = CallCreateNode->GetReturnValuePin();\n \n// Move \'exec\' connection from create widget node to \'UWidgetBlueprintLibrary::Create\'\nCompilerContext.MovePinLinksToIntermediate(*SpawnNodeExec, *CallCreateExec);\n \nif (SpawnClassPin->LinkedTo.Num() > 0)\n{\n// Copy the \'blueprint\' connection from the spawn node to \'UWidgetBlueprintLibrary::Create\'\nCompilerContext.MovePinLinksToIntermediate(*SpawnClassPin, *CallCreateWidgetTypePin);\n}\nelse\n{\n// Copy blueprint literal onto \'UWidgetBlueprintLibrary::Create\' call\nCallCreateWidgetTypePin->DefaultObject = SpawnClass;\n}\n \n// Copy the world context connection from the spawn node to \'UWidgetBlueprintLibrary::Create\' if necessary\nif (SpawnWorldContextPin)\n{\nCompilerContext.MovePinLinksToIntermediate(*SpawnWorldContextPin, *CallCreateWorldContextPin);\n}\n \n// Copy the \'Owning Player\' connection from the spawn node to \'UWidgetBlueprintLibrary::Create\'\nCompilerContext.MovePinLinksToIntermediate(*SpawnOwningPlayerPin, *CallCreateOwningPlayerPin);\n \n// Move result connection from spawn node to \'UWidgetBlueprintLibrary::Create\'\nCallCreateResult->PinType = SpawnNodeResult->PinType; // Copy type so it uses the right actor subclass\nCompilerContext.MovePinLinksToIntermediate(*SpawnNodeResult, *CallCreateResult);\n \n//////////////////////////////////////////////////////////////////////////\n// create \'set var\' nodes\n \n// Get \'result\' pin from \'begin spawn\', this is the actual actor we want to set properties on\nUEdGraphPin* LastThen = FKismetCompilerUtilities::GenerateAssignmentNodes(CompilerContext, SourceGraph, CallCreateNode, CreateItemDataNode, CallCreateResult, GetClassToSpawn());\n \n// Move \'then\' connection from create widget node to the last \'then\'\nCompilerContext.MovePinLinksToIntermediate(*SpawnNodeThen, *LastThen);\n \n// Break any links to the expanded node\nCreateItemDataNode->BreakAllNodeLinks();\n}\n \n#undef LOCTEXT_NAMESPACE')]),e._v(" "),n("p",[e._v("Hopefully comments should explain what this code does. The short version is, it create node with dynamically allocated pins, which construct custom objects.")]),e._v(" "),n("p",[n("a",{attrs:{href:"/index.php?title=User:Iniside&action=edit&redlink=1",title:"User:Iniside (page does not exist)"}},[e._v("iniside")]),e._v(" ("),n("a",{attrs:{href:"/index.php?title=User_talk:Iniside&action=edit&redlink=1",title:"User talk:Iniside (page does not exist)"}},[e._v("talk")]),e._v(")")]),e._v(" "),n("p",[e._v('Retrieved from "'),n("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Create_Custom_K2_Node_For_Blueprint&oldid=10481",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Create_Custom_K2_Node_For_Blueprint&oldid=10481"),n("OutboundLink")],1),e._v('"')]),e._v(" "),n("p",[n("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Category")]),e._v(":")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=i.exports}}]);