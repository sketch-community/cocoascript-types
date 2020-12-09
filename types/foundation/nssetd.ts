declare namespace cocoascript {
/**
 * A static unordered collection of unique objects.
 * doc://com.apple.documentation/documentation/foundation/nsset
 */
interface NSSet extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsset/1416316-setbyaddingobject
  setByAddingObject(anObject: cocoascript.):cocoascript.NSSet;
  // doc://com.apple.documentation/documentation/foundation/nsset/1408217-setbyaddingobjectsfromset
  setByAddingObjectsFromSet(other: cocoascript.NSSet):cocoascript.NSSet;
  // doc://com.apple.documentation/documentation/foundation/nsset/1418438-setbyaddingobjectsfromarray
  setByAddingObjectsFromArray(other: cocoascript.NSArray):cocoascript.NSSet;
  // doc://com.apple.documentation/documentation/foundation/nsset/1408152-initwitharray
  initWithArray(array: cocoascript.NSArray):cocoascript.NSSet;
  // doc://com.apple.documentation/documentation/foundation/nsset/1574822-initwithobjects
  initWithObjects(...: cocoascript.):cocoascript.NSSet;
  // doc://com.apple.documentation/documentation/foundation/nsset/1407458-initwithobjects
  initWithObjects_count(objects: cocoascript.const, cnt: cocoascript.NSUInteger):cocoascript.NSSet;
  // doc://com.apple.documentation/documentation/foundation/nsset/1410612-initwithset
  initWithSet(set: cocoascript.NSSet):cocoascript.NSSet;
  // doc://com.apple.documentation/documentation/foundation/nsset/1408407-initwithset
  initWithSet_copyItems(set: cocoascript.NSSet, flag: cocoascript.BOOL):cocoascript.NSSet;
  // doc://com.apple.documentation/documentation/foundation/nsset/1409698-init
  init():cocoascript.NSSet;
  // doc://com.apple.documentation/documentation/foundation/nsset/1416229-count
  count(): cocoascript.NSUInteger;
  setCount(): void;
  // doc://com.apple.documentation/documentation/foundation/nsset/1417653-allobjects
  allObjects(): any;
  setAllObjects(): void;
  // doc://com.apple.documentation/documentation/foundation/nsset/1416575-anyobject
  anyObject():void;
  // doc://com.apple.documentation/documentation/foundation/nsset/1414555-containsobject
  containsObject(anObject: cocoascript.):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsset/1416324-filteredsetusingpredicate
  filteredSetUsingPredicate(predicate: cocoascript.NSPredicate):cocoascript.NSSet;
  // doc://com.apple.documentation/documentation/foundation/nsset/1574819-makeobjectsperformselector
  makeObjectsPerformSelector(aSelector: cocoascript.SEL):void;
  // doc://com.apple.documentation/documentation/foundation/nsset/1574821-makeobjectsperformselector
  makeObjectsPerformSelector_withObject(aSelector: cocoascript.SEL, argument: cocoascript.NSSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsset/1412896-member
  member(object: cocoascript.):void;
  // doc://com.apple.documentation/documentation/foundation/nsset/1412373-objectenumerator
  objectEnumerator():cocoascript.NSEnumerator;
  // doc://com.apple.documentation/documentation/foundation/nsset/1418129-enumerateobjectsusingblock
  enumerateObjectsUsingBlock(block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsset/1412024-enumerateobjectswithoptions
  enumerateObjectsWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsset/1414392-objectspassingtest
  objectsPassingTest(predicate: cocoascript.BOOL):cocoascript.NSSet;
  // doc://com.apple.documentation/documentation/foundation/nsset/1416826-objectswithoptions
  objectsWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSSet;
  // doc://com.apple.documentation/documentation/foundation/nsset/1418319-issubsetofset
  isSubsetOfSet(otherSet: cocoascript.NSSet):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsset/1417472-intersectsset
  intersectsSet(otherSet: cocoascript.NSSet):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsset/1414829-isequaltoset
  isEqualToSet(otherSet: cocoascript.NSSet):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsset/1418386-valueforkey
  valueForKey(key: cocoascript.NSString):cocoascript.NSSet;
  // doc://com.apple.documentation/documentation/foundation/nsset/1408322-setvalue
  setValue_forKey(value: cocoascript.NSSet, key: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsset/1416427-sortedarrayusingdescriptors
  sortedArrayUsingDescriptors(sortDescriptors: cocoascript.NSSortDescriptor):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsset/1414043-addobserver
  addObserver_forKeyPath_options_context(observer: cocoascript.NSObject, keyPath: cocoascript.NSString, options: cocoascript.NSKeyValueObservingOptions, context: void):void;
  // doc://com.apple.documentation/documentation/foundation/nsset/1415413-removeobserver
  removeObserver_forKeyPath_context(observer: cocoascript.NSObject, keyPath: cocoascript.NSString, context: void):void;
  // doc://com.apple.documentation/documentation/foundation/nsset/1410212-removeobserver
  removeObserver_forKeyPath(observer: cocoascript.NSObject, keyPath: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsset/1418176-description
  description(): cocoascript.NSString;
  setDescription(): void;
  // doc://com.apple.documentation/documentation/foundation/nsset/1417205-descriptionwithlocale
  descriptionWithLocale(locale: cocoascript.NSSet):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsset/1408221-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSSet;
  // doc://com.apple.documentation/documentation/foundation/nsset/1528216-enumerateindexpathswithoptions
  enumerateIndexPathsWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
  // 
  alloc():cocoascript.NSSet;
  // 
  init():cocoascript.NSSet;
}
}
declare const NSSet: cocoascript.NSSet;

