declare namespace cocoascript {
/**
 * A bar item that provides a two-state control that can expand into its second state, showing the contents of a bar that it owns.
 * doc://com.apple.documentation/documentation/appkit/nspopovertouchbaritem
 */
interface NSPopoverTouchBarItem extends NSTouchBarItem {
  // doc://com.apple.documentation/documentation/appkit/nspopovertouchbaritem/2544699-collapsedrepresentation
  collapsedRepresentation(): cocoascript.NSView;
  setCollapsedRepresentation(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopovertouchbaritem/2544725-collapsedrepresentationimage
  collapsedRepresentationImage(): cocoascript.NSImage;
  setCollapsedRepresentationImage(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopovertouchbaritem/2544772-collapsedrepresentationlabel
  collapsedRepresentationLabel(): cocoascript.NSString;
  setCollapsedRepresentationLabel(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopovertouchbaritem/2544856-popovertouchbar
  popoverTouchBar(): cocoascript.NSTouchBar;
  setPopoverTouchBar(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopovertouchbaritem/2544711-showsclosebutton
  showsCloseButton(): cocoascript.BOOL;
  setShowsCloseButton(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopovertouchbaritem/2646955-pressandholdtouchbar
  pressAndHoldTouchBar(): cocoascript.NSTouchBar;
  setPressAndHoldTouchBar(): void;
  // doc://com.apple.documentation/documentation/appkit/nspopovertouchbaritem/2544797-showpopover
  showPopover(sender: cocoascript.NSPopoverTouchBarItem):void;
  // doc://com.apple.documentation/documentation/appkit/nspopovertouchbaritem/2544697-dismisspopover
  dismissPopover(sender: cocoascript.NSPopoverTouchBarItem):void;
  // doc://com.apple.documentation/documentation/appkit/nspopovertouchbaritem/2544842-makestandardactivatepopovergestu
  makeStandardActivatePopoverGestureRecognizer():cocoascript.NSGestureRecognizer;
  // doc://com.apple.documentation/documentation/appkit/nspopovertouchbaritem/2544684-customizationlabel
  customizationLabel(): cocoascript.NSString;
  setCustomizationLabel(): void;
  // 
  alloc():cocoascript.NSPopoverTouchBarItem;
  // 
  init():cocoascript.NSPopoverTouchBarItem;
}
}
declare const NSPopoverTouchBarItem: cocoascript.NSPopoverTouchBarItem;

