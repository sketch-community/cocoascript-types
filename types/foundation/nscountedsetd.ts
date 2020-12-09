declare namespace cocoascript {
/**
 * A mutable, unordered collection of distinct objects that may appear more than once in the collection.
 * doc://com.apple.documentation/documentation/foundation/nscountedset
 */
interface NSCountedSet extends NSMutableSet {
  // doc://com.apple.documentation/documentation/foundation/nscountedset/1416767-initwitharray
  initWithArray(array: cocoascript.NSArray):cocoascript.NSCountedSet;
  // doc://com.apple.documentation/documentation/foundation/nscountedset/1411730-initwithset
  initWithSet(set: cocoascript.NSSet):cocoascript.NSCountedSet;
  // doc://com.apple.documentation/documentation/foundation/nscountedset/1415625-initwithcapacity
  initWithCapacity(numItems: cocoascript.NSUInteger):cocoascript.NSCountedSet;
  // doc://com.apple.documentation/documentation/foundation/nscountedset/1413212-addobject
  addObject(object: cocoascript.):void;
  // doc://com.apple.documentation/documentation/foundation/nscountedset/1415902-removeobject
  removeObject(object: cocoascript.):void;
  // doc://com.apple.documentation/documentation/foundation/nscountedset/1408658-countforobject
  countForObject(object: cocoascript.):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nscountedset/1408123-objectenumerator
  objectEnumerator():cocoascript.NSEnumerator;
  // 
  alloc():cocoascript.NSCountedSet;
  // 
  init():cocoascript.NSCountedSet;
}
}
declare const NSCountedSet: cocoascript.NSCountedSet;

