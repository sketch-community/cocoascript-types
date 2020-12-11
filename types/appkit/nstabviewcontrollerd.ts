declare namespace cocoascript {
  /**
   * A container view controller that manages a tab view interface, which organizes multiple pages of content but displays only one page at a time.
   * doc://com.apple.documentation/documentation/appkit/nstabviewcontroller
   */
  interface NSTabViewController extends NSViewController {
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428259-tabstyle
    tabStyle(): cocoascript.NSTabViewControllerTabStyle;
    setTabStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428241-tabview
    tabView(): cocoascript.NSTabView;
    setTabView(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428257-transitionoptions
    transitionOptions(): cocoascript.NSViewControllerTransitionOptions;
    setTransitionOptions(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428239-canpropagateselectedchildviewcon
    canPropagateSelectedChildViewControllerTitle(): cocoascript.BOOL;
    setCanPropagateSelectedChildViewControllerTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428222-tabviewitems
    tabViewItems(): cocoascript.NSTabViewItem;
    setTabViewItems(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428233-tabviewitemforviewcontroller
    tabViewItemForViewController(viewController: cocoascript.NSViewController):cocoascript.NSTabViewItem;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428214-addtabviewitem
    addTabViewItem(tabViewItem: cocoascript.NSTabViewItem):void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428255-inserttabviewitem
    insertTabViewItem_atIndex(tabViewItem: cocoascript.NSTabViewItem, index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428235-removetabviewitem
    removeTabViewItem(tabViewItem: cocoascript.NSTabViewItem):void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428220-selectedtabviewitemindex
    selectedTabViewItemIndex(): cocoascript.NSInteger;
    setSelectedTabViewItemIndex(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428253-viewdidload
    viewDidLoad():void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428237-tabview
    tabView_shouldSelectTabViewItem(tabView: cocoascript.NSTabView, tabViewItem: cocoascript.NSTabViewItem):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428231-tabview
    tabView_willSelectTabViewItem(tabView: cocoascript.NSTabView, tabViewItem: cocoascript.NSTabViewItem):void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428243-tabview
    tabView_didSelectTabViewItem(tabView: cocoascript.NSTabView, tabViewItem: cocoascript.NSTabViewItem):void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428218-toolbar
    toolbar_itemForItemIdentifier_willBeInsertedIntoToolbar(toolbar: cocoascript.NSToolbar, itemIdentifier: cocoascript.NSToolbarItemIdentifier, flag: cocoascript.BOOL):cocoascript.NSToolbarItem;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428229-toolbaralloweditemidentifiers
    toolbarAllowedItemIdentifiers(toolbar: cocoascript.NSToolbar):cocoascript.NSToolbarItemIdentifier;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428251-toolbardefaultitemidentifiers
    toolbarDefaultItemIdentifiers(toolbar: cocoascript.NSToolbar):cocoascript.NSToolbarItemIdentifier;
    // doc://com.apple.documentation/documentation/appkit/nstabviewcontroller/1428261-toolbarselectableitemidentifiers
    toolbarSelectableItemIdentifiers(toolbar: cocoascript.NSToolbar):cocoascript.NSToolbarItemIdentifier;
    //
    alloc():cocoascript.NSTabViewController;
    //
    init():cocoascript.NSTabViewController;
  }
}

declare const NSTabViewController: cocoascript.NSTabViewController;
