declare namespace cocoascript {
/**
 * A collection similar to a set, but with broader range of available memory semantics.
 * doc://com.apple.documentation/documentation/foundation/nshashtable
 */
interface NSHashTable extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1411066-initwithoptions
  initWithOptions_capacity(options: cocoascript.NSPointerFunctionsOptions, initialCapacity: cocoascript.NSUInteger):cocoascript.NSHashTable;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1416331-initwithpointerfunctions
  initWithPointerFunctions_capacity(functions: cocoascript.NSPointerFunctions, initialCapacity: cocoascript.NSUInteger):cocoascript.NSHashTable;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1410639-anyobject
  anyObject(): any;
  setAnyObject(): void;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1410223-allobjects
  allObjects(): any;
  setAllObjects(): void;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1414641-setrepresentation
  setRepresentation(): any;
  setSetRepresentation(): void;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1413142-count
  count(): cocoascript.NSUInteger;
  setCount(): void;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1415113-containsobject
  containsObject(anObject: cocoascript.):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1417991-member
  member(object: cocoascript.):void;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1416308-objectenumerator
  objectEnumerator():cocoascript.NSEnumerator;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1411690-addobject
  addObject(object: cocoascript.):void;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1415369-removeobject
  removeObject(object: cocoascript.):void;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1415814-removeallobjects
  removeAllObjects():void;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1408509-intersecthashtable
  intersectHashTable(other: cocoascript.NSHashTable):void;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1416474-intersectshashtable
  intersectsHashTable(other: cocoascript.NSHashTable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1417518-issubsetofhashtable
  isSubsetOfHashTable(other: cocoascript.NSHashTable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1410816-isequaltohashtable
  isEqualToHashTable(other: cocoascript.NSHashTable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1414557-minushashtable
  minusHashTable(other: cocoascript.NSHashTable):void;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1413481-unionhashtable
  unionHashTable(other: cocoascript.NSHashTable):void;
  // doc://com.apple.documentation/documentation/foundation/nshashtable/1417398-pointerfunctions
  pointerFunctions(): cocoascript.NSPointerFunctions;
  setPointerFunctions(): void;
  // 
  alloc():cocoascript.NSHashTable;
  // 
  init():cocoascript.NSHashTable;
}
}
declare const NSHashTable: cocoascript.NSHashTable;

