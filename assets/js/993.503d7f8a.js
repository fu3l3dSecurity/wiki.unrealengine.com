(window.webpackJsonp=window.webpackJsonp||[]).push([[993],{643:function(e,t,n){"use strict";n.r(t);var r=n(28),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Slate, Tree View Widget, Ex: In-Editor File Structure Explorer - Epic Wiki")]),e._v(" "),n("h1",{attrs:{id:"slate-tree-view-widget-ex-in-editor-file-structure-explorer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slate-tree-view-widget-ex-in-editor-file-structure-explorer"}},[e._v("#")]),e._v(" Slate, Tree View Widget, Ex: In-Editor File Structure Explorer")]),e._v(" "),n("h2",{attrs:{id:"contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#Video"}},[e._v("2 Video")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#The_Core_Data"}},[e._v("3 The Core Data")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#Slate_.h"}},[e._v("4 Slate .h")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#Constructor_and_DDEdEngine"}},[e._v("4.1 Constructor and DDEdEngine")])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#Instancing_the_Slate_Widget"}},[e._v("5 Instancing the Slate Widget")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#Slate_.cpp"}},[e._v("6 Slate .cpp")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#Important_Functions"}},[e._v("7 Important Functions")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#On_Generate_Row"}},[e._v("7.1 On Generate Row")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#On_Get_Children"}},[e._v("7.2 On Get Children")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#User_Input"}},[e._v("7.3 User Input")])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#Core_Function"}},[e._v("8 Core Function")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#Core_Data"}},[e._v("9 Core Data")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#Summary"}},[e._v("10 Summary")])])]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[n("em",[e._v("Author:")]),e._v(" "),n("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),n("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),n("p",[e._v("Dear Community,")]),e._v(" "),n("p",[e._v("Here's a tutorial to help you get started with Slate tree views!")]),e._v(" "),n("p",[e._v("This is the widget that has those arrows you can click to expand/contract subcategories!")]),e._v(" "),n("p",[e._v("In this example, I was making a hard drive file structure viewer, and I saved off a version that would be a great starting point 😃")]),e._v(" "),n("h2",{attrs:{id:"video"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[e._v("#")]),e._v(" Video")]),e._v(" "),n("p",[e._v("This video shows the entire finished code that this code I am giving you here was the foundation for!")]),e._v(" "),n("p",[e._v("I wanted to keep this example simple, and also, not too implementation-specific.")]),e._v(" "),n("p",[e._v("You can use this coding as a starting point for your project-specific tree-view needs!")]),e._v(" "),n("h2",{attrs:{id:"the-core-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-core-data"}},[e._v("#")]),e._v(" The Core Data")]),e._v(" "),n("p",[e._v("Trees are branching structures composed of a fundamental node data structure.")]),e._v(" "),n("p",[e._v("Here is that data structure for this example:")]),e._v(" "),n("p",[e._v("//Tree view data structure by Rama\n \n#pragma once\n \n \ntypedef TSharedPtr< class FDDFileTreeItem > FDDFileTreeItemPtr;\n \n \n/**\n* The Data for a single node in the Directory Tree\n*/\nclass FDDFileTreeItem\n{\n \npublic:\n \n/** @return Returns the parent or NULL if this is a root */\nconst FDDFileTreeItemPtr GetParentCategory() const\n{\nreturn ParentDir.Pin();\n}\n \n/** @return the path on hard disk, read-only */\nconst FString& GetDirectoryPath() const\n{\nreturn DirectoryPath;\n}\n \n/** @return name to display in file tree view! read-only */\nconst FString& GetDisplayName() const\n{\nreturn DisplayName;\n}\n \n/** @return Returns all subdirectories, read-only */\nconst TArray< FDDFileTreeItemPtr >& GetSubDirectories() const\n{\nreturn SubDirectories;\n}\n \n/** @return Returns all subdirectories, read or write */\nTArray< FDDFileTreeItemPtr >& AccessSubDirectories()\n{\nreturn SubDirectories;\n}\n \n/** Add a subdirectory to this node in the tree! */\nvoid AddSubDirectory(const FDDFileTreeItemPtr NewSubDir)\n{\nSubDirectories.Add(NewSubDir);\n}\n \npublic:\n \n/** Constructor for FDDFileTreeItem */\nFDDFileTreeItem(const FDDFileTreeItemPtr IN_ParentDir, const FString& IN_DirectoryPath, const FString& IN_DisplayName)\n: ParentDir( \t IN_ParentDir)\n, DirectoryPath( IN_DirectoryPath)\n, DisplayName(\t IN_DisplayName)\n{\n}\n \n \nprivate:\n \n/** Parent item or NULL if this is a root  */\nTWeakPtr< FDDFileTreeItem > ParentDir;\n \n/** Full path of this directory in the tree */\nFString DirectoryPath;\n \n/** Display name of the category */\nFString DisplayName;\n \n/** Child categories */\nTArray< FDDFileTreeItemPtr > SubDirectories;\n};")]),e._v(" "),n("h2",{attrs:{id:"slate-h"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slate-h"}},[e._v("#")]),e._v(" Slate .h")]),e._v(" "),n("p",[e._v('// File Tree Viewer by Rama\n \n#pragma once\n \n//DD File Tree Item\n#include "DDFileTreeItem.h"\n \n//~~~ Forward Declarations ~~~\nclass UDDEdEngine;\n \n \ntypedef STreeView< FDDFileTreeItemPtr > SDDFileTreeView;\n \n/**\n* File Tree View\n*/\nclass SDDFileTree : public SCompoundWidget\n{\n \npublic:\n \nSLATE_BEGIN_ARGS( SDDFileTree )\n{}\n \nSLATE_END_ARGS()\n \n \n//~~~~~~~~\n//\t\tDDEdEngine\n//~~~~~~~~\npublic:\n//owns this\nTWeakObjectPtr<class UDDEdEngine> DDEdEngine;\n \n \n/** Refresh the Tree */\n//bool DoRefresh;\n \n \n//~~~\npublic:\n/** Widget constructor */\nvoid Construct( const FArguments& Args, TWeakObjectPtr<class UDDEdEngine> IN_DDEdEngine );\n \n/** Destructor */\n~SDDFileTree();\n \n/** @return Returns the currently selected category item */\nFDDFileTreeItemPtr GetSelectedDirectory() const;\n \n/** Selects the specified category */\nvoid SelectDirectory( const FDDFileTreeItemPtr& CategoryToSelect );\n \n/** @return Returns true if the specified item is currently expanded in the tree */\nbool IsItemExpanded( const FDDFileTreeItemPtr Item ) const;\n \nprivate:\n \n/** Called to generate a widget for the specified tree item */\nTSharedRef<ITableRow> DDFileTree_OnGenerateRow( FDDFileTreeItemPtr Item, const TSharedRef<STableViewBase>& OwnerTable );\n \n/** Given a tree item, fills an array of child items */\nvoid DDFileTree_OnGetChildren( FDDFileTreeItemPtr Item, TArray< FDDFileTreeItemPtr >& OutChildren );\n \n/** Called when the user clicks on an  item, or when selection changes by some other means */\nvoid DDFileTree_OnSelectionChanged( FDDFileTreeItemPtr Item, ESelectInfo::Type SelectInfo );\n \n/** Rebuilds the category tree from scratch */\nvoid RebuildFileTree();\n \n/** SWidget overrides */\nvirtual void Tick( const FGeometry& AllottedGeometry, const double InCurrentTime, const float InDeltaTime ) OVERRIDE;\n \n \nprivate:\n \n \n/** The tree view widget*/\nTSharedPtr< SDDFileTreeView > DDFileTreeView;\n \n/** The Core Data for the Tree Viewer! */\nTArray< FDDFileTreeItemPtr > Directories;\n};')]),e._v(" "),n("h3",{attrs:{id:"constructor-and-ddedengine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#constructor-and-ddedengine"}},[e._v("#")]),e._v(" Constructor and DDEdEngine")]),e._v(" "),n("p",[e._v("In my case I am calling this widget from within a custom version of the engine via a custom class that extends UnrealEdEngine.")]),e._v(" "),n("p",[e._v("I am passing in pointer to the UnrealEdEngine when the widget is first constructed.")]),e._v(" "),n("p",[e._v("You could use your HUD class instead!")]),e._v(" "),n("p",[e._v("I dont rely on any EdEngine functionality for this code sample, replace EdEngine with your own chosen parenting class.")]),e._v(" "),n("p",[e._v("/** Widget constructor */\nvoid Construct( const FArguments& Args, TWeakObjectPtr<class UDDEdEngine> IN_DDEdEngine );")]),e._v(" "),n("h2",{attrs:{id:"instancing-the-slate-widget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#instancing-the-slate-widget"}},[e._v("#")]),e._v(" Instancing the Slate Widget")]),e._v(" "),n("p",[e._v("Here's an example of creating the widget:")]),e._v(" "),n("p",[e._v("//in the .h of parent class:\n \n//TSharedPtr"),n("class",{attrs:{SDDFileTree:""}},[e._v(" DDFileTree;\n \n//in your parent class in which you want to create the widget\nif( !DDFileTree.IsValid() )\n{\t\nSAssignNew(\tDDFileTree,\tSDDFileTree,\tCast<UDDEdEngine>(this)\t);\n}")])],1),e._v(" "),n("h2",{attrs:{id:"slate-cpp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slate-cpp"}},[e._v("#")]),e._v(" Slate .cpp")]),e._v(" "),n("p",[e._v('// File Tree Viewer by Rama\n \n#include "VictoryGame.h"\n \n//This header\n#include "SDDFileTree.h"\n \n//The Data\n#include "DDFileTreeItem.h"\n \nvoid SDDFileTree::Construct(const FArguments& Args,TWeakObjectPtr<class UDDEdEngine> IN_DDEdEngine)\n{\n//Set DDEdEngine\nDDEdEngine = IN_DDEdEngine;\n//~~~~~~~~~~~~~~~~~~~\n \n//Build Core Data\nRebuildFileTree();\n \n//Build the tree view of the above core data\nDDFileTreeView =\nSNew( SDDFileTreeView )\n \n// For now we only support selecting a single folder in the tree\n.SelectionMode( ESelectionMode::Single )\n.ClearSelectionOnClick( false )\t\t// Don\'t allow user to select nothing.\n \n.TreeItemsSource( &Directories )\n.OnGenerateRow( this, &SDDFileTree::DDFileTree_OnGenerateRow )\n.OnGetChildren( this, &SDDFileTree::DDFileTree_OnGetChildren )\n \n.OnSelectionChanged( this, &SDDFileTree::DDFileTree_OnSelectionChanged )\n;\n \n/*\n// Expand the root  by default\nfor( auto RootDirIt( Directories.CreateConstIterator() ); RootDirIt; ++RootDirIt )\n{\nconst auto& Dir = *RootDirIt;\nDDFileTreeView->SetItemExpansion( Dir, true );\n}\n \n// Select the first item by default\nif( Directories.Num() > 0 )\n{\nDDFileTreeView->SetSelection( Directories[ 0 ] );\n}\n*/\n \nChildSlot.Widget = DDFileTreeView.ToSharedRef();\n}\n \n \nSDDFileTree::~SDDFileTree()\n{\n}\n \n \n \nvoid SDDFileTree::RebuildFileTree()\n{\n \nDirectories.Empty();\n \n//~~~~~~~~~~~~~~~~~~~\n//Root Level\nTSharedRef<FDDFileTreeItem> RootDir = MakeShareable(new FDDFileTreeItem(NULL, TEXT("RootDir"), FString("RootDir")));\nDirectories.Add( RootDir );\n \nTSharedRef<FDDFileTreeItem> RootDir2 = MakeShareable(new FDDFileTreeItem(NULL, TEXT("RootDir2"), FString("RootDir2")));\nDirectories.Add( RootDir2 );\n//~~~~~~~~~~~~~~~~~~~\n \n//Root Category\nFDDFileTreeItemPtr ParentCategory = RootDir;\n \n \n//Add\nFDDFileTreeItemPtr EachSubDir = MakeShareable(new FDDFileTreeItem(ParentCategory,  "Joy", "Joy"));\nRootDir->AddSubDirectory(EachSubDir);\n \n//Add\nEachSubDir = MakeShareable(new FDDFileTreeItem(ParentCategory, "Song", "Song"));\nRootDir->AddSubDirectory(EachSubDir);\n \n//Add\nFDDFileTreeItemPtr SongDir = MakeShareable(new FDDFileTreeItem(ParentCategory,  "Dance", "Dance"));\nEachSubDir->AddSubDirectory(SongDir);\n \n//Add\nSongDir = MakeShareable(new FDDFileTreeItem(ParentCategory, "Rainbows", "Rainbows"));\nEachSubDir->AddSubDirectory(SongDir);\n \n//Add\nEachSubDir = MakeShareable(new FDDFileTreeItem(ParentCategory, "Butterflies", "Butterflies"));\nRootDir->AddSubDirectory(EachSubDir);\n \n \n//Refresh\nif( DDFileTreeView.IsValid() )\n{\nDDFileTreeView->RequestTreeRefresh();\n}\n}\n \nTSharedRef<ITableRow> SDDFileTree::DDFileTree_OnGenerateRow( FDDFileTreeItemPtr Item, const TSharedRef<STableViewBase>& OwnerTable )\n{\nif(!Item.IsValid())\n{\nreturn SNew( STableRow< FDDFileTreeItemPtr >, OwnerTable )\n[\nSNew(STextBlock)\n.Text( FString("THIS WAS NULL SOMEHOW") )\n];\n}\nreturn SNew( STableRow< FDDFileTreeItemPtr >, OwnerTable )\n[\nSNew(STextBlock)\n.Text( Item->GetDisplayName() )\n.Font(FSlateFontInfo(FPaths::EngineContentDir() / TEXT("Slate/Fonts/Roboto-Bold.ttf"), 12))\n.ColorAndOpacity(FLinearColor(1,0,1,1))\n.ShadowColorAndOpacity(FLinearColor::Black)\n.ShadowOffset(FIntPoint(-2, 2))\n];\n}\n \n \nvoid SDDFileTree::DDFileTree_OnGetChildren( FDDFileTreeItemPtr Item, TArray< FDDFileTreeItemPtr >& OutChildren )\n{\nconst auto& SubCategories = Item->GetSubDirectories();\nOutChildren.Append( SubCategories );\n}\n \n \n//Key function for interaction with user!\nvoid SDDFileTree::DDFileTree_OnSelectionChanged( FDDFileTreeItemPtr Item, ESelectInfo::Type SelectInfo )\n{\n//Selection Changed! Tell DDEdEngine!\nUE_LOG(YourLog,Warning,TEXT("Item Selected: %s"), *Item->GetDisplayName());\n}\n \n \nFDDFileTreeItemPtr SDDFileTree::GetSelectedDirectory() const\n{\nif( DDFileTreeView.IsValid() )\n{\nauto SelectedItems = DDFileTreeView->GetSelectedItems();\nif( SelectedItems.Num() > 0 )\n{\nconst auto& SelectedCategoryItem = SelectedItems[ 0 ];\nreturn SelectedCategoryItem;\n}\n}\n \nreturn NULL;\n}\n \n \nvoid SDDFileTree::SelectDirectory( const FDDFileTreeItemPtr& CategoryToSelect )\n{\nif( ensure( DDFileTreeView.IsValid() ) )\n{\nDDFileTreeView->SetSelection( CategoryToSelect );\n}\n}\n \n//is the tree item expanded to show children?\nbool SDDFileTree::IsItemExpanded( const FDDFileTreeItemPtr Item ) const\n{\nreturn DDFileTreeView->IsItemExpanded( Item );\n}\n \n \n \nvoid SDDFileTree::Tick( const FGeometry& AllottedGeometry, const double InCurrentTime, const float InDeltaTime )\n{\n// Call parent implementation\nSCompoundWidget::Tick( AllottedGeometry, InCurrentTime, InDeltaTime );\n \n//can do things here every tick\n}')]),e._v(" "),n("h2",{attrs:{id:"important-functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#important-functions"}},[e._v("#")]),e._v(" Important Functions")]),e._v(" "),n("h3",{attrs:{id:"on-generate-row"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#on-generate-row"}},[e._v("#")]),e._v(" On Generate Row")]),e._v(" "),n("p",[e._v("This is the function that decides how each item in the tree gets displayed visually!")]),e._v(" "),n("p",[e._v("You could make it so each item in the tree is its own very fancy Slate widget, I just used TextBlock.")]),e._v(" "),n("p",[e._v('TSharedRef<ITableRow> SDDFileTree::DDFileTree_OnGenerateRow( FDDFileTreeItemPtr Item, const TSharedRef<STableViewBase>& OwnerTable )\n{\nif(!Item.IsValid())\n{\nreturn SNew( STableRow< FDDFileTreeItemPtr >, OwnerTable )\n[\nSNew(STextBlock)\n.Text( FString("THIS WAS NULL SOMEHOW") )\n];\n}\nreturn SNew( STableRow< FDDFileTreeItemPtr >, OwnerTable )\n[\nSNew(STextBlock)\n.Text( Item->GetDisplayName() )\n.Font(FSlateFontInfo(FPaths::EngineContentDir() / TEXT("Slate/Fonts/Roboto-Bold.ttf"), 12))\n.ColorAndOpacity(FLinearColor(1,0,1,1))\n.ShadowColorAndOpacity(FLinearColor::Black)\n.ShadowOffset(FIntPoint(-2, 2))\n];\n}')]),e._v(" "),n("h3",{attrs:{id:"on-get-children"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#on-get-children"}},[e._v("#")]),e._v(" On Get Children")]),e._v(" "),n("p",[e._v("Get children is specific to the Tree View Slate widget, and determines what appears when a tree view item is expanded using the arrow, assuming it has any children.")]),e._v(" "),n("p",[e._v("This function tells Tree view whether the node has any children!")]),e._v(" "),n("p",[e._v("Note that GetSubDirectories() is my own custom function for my data type, but because OnGetChildren uses it, the Tree View knows when one of my custom data structure nodes has any children, and so the arrow should appear and the children should appear when the arrow is expanded.")]),e._v(" "),n("p",[e._v("void SDDFileTree::DDFileTree_OnGetChildren( FDDFileTreeItemPtr Item, TArray< FDDFileTreeItemPtr >& OutChildren )\n{\nconst auto& SubCategories = Item->GetSubDirectories();\nOutChildren.Append( SubCategories );\n}")]),e._v(" "),n("h3",{attrs:{id:"user-input"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#user-input"}},[e._v("#")]),e._v(" User Input")]),e._v(" "),n("p",[e._v("When the user clicks on an item in the tree view, this function below is run!")]),e._v(" "),n("p",[e._v('void SDDFileTree::DDFileTree_OnSelectionChanged( FDDFileTreeItemPtr Item, ESelectInfo::Type SelectInfo )\n{\n//Selection Changed! Tell DDEdEngine!\nUE_LOG(YourLog,Warning,TEXT("Item clicked! %s"), *Item->GetDisplayName());\n}')]),e._v(" "),n("h2",{attrs:{id:"core-function"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#core-function"}},[e._v("#")]),e._v(" Core Function")]),e._v(" "),n("p",[e._v("The core function where the tree is made is below!")]),e._v(" "),n("p",[e._v('void SDDFileTree::RebuildFileTree()\n{\n \nDirectories.Empty();\n \n//~~~~~~~~~~~~~~~~~~~\n//Root Level\nTSharedRef<FDDFileTreeItem> RootDir = MakeShareable(new FDDFileTreeItem(NULL, TEXT("RootDir"), FString("RootDir")));\nDirectories.Add( RootDir );\n \nTSharedRef<FDDFileTreeItem> RootDir2 = MakeShareable(new FDDFileTreeItem(NULL, TEXT("RootDir2"), FString("RootDir2")));\nDirectories.Add( RootDir2 );\n//~~~~~~~~~~~~~~~~~~~\n \n//Root Category\nFDDFileTreeItemPtr ParentCategory = RootDir;\n \n \n//Add\nFDDFileTreeItemPtr EachSubDir = MakeShareable(new FDDFileTreeItem(ParentCategory,  "Joy", "Joy"));\nRootDir->AddSubDirectory(EachSubDir);\n \n//Add\nEachSubDir = MakeShareable(new FDDFileTreeItem(ParentCategory, "Song", "Song"));\nRootDir->AddSubDirectory(EachSubDir);\n \n//Add\nFDDFileTreeItemPtr SongDir = MakeShareable(new FDDFileTreeItem(ParentCategory,  "Dance", "Dance"));\nEachSubDir->AddSubDirectory(SongDir);\n \n//Add\nSongDir = MakeShareable(new FDDFileTreeItem(ParentCategory, "Rainbows", "Rainbows"));\nEachSubDir->AddSubDirectory(SongDir);\n \n//Add\nEachSubDir = MakeShareable(new FDDFileTreeItem(ParentCategory, "Butterflies", "Butterflies"));\nRootDir->AddSubDirectory(EachSubDir);\n \n \n//Refresh\nif( DDFileTreeView.IsValid() )\n{\nDDFileTreeView->RequestTreeRefresh();\n}\n}')]),e._v(" "),n("h2",{attrs:{id:"core-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#core-data"}},[e._v("#")]),e._v(" Core Data")]),e._v(" "),n("p",[e._v("The core data is set to be used in the constructor, here:")]),e._v(" "),n("p",[e._v(".TreeItemsSource( &Directories )")]),e._v(" "),n("h2",{attrs:{id:"summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),n("p",[e._v("Now you know the basics of using a tree view!")]),e._v(" "),n("p",[e._v("You need")]),e._v(" "),n("p",[e._v("1. your own custom data structure that is a node in the tree")]),e._v(" "),n("p",[e._v("2. tree view .h")]),e._v(" "),n("p",[e._v("3. tree view .cpp")]),e._v(" "),n("p",[e._v("and that's all!")]),e._v(" "),n("p",[e._v("Enjoy!")]),e._v(" "),n("p",[n("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),n("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),n("p",[e._v('Retrieved from "'),n("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Slate,_Tree_View_Widget,_Ex:_In-Editor_File_Structure_Explorer&oldid=10406",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Slate,_Tree_View_Widget,_Ex:_In-Editor_File_Structure_Explorer&oldid=10406"),n("OutboundLink")],1),e._v('"')]),e._v(" "),n("p",[n("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Category")]),e._v(":")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=i.exports}}]);