declare namespace cocoascript {
/**
 * A dynamic, ordered collection of unique objects.
 * doc://com.apple.documentation/documentation/foundation/nsmutableorderedset
 */
interface NSMutableOrderedSet extends NSOrderedSet {
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1411583-initwithcapacity
  initWithCapacity(numItems: cocoascript.NSUInteger):cocoascript.NSMutableOrderedSet;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1410545-init
  init():cocoascript.NSMutableOrderedSet;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1408009-addobject
  addObject(object: cocoascript.):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1413840-addobjects
  addObjects_count(objects: cocoascript.const, count: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1417200-addobjectsfromarray
  addObjectsFromArray(array: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1416634-insertobject
  insertObject(object: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1543323-setobject
  setObject(obj: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1410287-insertobjects
  insertObjects_atIndexes(objects: cocoascript.NSArray, indexes: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1416776-removeobject
  removeObject(object: cocoascript.):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1415040-removeobjectatindex
  removeObjectAtIndex(idx: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1418161-removeobjectsatindexes
  removeObjectsAtIndexes(indexes: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1411635-removeobjectsinarray
  removeObjectsInArray(array: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1417539-removeobjectsinrange
  removeObjectsInRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1414262-removeallobjects
  removeAllObjects():void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1412115-replaceobjectatindex
  replaceObjectAtIndex_withObject(idx: cocoascript.NSUInteger, object: cocoascript.):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1416127-replaceobjectsatindexes
  replaceObjectsAtIndexes_withObjects(indexes: cocoascript.NSIndexSet, objects: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1415340-replaceobjectsinrange
  replaceObjectsInRange_withObjects_count(range: cocoascript.NSRange, objects: cocoascript.const, count: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1411158-setobject
  setObject(obj: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1417677-moveobjectsatindexes
  moveObjectsAtIndexes_toIndex(indexes: cocoascript.NSIndexSet, idx: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1416821-exchangeobjectatindex
  exchangeObjectAtIndex_withObjectAtIndex(idx1: cocoascript.NSUInteger, idx2: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1408348-filterusingpredicate
  filterUsingPredicate(p: cocoascript.NSPredicate):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1410023-sortusingdescriptors
  sortUsingDescriptors(sortDescriptors: cocoascript.NSSortDescriptor):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1414566-sortusingcomparator
  sortUsingComparator(cmptr: cocoascript.NSComparator):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1411561-sortwithoptions
  sortWithOptions_usingComparator(opts: cocoascript.NSSortOptions, cmptr: cocoascript.NSComparator):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1407529-sortrange
  sortRange_options_usingComparator(range: cocoascript.NSRange, opts: cocoascript.NSSortOptions, cmptr: cocoascript.NSComparator):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1408541-intersectorderedset
  intersectOrderedSet(other: cocoascript.NSOrderedSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1415257-intersectset
  intersectSet(other: cocoascript.NSSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1407987-minusorderedset
  minusOrderedSet(other: cocoascript.NSOrderedSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1411229-minusset
  minusSet(other: cocoascript.NSSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1410973-unionorderedset
  unionOrderedSet(other: cocoascript.NSOrderedSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1413853-unionset
  unionSet(other: cocoascript.NSSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/1413074-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSMutableOrderedSet;
  // doc://com.apple.documentation/documentation/foundation/nsmutableorderedset/3152194-applydifference
  applyDifference(difference: cocoascript.NSOrderedCollectionDifference):void;
  // 
  alloc():cocoascript.NSMutableOrderedSet;
  // 
  init():cocoascript.NSMutableOrderedSet;
}
}
declare const NSMutableOrderedSet: cocoascript.NSMutableOrderedSet;

