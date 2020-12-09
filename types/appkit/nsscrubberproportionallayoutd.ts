declare namespace cocoascript {
/**
 * A concrete layout object that sizes each item to some fraction of the scrubber's visible size.
 * doc://com.apple.documentation/documentation/appkit/nsscrubberproportionallayout
 */
interface NSScrubberProportionalLayout extends NSScrubberLayout {
  // doc://com.apple.documentation/documentation/appkit/nsscrubberproportionallayout/2544646-initwithnumberofvisibleitems
  initWithNumberOfVisibleItems(numberOfVisibleItems: cocoascript.NSInteger):cocoascript.NSScrubberProportionalLayout;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberproportionallayout/2544624-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSScrubberProportionalLayout;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberproportionallayout/2544651-numberofvisibleitems
  numberOfVisibleItems(): cocoascript.NSInteger;
  setNumberOfVisibleItems(): void;
  // 
  alloc():cocoascript.NSScrubberProportionalLayout;
  // 
  init():cocoascript.NSScrubberProportionalLayout;
}
}
declare const NSScrubberProportionalLayout: cocoascript.NSScrubberProportionalLayout;

