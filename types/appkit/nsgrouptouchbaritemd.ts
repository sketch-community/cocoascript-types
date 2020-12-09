declare namespace cocoascript {
/**
 * A bar item that provides a bar to contain other items.
 * doc://com.apple.documentation/documentation/appkit/nsgrouptouchbaritem
 */
interface NSGroupTouchBarItem extends NSTouchBarItem {
  // doc://com.apple.documentation/documentation/appkit/nsgrouptouchbaritem/2544717-grouptouchbar
  groupTouchBar(): cocoascript.NSTouchBar;
  setGroupTouchBar(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgrouptouchbaritem/2876344-groupuserinterfacelayoutdirectio
  groupUserInterfaceLayoutDirection(): cocoascript.NSUserInterfaceLayoutDirection;
  setGroupUserInterfaceLayoutDirection(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgrouptouchbaritem/2909972-prefersequalwidths
  prefersEqualWidths(): cocoascript.BOOL;
  setPrefersEqualWidths(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgrouptouchbaritem/2909975-preferreditemwidth
  preferredItemWidth(): cocoascript.CGFloat;
  setPreferredItemWidth(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgrouptouchbaritem/2909985-effectivecompressionoptions
  effectiveCompressionOptions(): cocoascript.NSUserInterfaceCompressionOptions;
  setEffectiveCompressionOptions(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgrouptouchbaritem/2909968-prioritizedcompressionoptions
  prioritizedCompressionOptions(): cocoascript.NSUserInterfaceCompressionOptions;
  setPrioritizedCompressionOptions(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgrouptouchbaritem/2544877-customizationlabel
  customizationLabel(): cocoascript.NSString;
  setCustomizationLabel(): void;
  // 
  alloc():cocoascript.NSGroupTouchBarItem;
  // 
  init():cocoascript.NSGroupTouchBarItem;
}
}
declare const NSGroupTouchBarItem: cocoascript.NSGroupTouchBarItem;

