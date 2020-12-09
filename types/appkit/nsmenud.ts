declare namespace cocoascript {
/**
 * An object that manages an app’s menus.
 * doc://com.apple.documentation/documentation/appkit/nsmenu
 */
interface NSMenu extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518141-menubarheight
  menuBarHeight(): cocoascript.CGFloat;
  setMenuBarHeight(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518144-initwithtitle
  initWithTitle(title: cocoascript.NSString):cocoascript.NSMenu;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518201-insertitem
  insertItem_atIndex(newItem: cocoascript.NSMenuItem, index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518146-insertitemwithtitle
  insertItemWithTitle_action_keyEquivalent_atIndex(string: cocoascript.NSString, selector: cocoascript.SEL, charCode: cocoascript.NSString, index: cocoascript.NSInteger):cocoascript.NSMenuItem;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518176-additem
  addItem(newItem: cocoascript.NSMenuItem):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518181-additemwithtitle
  addItemWithTitle_action_keyEquivalent(string: cocoascript.NSString, selector: cocoascript.SEL, charCode: cocoascript.NSString):cocoascript.NSMenuItem;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518257-removeitem
  removeItem(item: cocoascript.NSMenuItem):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518207-removeitematindex
  removeItemAtIndex(index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518154-itemchanged
  itemChanged(item: cocoascript.NSMenuItem):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518234-removeallitems
  removeAllItems():void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518223-itemwithtag
  itemWithTag(tag: cocoascript.NSInteger):cocoascript.NSMenuItem;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518248-itemwithtitle
  itemWithTitle(title: cocoascript.NSString):cocoascript.NSMenuItem;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518218-itematindex
  itemAtIndex(index: cocoascript.NSInteger):cocoascript.NSMenuItem;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518202-numberofitems
  numberOfItems(): cocoascript.NSInteger;
  setNumberOfItems(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518186-itemarray
  itemArray(): cocoascript.NSMenuItem;
  setItemArray(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518178-indexofitem
  indexOfItem(item: cocoascript.NSMenuItem):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518237-indexofitemwithtitle
  indexOfItemWithTitle(title: cocoascript.NSString):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518164-indexofitemwithtag
  indexOfItemWithTag(tag: cocoascript.NSInteger):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518153-indexofitemwithtarget
  indexOfItemWithTarget_andAction(target: cocoascript.NSMenu, actionSelector: cocoascript.SEL):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518175-indexofitemwithrepresentedobject
  indexOfItemWithRepresentedObject(object: cocoascript.NSMenu):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518216-indexofitemwithsubmenu
  indexOfItemWithSubmenu(submenu: cocoascript.NSMenu):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518194-setsubmenu
  setSubmenu_forItem(menu: cocoascript.NSMenu, item: cocoascript.NSMenuItem):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518179-submenuaction
  submenuAction(sender: cocoascript.NSMenu):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518233-attachedmenu
  attachedMenu():cocoascript.NSMenu;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518151-isattached
  isAttached():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518158-locationforsubmenu
  locationForSubmenu(submenu: cocoascript.NSMenu):cocoascript.NSPoint;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518204-supermenu
  supermenu(): cocoascript.NSMenu;
  setSupermenu(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518190-tornoff
  tornOff(): cocoascript.BOOL;
  setTornOff(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518227-autoenablesitems
  autoenablesItems(): cocoascript.BOOL;
  setAutoenablesItems(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518249-update
  update():void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518230-font
  font(): cocoascript.NSFont;
  setFont(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518198-performkeyequivalent
  performKeyEquivalent(event: cocoascript.NSEvent):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518210-performactionforitematindex
  performActionForItemAtIndex(index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518192-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518221-minimumwidth
  minimumWidth(): cocoascript.CGFloat;
  setMinimumWidth(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518185-size
  size(): cocoascript.NSSize;
  setSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518240-sizetofit
  sizeToFit():void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518245-propertiestoupdate
  propertiesToUpdate(): cocoascript.NSMenuProperties;
  setPropertiesToUpdate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518148-menuchangedmessagesenabled
  menuChangedMessagesEnabled(): cocoascript.BOOL;
  setMenuChangedMessagesEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518220-allowscontextmenuplugins
  allowsContextMenuPlugIns(): cocoascript.BOOL;
  setAllowsContextMenuPlugIns(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518188-helprequested
  helpRequested(eventPtr: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518212-popupmenupositioningitem
  popUpMenuPositioningItem_atLocation_inView(item: cocoascript.NSMenuItem, location: cocoascript.NSPoint, view: cocoascript.NSView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518253-showsstatecolumn
  showsStateColumn(): cocoascript.BOOL;
  setShowsStateColumn(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518222-highlighteditem
  highlightedItem(): cocoascript.NSMenuItem;
  setHighlightedItem(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518254-userinterfacelayoutdirection
  userInterfaceLayoutDirection(): cocoascript.NSUserInterfaceLayoutDirection;
  setUserInterfaceLayoutDirection(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518169-delegate
  delegate(): cocoascript.NSMenuDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518150-canceltracking
  cancelTracking():void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518244-canceltrackingwithoutanimation
  cancelTrackingWithoutAnimation():void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518173-contextmenurepresentation
  contextMenuRepresentation():cocoascript.NSMenu;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518139-setcontextmenurepresentation
  setContextMenuRepresentation(menuRep: cocoascript.NSMenu):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518262-tearoffmenurepresentation
  tearOffMenuRepresentation():cocoascript.NSMenu;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518214-settearoffmenurepresentation
  setTearOffMenuRepresentation(menuRep: cocoascript.NSMenu):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518137-setmenurepresentation
  setMenuRepresentation(menuRep: cocoascript.NSMenu):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1518252-menurepresentation
  menuRepresentation():cocoascript.NSMenu;
  // doc://com.apple.documentation/documentation/appkit/nsmenudidadditemnotification
  NSMenuDidAddItemNotification(): cocoascript.NSNotificationName;
  setNSMenuDidAddItemNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenudidchangeitemnotification
  NSMenuDidChangeItemNotification(): cocoascript.NSNotificationName;
  setNSMenuDidChangeItemNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenudidbegintrackingnotification
  NSMenuDidBeginTrackingNotification(): cocoascript.NSNotificationName;
  setNSMenuDidBeginTrackingNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenudidendtrackingnotification
  NSMenuDidEndTrackingNotification(): cocoascript.NSNotificationName;
  setNSMenuDidEndTrackingNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenudidremoveitemnotification
  NSMenuDidRemoveItemNotification(): cocoascript.NSNotificationName;
  setNSMenuDidRemoveItemNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenudidsendactionnotification
  NSMenuDidSendActionNotification(): cocoascript.NSNotificationName;
  setNSMenuDidSendActionNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenuwillsendactionnotification
  NSMenuWillSendActionNotification(): cocoascript.NSNotificationName;
  setNSMenuWillSendActionNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenu/1644714-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSMenu;
  // 
  alloc():cocoascript.NSMenu;
  // 
  init():cocoascript.NSMenu;
}
}
declare const NSMenu: cocoascript.NSMenu;

