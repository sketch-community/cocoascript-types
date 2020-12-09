declare namespace cocoascript {
/**
 * The layout of a scrubber item.
 * doc://com.apple.documentation/documentation/appkit/nsscrubberlayoutattributes
 */
interface NSScrubberLayoutAttributes extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayoutattributes/2544648-alpha
  alpha(): cocoascript.CGFloat;
  setAlpha(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayoutattributes/2544623-frame
  frame(): cocoascript.NSRect;
  setFrame(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayoutattributes/2544635-itemindex
  itemIndex(): cocoascript.NSInteger;
  setItemIndex(): void;
  // 
  alloc():cocoascript.NSScrubberLayoutAttributes;
  // 
  init():cocoascript.NSScrubberLayoutAttributes;
}
}
declare const NSScrubberLayoutAttributes: cocoascript.NSScrubberLayoutAttributes;

