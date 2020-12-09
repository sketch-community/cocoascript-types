declare namespace cocoascript {
/**
 * A mutable data object containing bytes that can be discarded when they're no longer needed.
 * doc://com.apple.documentation/documentation/foundation/nspurgeabledata
 */
interface NSPurgeableData extends NSMutableData {
  // 
  alloc():cocoascript.NSPurgeableData;
  // 
  init():cocoascript.NSPurgeableData;
}
}
declare const NSPurgeableData: cocoascript.NSPurgeableData;

