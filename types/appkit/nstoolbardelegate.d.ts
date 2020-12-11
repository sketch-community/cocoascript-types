declare namespace cocoascript {
  /**
   * A set of optional methods implemented by toolbar delegates to configure the toolbar and respond to changes.
   * doc://com.apple.documentation/documentation/appkit/nstoolbardelegate
   */
  interface NSToolbarDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstoolbardelegate/1516985-toolbar
    toolbar_itemForItemIdentifier_willBeInsertedIntoToolbar(toolbar: cocoascript.NSToolbar, itemIdentifier: cocoascript.NSToolbarItemIdentifier, flag: cocoascript.BOOL):cocoascript.NSToolbarItem;
    // doc://com.apple.documentation/documentation/appkit/nstoolbardelegate/1516995-toolbaralloweditemidentifiers
    toolbarAllowedItemIdentifiers(toolbar: cocoascript.NSToolbar):cocoascript.NSToolbarItemIdentifier;
    // doc://com.apple.documentation/documentation/appkit/nstoolbardelegate/1516944-toolbardefaultitemidentifiers
    toolbarDefaultItemIdentifiers(toolbar: cocoascript.NSToolbar):cocoascript.NSToolbarItemIdentifier;
    // doc://com.apple.documentation/documentation/appkit/nstoolbardelegate/1516981-toolbarselectableitemidentifiers
    toolbarSelectableItemIdentifiers(toolbar: cocoascript.NSToolbar):cocoascript.NSToolbarItemIdentifier;
    // doc://com.apple.documentation/documentation/appkit/nstoolbardelegate/1516964-toolbarwilladditem
    toolbarWillAddItem(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nstoolbardelegate/1516970-toolbardidremoveitem
    toolbarDidRemoveItem(notification: cocoascript.NSNotification):void;
  }
}
