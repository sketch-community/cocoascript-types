declare namespace cocoascript {
/**
 * An item in a split view controller.
 * doc://com.apple.documentation/documentation/appkit/nssplitviewitem
 */
interface NSSplitViewItem extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nssplitviewitem/1388889-automaticmaximumthickness
  automaticMaximumThickness(): cocoascript.CGFloat;
  setAutomaticMaximumThickness(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewitem/1388885-preferredthicknessfraction
  preferredThicknessFraction(): cocoascript.CGFloat;
  setPreferredThicknessFraction(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewitem/1388853-minimumthickness
  minimumThickness(): cocoascript.CGFloat;
  setMinimumThickness(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewitem/1388930-maximumthickness
  maximumThickness(): cocoascript.CGFloat;
  setMaximumThickness(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewitem/1388887-holdingpriority
  holdingPriority(): cocoascript.NSLayoutPriority;
  setHoldingPriority(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewitem/1388899-behavior
  behavior(): cocoascript.NSSplitViewItemBehavior;
  setBehavior(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewitem/1388891-collapsed
  collapsed(): cocoascript.BOOL;
  setCollapsed(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewitem/1388926-cancollapse
  canCollapse(): cocoascript.BOOL;
  setCanCollapse(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewitem/1388851-collapsebehavior
  collapseBehavior(): cocoascript.NSSplitViewItemCollapseBehavior;
  setCollapseBehavior(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewitem/1388895-springloaded
  springLoaded(): cocoascript.BOOL;
  setSpringLoaded(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewitem/3608197-allowsfullheightlayout
  allowsFullHeightLayout(): cocoascript.BOOL;
  setAllowsFullHeightLayout(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewitem/3622473-titlebarseparatorstyle
  titlebarSeparatorStyle(): cocoascript.NSTitlebarSeparatorStyle;
  setTitlebarSeparatorStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewitem/1388911-viewcontroller
  viewController(): cocoascript.NSViewController;
  setViewController(): void;
  // 
  alloc():cocoascript.NSSplitViewItem;
  // 
  init():cocoascript.NSSplitViewItem;
}
}
declare const NSSplitViewItem: cocoascript.NSSplitViewItem;

