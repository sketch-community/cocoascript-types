declare namespace cocoascript {
/**
 * A set of bar button items on the shortcuts bar above the keyboard on the iPad. 
 * doc://com.apple.documentation/documentation/uikit/uibarbuttonitemgroup
 */
interface UIBarButtonItemGroup extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemgroup/1623559-initwithbarbuttonitems
  initWithBarButtonItems_representativeItem(barButtonItems: cocoascript.UIBarButtonItem, representativeItem: cocoascript.UIBarButtonItem):cocoascript.UIBarButtonItemGroup;
  // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemgroup/1623562-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIBarButtonItemGroup;
  // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemgroup/1623565-barbuttonitems
  barButtonItems(): cocoascript.UIBarButtonItem;
  setBarButtonItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemgroup/1623563-representativeitem
  representativeItem(): cocoascript.UIBarButtonItem;
  setRepresentativeItem(): void;
  // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemgroup/1623560-displayingrepresentativeitem
  displayingRepresentativeItem(): cocoascript.BOOL;
  setDisplayingRepresentativeItem(): void;
  // 
  alloc():cocoascript.UIBarButtonItemGroup;
  // 
  init():cocoascript.UIBarButtonItemGroup;
}
}
declare const UIBarButtonItemGroup: cocoascript.UIBarButtonItemGroup;

