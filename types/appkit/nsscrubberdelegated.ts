declare namespace cocoascript {
/**
 * A set of methods that a scrubber delegate implements to respond to user interactions.
 * doc://com.apple.documentation/documentation/appkit/nsscrubberdelegate
 */
interface NSScrubberDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsscrubberdelegate/2544714-scrubber
  scrubber_didSelectItemAtIndex(scrubber: cocoascript.NSScrubber, selectedIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberdelegate/2544788-scrubber
  scrubber_didHighlightItemAtIndex(scrubber: cocoascript.NSScrubber, highlightedIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberdelegate/2544817-scrubber
  scrubber_didChangeVisibleRange(scrubber: cocoascript.NSScrubber, visibleRange: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberdelegate/2544657-didbegininteractingwithscrubber
  didBeginInteractingWithScrubber(scrubber: cocoascript.NSScrubber):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberdelegate/2544653-didfinishinteractingwithscrubber
  didFinishInteractingWithScrubber(scrubber: cocoascript.NSScrubber):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberdelegate/2646905-didcancelinteractingwithscrubber
  didCancelInteractingWithScrubber(scrubber: cocoascript.NSScrubber):void;
}
}

