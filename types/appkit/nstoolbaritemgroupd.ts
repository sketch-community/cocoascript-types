declare namespace cocoascript {
/**
 * A group of subitems in a toolbar item.
 * doc://com.apple.documentation/documentation/appkit/nstoolbaritemgroup
 */
interface NSToolbarItemGroup extends NSToolbarItem {
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritemgroup/1529923-subitems
  subitems(): cocoascript.NSToolbarItem;
  setSubitems(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritemgroup/3242762-controlrepresentation
  controlRepresentation(): cocoascript.NSToolbarItemGroupControlRepresentation;
  setControlRepresentation(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritemgroup/3242766-selectedindex
  selectedIndex(): cocoascript.NSInteger;
  setSelectedIndex(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritemgroup/3242767-selectionmode
  selectionMode(): cocoascript.NSToolbarItemGroupSelectionMode;
  setSelectionMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritemgroup/3242765-isselectedatindex
  isSelectedAtIndex(index: cocoascript.NSInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritemgroup/3242768-setselected
  setSelected_atIndex(selected: cocoascript.BOOL, index: cocoascript.NSInteger):void;
  // 
  alloc():cocoascript.NSToolbarItemGroup;
  // 
  init():cocoascript.NSToolbarItemGroup;
}
}
declare const NSToolbarItemGroup: cocoascript.NSToolbarItemGroup;

