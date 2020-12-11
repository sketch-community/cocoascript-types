declare namespace cocoascript {
  /**
   * A multipage interface that displays one page at a time.
   * doc://com.apple.documentation/documentation/appkit/nstabview
   */
  interface NSTabView extends NSView {
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391615-delegate
    delegate(): cocoascript.NSTabViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391607-addtabviewitem
    addTabViewItem(tabViewItem: cocoascript.NSTabViewItem):void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391584-inserttabviewitem
    insertTabViewItem_atIndex(tabViewItem: cocoascript.NSTabViewItem, index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391641-removetabviewitem
    removeTabViewItem(tabViewItem: cocoascript.NSTabViewItem):void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391604-indexoftabviewitem
    indexOfTabViewItem(tabViewItem: cocoascript.NSTabViewItem):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391586-indexoftabviewitemwithidentifier
    indexOfTabViewItemWithIdentifier(identifier: cocoascript.NSTabView):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391596-numberoftabviewitems
    numberOfTabViewItems(): cocoascript.NSInteger;
    setNumberOfTabViewItems(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391637-tabviewitematindex
    tabViewItemAtIndex(index: cocoascript.NSInteger):cocoascript.NSTabViewItem;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391613-tabviewitems
    tabViewItems(): cocoascript.NSTabViewItem;
    setTabViewItems(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391602-tabviewtype
    tabViewType(): cocoascript.NSTabViewType;
    setTabViewType(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/2097105-tabposition
    tabPosition(): cocoascript.NSTabPosition;
    setTabPosition(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/2097112-tabviewbordertype
    tabViewBorderType(): cocoascript.NSTabViewBorderType;
    setTabViewBorderType(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391627-selectfirsttabviewitem
    selectFirstTabViewItem(sender: cocoascript.NSTabView):void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391635-selectlasttabviewitem
    selectLastTabViewItem(sender: cocoascript.NSTabView):void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391639-selectnexttabviewitem
    selectNextTabViewItem(sender: cocoascript.NSTabView):void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391594-selectprevioustabviewitem
    selectPreviousTabViewItem(sender: cocoascript.NSTabView):void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391649-selecttabviewitem
    selectTabViewItem(tabViewItem: cocoascript.NSTabViewItem):void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391590-selecttabviewitematindex
    selectTabViewItemAtIndex(index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391629-selecttabviewitemwithidentifier
    selectTabViewItemWithIdentifier(identifier: cocoascript.NSTabView):void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391625-selectedtabviewitem
    selectedTabViewItem(): cocoascript.NSTabViewItem;
    setSelectedTabViewItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391653-takeselectedtabviewitemfromsende
    takeSelectedTabViewItemFromSender(sender: cocoascript.NSTabView):void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391617-font
    font(): cocoascript.NSFont;
    setFont(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391647-controltint
    controlTint(): cocoascript.NSControlTint;
    setControlTint(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391588-drawsbackground
    drawsBackground(): cocoascript.BOOL;
    setDrawsBackground(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391598-minimumsize
    minimumSize(): cocoascript.NSSize;
    setMinimumSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391659-contentrect
    contentRect(): cocoascript.NSRect;
    setContentRect(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391633-controlsize
    controlSize(): cocoascript.NSControlSize;
    setControlSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391645-allowstruncatedlabels
    allowsTruncatedLabels(): cocoascript.BOOL;
    setAllowsTruncatedLabels(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabview/1391606-tabviewitematpoint
    tabViewItemAtPoint(point: cocoascript.NSPoint):cocoascript.NSTabViewItem;
    //
    alloc():cocoascript.NSTabView;
    //
    init():cocoascript.NSTabView;
  }
}

declare const NSTabView: cocoascript.NSTabView;
