declare namespace cocoascript {
/**
 * A protocol that a scrubber delegate can adopt to provide the size of an item.
 * doc://com.apple.documentation/documentation/appkit/nsscrubberflowlayoutdelegate
 */
interface NSScrubberFlowLayoutDelegate extends NSScrubberDelegate {
  // doc://com.apple.documentation/documentation/appkit/nsscrubberflowlayoutdelegate/2544630-scrubber
  scrubber_layout_sizeForItemAtIndex(scrubber: cocoascript.NSScrubber, layout: cocoascript.NSScrubberFlowLayout, itemIndex: cocoascript.NSInteger):cocoascript.NSSize;
}
}

