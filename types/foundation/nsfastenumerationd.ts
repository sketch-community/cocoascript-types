declare namespace cocoascript {
/**
 * A protocol that objects adopt to support fast enumeration.
 * doc://com.apple.documentation/documentation/foundation/nsfastenumeration
 */
interface NSFastEnumeration {
  // doc://com.apple.documentation/documentation/foundation/nsfastenumeration/1412867-countbyenumeratingwithstate
  countByEnumeratingWithState_objects_count(state: cocoascript.NSFastEnumerationState, buffer: cocoascript._Nullable, len: cocoascript.NSUInteger):cocoascript.NSUInteger;
}
}

