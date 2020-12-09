declare namespace cocoascript {
/**
 * You implement this protocol when a class’s objects have subcomponents that can be discarded when not being used, thereby giving an application a smaller memory footprint.
 * doc://com.apple.documentation/documentation/foundation/nsdiscardablecontent
 */
interface NSDiscardableContent {
  // doc://com.apple.documentation/documentation/foundation/nsdiscardablecontent/1412187-begincontentaccess
  beginContentAccess():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsdiscardablecontent/1407535-endcontentaccess
  endContentAccess():void;
  // doc://com.apple.documentation/documentation/foundation/nsdiscardablecontent/1408998-discardcontentifpossible
  discardContentIfPossible():void;
  // doc://com.apple.documentation/documentation/foundation/nsdiscardablecontent/1417470-iscontentdiscarded
  isContentDiscarded():cocoascript.BOOL;
}
}

