declare namespace cocoascript {
/**
 * A static ordered collection of objects.
 * doc://com.apple.documentation/documentation/foundation/nsarray
 */
interface NSArray extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsarray/1414315-init
  init():cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1412169-initwitharray
  initWithArray(array: cocoascript.NSArray):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1408557-initwitharray
  initWithArray_copyItems(array: cocoascript.NSArray, flag: cocoascript.BOOL):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1413844-initwithcontentsoffile
  initWithContentsOfFile(path: cocoascript.NSString):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1410518-initwithcontentsofurl
  initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1460068-initwithobjects
  initWithObjects(...: cocoascript.):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1415056-initwithobjects
  initWithObjects_count(objects: cocoascript.const, cnt: cocoascript.NSUInteger):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1407477-containsobject
  containsObject(anObject: cocoascript.):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1409982-count
  count(): cocoascript.NSUInteger;
  setCount(): void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1410317-getobjects
  getObjects(objects: cocoascript._Nonnull):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1414725-getobjects
  getObjects_range(objects: cocoascript._Nonnull, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1412852-firstobject
  firstObject(): any;
  setFirstObject(): void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1408316-lastobject
  lastObject(): any;
  setLastObject(): void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1417555-objectatindex
  objectAtIndex(index: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1414084-objectatindexedsubscript
  objectAtIndexedSubscript(idx: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1411296-objectsatindexes
  objectsAtIndexes(indexes: cocoascript.NSIndexSet):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1416048-objectenumerator
  objectEnumerator():cocoascript.NSEnumerator;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1415734-reverseobjectenumerator
  reverseObjectEnumerator():cocoascript.NSEnumerator;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1417076-indexofobject
  indexOfObject(anObject: cocoascript.):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1415248-indexofobject
  indexOfObject(anObject: cocoascript.NSRange):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1410847-indexofobjectidenticalto
  indexOfObjectIdenticalTo(anObject: cocoascript.):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1415805-indexofobjectidenticalto
  indexOfObjectIdenticalTo(anObject: cocoascript.NSRange):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1408043-indexofobjectpassingtest
  indexOfObjectPassingTest(predicate: cocoascript.BOOL):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1417053-indexofobjectwithoptions
  indexOfObjectWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1407652-indexofobjectatindexes
  indexOfObjectAtIndexes_options_passingTest(s: cocoascript.NSIndexSet, opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1417603-indexesofobjectspassingtest
  indexesOfObjectsPassingTest(predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1415087-indexesofobjectswithoptions
  indexesOfObjectsWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1413512-indexesofobjectsatindexes
  indexesOfObjectsAtIndexes_options_passingTest(s: cocoascript.NSIndexSet, opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1412722-indexofobject
  indexOfObject_options_usingComparator(obj: cocoascript.NSRange, opts: cocoascript.NSBinarySearchingOptions, cmp: cocoascript.NSComparator):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1460115-makeobjectsperformselector
  makeObjectsPerformSelector(aSelector: cocoascript.SEL):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1460107-makeobjectsperformselector
  makeObjectsPerformSelector_withObject(aSelector: cocoascript.SEL, argument: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1415846-enumerateobjectsusingblock
  enumerateObjectsUsingBlock(block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1413010-enumerateobjectswithoptions
  enumerateObjectsWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1417577-enumerateobjectsatindexes
  enumerateObjectsAtIndexes_options_usingBlock(s: cocoascript.NSIndexSet, opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1408825-firstobjectcommonwitharray
  firstObjectCommonWithArray(otherArray: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1411770-isequaltoarray
  isEqualToArray(otherArray: cocoascript.NSArray):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1408534-arraybyaddingobject
  arrayByAddingObject(anObject: cocoascript.):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1412087-arraybyaddingobjectsfromarray
  arrayByAddingObjectsFromArray(otherArray: cocoascript.NSArray):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1411033-filteredarrayusingpredicate
  filteredArrayUsingPredicate(predicate: cocoascript.NSPredicate):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1415157-subarraywithrange
  subarrayWithRange(range: cocoascript.NSRange):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1413063-sortedarrayhint
  sortedArrayHint(): cocoascript.NSData;
  setSortedArrayHint(): void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1408213-sortedarrayusingfunction
  sortedArrayUsingFunction_context(comparator: void, context: void):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1414839-sortedarrayusingfunction
  sortedArrayUsingFunction_context_hint(comparator: void, context: void, hint: cocoascript.NSData):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1415069-sortedarrayusingdescriptors
  sortedArrayUsingDescriptors(sortDescriptors: cocoascript.NSSortDescriptor):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1410025-sortedarrayusingselector
  sortedArrayUsingSelector(comparator: cocoascript.SEL):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1411195-sortedarrayusingcomparator
  sortedArrayUsingComparator(cmptr: cocoascript.NSComparator):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1417804-sortedarraywithoptions
  sortedArrayWithOptions_usingComparator(opts: cocoascript.NSSortOptions, cmptr: cocoascript.NSComparator):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1412075-componentsjoinedbystring
  componentsJoinedByString(separator: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1413042-description
  description(): cocoascript.NSString;
  setDescription(): void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1412374-descriptionwithlocale
  descriptionWithLocale(locale: cocoascript.NSArray):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1416257-descriptionwithlocale
  descriptionWithLocale_indent(locale: cocoascript.NSArray, level: cocoascript.NSUInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1414742-writetofile
  writeToFile_atomically(path: cocoascript.NSString, useAuxiliaryFile: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1411480-writetourl
  writeToURL_atomically(url: cocoascript.NSURL, atomically: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1418275-pathsmatchingextensions
  pathsMatchingExtensions(filterTypes: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1409775-addobserver
  addObserver_forKeyPath_options_context(observer: cocoascript.NSObject, keyPath: cocoascript.NSString, options: cocoascript.NSKeyValueObservingOptions, context: void):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1414976-removeobserver
  removeObserver_forKeyPath(observer: cocoascript.NSObject, keyPath: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1418441-removeobserver
  removeObserver_forKeyPath_context(observer: cocoascript.NSObject, keyPath: cocoascript.NSString, context: void):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1408305-removeobserver
  removeObserver_fromObjectsAtIndexes_forKeyPath_context(observer: cocoascript.NSObject, indexes: cocoascript.NSIndexSet, keyPath: cocoascript.NSString, context: void):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1411404-addobserver
  addObserver_toObjectsAtIndexes_forKeyPath_options_context(observer: cocoascript.NSObject, indexes: cocoascript.NSIndexSet, keyPath: cocoascript.NSString, options: cocoascript.NSKeyValueObservingOptions, context: void):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1407434-removeobserver
  removeObserver_fromObjectsAtIndexes_forKeyPath(observer: cocoascript.NSObject, indexes: cocoascript.NSIndexSet, keyPath: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1408301-setvalue
  setValue_forKey(value: cocoascript.NSArray, key: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1412219-valueforkey
  valueForKey(key: cocoascript.NSString):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1640855-shuffledarray
  shuffledArray():cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1640687-shuffledarraywithrandomsource
  shuffledArrayWithRandomSource(randomSource: cocoascript.GKRandomSource):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/3152166-differencefromarray
  differenceFromArray(other: cocoascript.NSArray):cocoascript.NSOrderedCollectionDifference;
  // doc://com.apple.documentation/documentation/foundation/nsarray/3152167-differencefromarray
  differenceFromArray_withOptions(other: cocoascript.NSArray, options: cocoascript.NSOrderedCollectionDifferenceCalculationOptions):cocoascript.NSOrderedCollectionDifference;
  // doc://com.apple.documentation/documentation/foundation/nsarray/3152168-differencefromarray
  differenceFromArray_withOptions_usingEquivalenceTest(other: cocoascript.NSArray, options: cocoascript.NSOrderedCollectionDifferenceCalculationOptions, block: cocoascript.BOOL):cocoascript.NSOrderedCollectionDifference;
  // doc://com.apple.documentation/documentation/foundation/nsarray/1407810-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/2879134-initwithcontentsofurl
  initWithContentsOfURL_error(url: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsarray/2879138-writetourl
  writeToURL_error(url: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsarray/3152165-arraybyapplyingdifference
  arrayByApplyingDifference(difference: cocoascript.NSOrderedCollectionDifference):cocoascript.NSArray;
  // 
  alloc():cocoascript.NSArray;
  // 
  init():cocoascript.NSArray;
}
}
declare const NSArray: cocoascript.NSArray;

