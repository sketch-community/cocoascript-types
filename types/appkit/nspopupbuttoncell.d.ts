declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell
   */
  interface NSPopUpButtonCell extends NSMenuItemCell {
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1528591-inittextcell
    initTextCell_pullsDown(stringValue: cocoascript.NSString, pullDown: cocoascript.BOOL):cocoascript.NSPopUpButtonCell;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1529059-menu
    menu(): cocoascript.NSMenu;
    setMenu(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1529949-pullsdown
    pullsDown(): cocoascript.BOOL;
    setPullsDown(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1530889-autoenablesitems
    autoenablesItems(): cocoascript.BOOL;
    setAutoenablesItems(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1535408-preferrededge
    preferredEdge(): cocoascript.NSRectEdge;
    setPreferredEdge(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1534951-usesitemfrommenu
    usesItemFromMenu(): cocoascript.BOOL;
    setUsesItemFromMenu(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1528446-altersstateofselecteditem
    altersStateOfSelectedItem(): cocoascript.BOOL;
    setAltersStateOfSelectedItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1534598-arrowposition
    arrowPosition(): cocoascript.NSPopUpArrowPosition;
    setArrowPosition(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1526296-additemwithtitle
    addItemWithTitle(title: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1530154-additemswithtitles
    addItemsWithTitles(itemTitles: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1531000-insertitemwithtitle
    insertItemWithTitle_atIndex(title: cocoascript.NSString, index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1530732-removeitemwithtitle
    removeItemWithTitle(title: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1528201-removeitematindex
    removeItemAtIndex(index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1534852-removeallitems
    removeAllItems():void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1533757-itemarray
    itemArray(): cocoascript.NSMenuItem;
    setItemArray(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1533633-numberofitems
    numberOfItems(): cocoascript.NSInteger;
    setNumberOfItems(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1532397-indexofitem
    indexOfItem(item: cocoascript.NSMenuItem):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1532244-indexofitemwithtitle
    indexOfItemWithTitle(title: cocoascript.NSString):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1527486-indexofitemwithtag
    indexOfItemWithTag(tag: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1525489-indexofitemwithrepresentedobject
    indexOfItemWithRepresentedObject(obj: cocoascript.NSPopUpButtonCell):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1534909-indexofitemwithtarget
    indexOfItemWithTarget_andAction(target: cocoascript.NSPopUpButtonCell, actionSelector: cocoascript.SEL):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1525784-itematindex
    itemAtIndex(index: cocoascript.NSInteger):cocoascript.NSMenuItem;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1534638-itemwithtitle
    itemWithTitle(title: cocoascript.NSString):cocoascript.NSMenuItem;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1535415-lastitem
    lastItem(): cocoascript.NSMenuItem;
    setLastItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1525225-selectitem
    selectItem(item: cocoascript.NSMenuItem):void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1534855-selectitematindex
    selectItemAtIndex(index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1534888-selectitemwithtag
    selectItemWithTag(tag: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1534289-selectitemwithtitle
    selectItemWithTitle(title: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1528475-settitle
    setTitle(string: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1533239-selecteditem
    selectedItem(): cocoascript.NSMenuItem;
    setSelectedItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1534937-indexofselecteditem
    indexOfSelectedItem(): cocoascript.NSInteger;
    setIndexOfSelectedItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1535190-synchronizetitleandselecteditem
    synchronizeTitleAndSelectedItem():void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1534248-itemtitleatindex
    itemTitleAtIndex(index: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1532067-itemtitles
    itemTitles(): cocoascript.NSString;
    setItemTitles(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1529952-titleofselecteditem
    titleOfSelectedItem(): cocoascript.NSString;
    setTitleOfSelectedItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1531648-attachpopupwithframe
    attachPopUpWithFrame_inView(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1535041-dismisspopup
    dismissPopUp():void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1530205-performclickwithframe
    performClickWithFrame_inView(frame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncellwillpopupnotification
    NSPopUpButtonCellWillPopUpNotification(): cocoascript.NSNotificationName;
    setNSPopUpButtonCellWillPopUpNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nspopupbuttoncell/1644676-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSPopUpButtonCell;
    //
    alloc():cocoascript.NSPopUpButtonCell;
    //
    init():cocoascript.NSPopUpButtonCell;
  }
}

declare const NSPopUpButtonCell: cocoascript.NSPopUpButtonCell;
