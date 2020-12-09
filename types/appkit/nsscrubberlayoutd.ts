declare namespace cocoascript {
/**
 * An abstract class that describes the layout of items within a scrubber control.
 * doc://com.apple.documentation/documentation/appkit/nsscrubberlayout
 */
interface NSScrubberLayout extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayout/2544643-init
  init():cocoascript.NSScrubberLayout;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayout/2544647-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSScrubberLayout;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayout/2544628-layoutattributesclass
  layoutAttributesClass(): cocoascript.Class;
  setLayoutAttributesClass(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayout/2544638-scrubber
  scrubber(): cocoascript.NSScrubber;
  setScrubber(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayout/2544637-visiblerect
  visibleRect(): cocoascript.NSRect;
  setVisibleRect(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayout/2544626-invalidatelayout
  invalidateLayout():void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayout/2544632-preparelayout
  prepareLayout():void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayout/2544644-scrubbercontentsize
  scrubberContentSize(): cocoascript.NSSize;
  setScrubberContentSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayout/2544650-layoutattributesforitematindex
  layoutAttributesForItemAtIndex(index: cocoascript.NSInteger):cocoascript.NSScrubberLayoutAttributes;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayout/2544636-layoutattributesforitemsinrect
  layoutAttributesForItemsInRect(rect: cocoascript.NSRect):cocoascript.NSScrubberLayoutAttributes;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayout/2544631-shouldinvalidatelayoutforselecti
  shouldInvalidateLayoutForSelectionChange(): cocoascript.BOOL;
  setShouldInvalidateLayoutForSelectionChange(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayout/2544639-shouldinvalidatelayoutforhighlig
  shouldInvalidateLayoutForHighlightChange(): cocoascript.BOOL;
  setShouldInvalidateLayoutForHighlightChange(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayout/2544633-shouldinvalidatelayoutforchangef
  shouldInvalidateLayoutForChangeFromVisibleRect_toVisibleRect(fromVisibleRect: cocoascript.NSRect, toVisibleRect: cocoascript.NSRect):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberlayout/2646926-automaticallymirrorsinrighttolef
  automaticallyMirrorsInRightToLeftLayout(): cocoascript.BOOL;
  setAutomaticallyMirrorsInRightToLeftLayout(): void;
  // 
  alloc():cocoascript.NSScrubberLayout;
  // 
  init():cocoascript.NSScrubberLayout;
}
}
declare const NSScrubberLayout: cocoascript.NSScrubberLayout;

