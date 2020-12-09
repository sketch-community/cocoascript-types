declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/appkit/nsmenutoolbaritem
 */
interface NSMenuToolbarItem extends NSToolbarItem {
  // doc://com.apple.documentation/documentation/appkit/nsmenutoolbaritem/3375789-itemmenu
  itemMenu(): cocoascript.UIMenu;
  setItemMenu(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenutoolbaritem/3237191-menu
  menu(): cocoascript.NSMenu;
  setMenu(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmenutoolbaritem/3237192-showsindicator
  showsIndicator(): cocoascript.BOOL;
  setShowsIndicator(): void;
  // 
  alloc():cocoascript.NSMenuToolbarItem;
  // 
  init():cocoascript.NSMenuToolbarItem;
}
}
declare const NSMenuToolbarItem: cocoascript.NSMenuToolbarItem;

