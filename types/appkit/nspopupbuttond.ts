declare namespace cocoascript {
/**
 * A control for selecting an item from a list.
 * doc://com.apple.documentation/documentation/appkit/nspopupbutton
 */
interface NSPopUpButton extends NSButton {
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1524562-initwithframe
  initWithFrame_pullsDown(buttonFrame: cocoascript.NSRect, flag: cocoascript.BOOL):cocoascript.NSPopUpButton;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1532070-pullsdown
  pullsDown(): cocoascript.BOOL;
  setPullsDown(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1530543-autoenablesitems
  autoenablesItems(): cocoascript.BOOL;
  setAutoenablesItems(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1529500-additemwithtitle
  addItemWithTitle(title: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1532518-additemswithtitles
  addItemsWithTitles(itemTitles: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1533750-insertitemwithtitle
  insertItemWithTitle_atIndex(title: cocoascript.NSString, index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1534430-removeallitems
  removeAllItems():void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1530675-removeitemwithtitle
  removeItemWithTitle(title: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1525241-removeitematindex
  removeItemAtIndex(index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1526197-selecteditem
  selectedItem(): cocoascript.NSMenuItem;
  setSelectedItem(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1534038-titleofselecteditem
  titleOfSelectedItem(): cocoascript.NSString;
  setTitleOfSelectedItem(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1534134-indexofselecteditem
  indexOfSelectedItem(): cocoascript.NSInteger;
  setIndexOfSelectedItem(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1577134-selectedtag
  selectedTag(): cocoascript.NSInteger;
  setSelectedTag(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1527162-selectitem
  selectItem(item: cocoascript.NSMenuItem):void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1534906-selectitematindex
  selectItemAtIndex(index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1528181-selectitemwithtag
  selectItemWithTag(tag: cocoascript.NSInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1525666-selectitemwithtitle
  selectItemWithTitle(title: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1535480-menu
  menu(): cocoascript.NSMenu;
  setMenu(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1534959-numberofitems
  numberOfItems(): cocoascript.NSInteger;
  setNumberOfItems(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1535361-itemarray
  itemArray(): cocoascript.NSMenuItem;
  setItemArray(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1535860-itematindex
  itemAtIndex(index: cocoascript.NSInteger):cocoascript.NSMenuItem;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1524908-itemtitleatindex
  itemTitleAtIndex(index: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1529271-itemtitles
  itemTitles(): cocoascript.NSString;
  setItemTitles(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1524680-itemwithtitle
  itemWithTitle(title: cocoascript.NSString):cocoascript.NSMenuItem;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1535371-lastitem
  lastItem(): cocoascript.NSMenuItem;
  setLastItem(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1529708-indexofitem
  indexOfItem(item: cocoascript.NSMenuItem):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1534140-indexofitemwithtag
  indexOfItemWithTag(tag: cocoascript.NSInteger):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1535406-indexofitemwithtitle
  indexOfItemWithTitle(title: cocoascript.NSString):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1533993-indexofitemwithrepresentedobject
  indexOfItemWithRepresentedObject(obj: cocoascript.NSPopUpButton):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1535747-indexofitemwithtarget
  indexOfItemWithTarget_andAction(target: cocoascript.NSPopUpButton, actionSelector: cocoascript.SEL):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1535345-preferrededge
  preferredEdge(): cocoascript.NSRectEdge;
  setPreferredEdge(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1535132-settitle
  setTitle(string: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbutton/1527124-synchronizetitleandselecteditem
  synchronizeTitleAndSelectedItem():void;
  // doc://com.apple.documentation/documentation/appkit/nspopupbuttonwillpopupnotification
  NSPopUpButtonWillPopUpNotification(): cocoascript.NSNotificationName;
  setNSPopUpButtonWillPopUpNotification(): void;
  // 
  alloc():cocoascript.NSPopUpButton;
  // 
  init():cocoascript.NSPopUpButton;
}
}
declare const NSPopUpButton: cocoascript.NSPopUpButton;

