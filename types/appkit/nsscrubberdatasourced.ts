declare namespace cocoascript {
/**
 * A set of methods that a scrubber data source object implements to provide items to the scrubber from an associated data collection in your app.
 * doc://com.apple.documentation/documentation/appkit/nsscrubberdatasource
 */
interface NSScrubberDataSource extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsscrubberdatasource/2544845-numberofitemsforscrubber
  numberOfItemsForScrubber(scrubber: cocoascript.NSScrubber):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberdatasource/2544709-scrubber
  scrubber_viewForItemAtIndex(scrubber: cocoascript.NSScrubber, index: cocoascript.NSInteger):cocoascript.NSScrubberItemView;
}
}

