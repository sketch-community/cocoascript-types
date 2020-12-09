declare namespace cocoascript {
/**
 * A tab in a paragraph.
 * doc://com.apple.documentation/documentation/uikit/nstexttab
 */
interface NSTextTab extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/nstexttab/1526080-initwithtextalignment
  initWithTextAlignment_location_options(alignment: cocoascript.NSTextAlignment, loc: cocoascript.CGFloat, options: cocoascript.NSTextTab):cocoascript.NSTextTab;
  // doc://com.apple.documentation/documentation/uikit/nstexttab/1527968-location
  location(): cocoascript.CGFloat;
  setLocation(): void;
  // doc://com.apple.documentation/documentation/uikit/nstexttab/1527212-alignment
  alignment(): cocoascript.NSTextAlignment;
  setAlignment(): void;
  // doc://com.apple.documentation/documentation/uikit/nstexttab/1534965-options
  options(): cocoascript.id;
  setOptions(): void;
  // doc://com.apple.documentation/documentation/appkit/nstexttab/1526556-initwithtype
  initWithType_location(type: cocoascript.NSTextTabType, loc: cocoascript.CGFloat):cocoascript.NSTextTab;
  // doc://com.apple.documentation/documentation/appkit/nstexttab/1527842-tabstoptype
  tabStopType(): cocoascript.NSTextTabType;
  setTabStopType(): void;
  // 
  alloc():cocoascript.NSTextTab;
  // 
  init():cocoascript.NSTextTab;
}
}
declare const NSTextTab: cocoascript.NSTextTab;

