declare namespace cocoascript {
/**
 * A dynamic unordered collection of unique objects.
 * doc://com.apple.documentation/documentation/foundation/nsmutableset
 */
interface NSMutableSet extends NSSet {
  // doc://com.apple.documentation/documentation/foundation/nsmutableset/1411953-initwithcapacity
  initWithCapacity(numItems: cocoascript.NSUInteger):cocoascript.NSMutableSet;
  // doc://com.apple.documentation/documentation/foundation/nsmutableset/1414518-init
  init():cocoascript.NSMutableSet;
  // doc://com.apple.documentation/documentation/foundation/nsmutableset/1407460-addobject
  addObject(object: cocoascript.):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableset/1407868-filterusingpredicate
  filterUsingPredicate(predicate: cocoascript.NSPredicate):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableset/1416085-removeobject
  removeObject(object: cocoascript.):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableset/1417497-removeallobjects
  removeAllObjects():void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableset/1414345-addobjectsfromarray
  addObjectsFromArray(array: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableset/1413187-unionset
  unionSet(otherSet: cocoascript.NSSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableset/1416710-minusset
  minusSet(otherSet: cocoascript.NSSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableset/1407231-intersectset
  intersectSet(otherSet: cocoascript.NSSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableset/1416405-setset
  setSet(otherSet: cocoascript.NSSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableset/1407369-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSMutableSet;
  // 
  alloc():cocoascript.NSMutableSet;
  // 
  init():cocoascript.NSMutableSet;
}
}
declare const NSMutableSet: cocoascript.NSMutableSet;

