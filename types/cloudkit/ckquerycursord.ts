declare namespace cocoascript {
/**
 * An object that marks the stopping point for a query and the starting point for retrieving the remaining results.
 * doc://com.apple.documentation/documentation/cloudkit/ckquerycursor
 */
interface CKQueryCursor extends NSObject {
  // 
  alloc():cocoascript.CKQueryCursor;
  // 
  init():cocoascript.CKQueryCursor;
}
}
declare const CKQueryCursor: cocoascript.CKQueryCursor;

