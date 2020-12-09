declare namespace cocoascript {
/**
 * The optional methods implemented by delegates of 
 * doc://com.apple.documentation/documentation/appkit/nsmenudelegate
 */
interface NSMenuDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsmenudelegate/1518211-menuhaskeyequivalent
  menuHasKeyEquivalent_forEvent_target_action(menu: cocoascript.NSMenu, event: cocoascript.NSEvent, target: cocoascript._Nullable, action: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsmenudelegate/1518256-menu
  menu_updateItem_atIndex_shouldCancel(menu: cocoascript.NSMenu, item: cocoascript.NSMenuItem, index: cocoascript.NSInteger, shouldCancel: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsmenudelegate/1518247-confinementrectformenu
  confinementRectForMenu_onScreen(menu: cocoascript.NSMenu, screen: cocoascript.NSScreen):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nsmenudelegate/1518260-menu
  menu_willHighlightItem(menu: cocoascript.NSMenu, item: cocoascript.NSMenuItem):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenudelegate/1518156-menuwillopen
  menuWillOpen(menu: cocoascript.NSMenu):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenudelegate/1518167-menudidclose
  menuDidClose(menu: cocoascript.NSMenu):void;
  // doc://com.apple.documentation/documentation/appkit/nsmenudelegate/1518242-numberofitemsinmenu
  numberOfItemsInMenu(menu: cocoascript.NSMenu):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsmenudelegate/1518235-menuneedsupdate
  menuNeedsUpdate(menu: cocoascript.NSMenu):void;
}
}

