declare namespace cocoascript {
  /**
   * A static, ordered collection of unique objects.
   * doc://com.apple.documentation/documentation/foundation/nsorderedset
   */
  interface NSOrderedSet extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1408623-initwitharray
    initWithArray(array: cocoascript.NSArray):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1418006-initwitharray
    initWithArray_copyItems(set: cocoascript.NSArray, flag: cocoascript.BOOL):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1409272-initwitharray
    initWithArray_range_copyItems(set: cocoascript.NSArray, range: cocoascript.NSRange, flag: cocoascript.BOOL):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1413883-initwithobject
    initWithObject(object: cocoascript.):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1543287-initwithobjects
    initWithObjects(...: cocoascript.):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411910-initwithobjects
    initWithObjects_count(objects: cocoascript.const, cnt: cocoascript.NSUInteger):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1412402-initwithorderedset
    initWithOrderedSet(set: cocoascript.NSOrderedSet):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411658-initwithorderedset
    initWithOrderedSet_copyItems(set: cocoascript.NSOrderedSet, flag: cocoascript.BOOL):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1417751-initwithorderedset
    initWithOrderedSet_range_copyItems(set: cocoascript.NSOrderedSet, range: cocoascript.NSRange, flag: cocoascript.BOOL):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1416344-initwithset
    initWithSet(set: cocoascript.NSSet):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411246-initwithset
    initWithSet_copyItems(set: cocoascript.NSSet, flag: cocoascript.BOOL):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1417735-init
    init():cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1410106-count
    count(): cocoascript.NSUInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1408681-containsobject
    containsObject(object: cocoascript.):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1412332-enumerateobjectsatindexes
    enumerateObjectsAtIndexes_options_usingBlock(s: cocoascript.NSIndexSet, opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1413531-enumerateobjectsusingblock
    enumerateObjectsUsingBlock(block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1409354-enumerateobjectswithoptions
    enumerateObjectsWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1409765-firstobject
    firstObject(): any;
    setFirstObject(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1409143-lastobject
    lastObject(): any;
    setLastObject(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1414734-objectatindex
    objectAtIndex(idx: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1414253-objectatindexedsubscript
    objectAtIndexedSubscript(idx: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1414943-objectsatindexes
    objectsAtIndexes(indexes: cocoascript.NSIndexSet):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411856-indexofobject
    indexOfObject(object: cocoascript.):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1417701-indexofobject
    indexOfObject_options_usingComparator(object: cocoascript.NSRange, opts: cocoascript.NSBinarySearchingOptions, cmp: cocoascript.NSComparator):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1417531-indexofobjectatindexes
    indexOfObjectAtIndexes_options_passingTest(s: cocoascript.NSIndexSet, opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1413003-indexofobjectpassingtest
    indexOfObjectPassingTest(predicate: cocoascript.BOOL):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1408700-indexofobjectwithoptions
    indexOfObjectWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1413586-indexesofobjectsatindexes
    indexesOfObjectsAtIndexes_options_passingTest(s: cocoascript.NSIndexSet, opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411331-indexesofobjectspassingtest
    indexesOfObjectsPassingTest(predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1415944-indexesofobjectswithoptions
    indexesOfObjectsWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1409430-objectenumerator
    objectEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1407607-reverseobjectenumerator
    reverseObjectEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411022-reversedorderedset
    reversedOrderedSet(): any;
    setReversedOrderedSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411401-getobjects
    getObjects_range(objects: cocoascript._Nonnull, range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1413118-setvalue
    setValue_forKey(value: cocoascript.NSOrderedSet, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1409378-valueforkey
    valueForKey(key: cocoascript.NSString):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1408740-addobserver
    addObserver_forKeyPath_options_context(observer: cocoascript.NSObject, keyPath: cocoascript.NSString, options: cocoascript.NSKeyValueObservingOptions, context: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1412955-removeobserver
    removeObserver_forKeyPath(observer: cocoascript.NSObject, keyPath: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1410496-removeobserver
    removeObserver_forKeyPath_context(observer: cocoascript.NSObject, keyPath: cocoascript.NSString, context: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1408049-isequaltoorderedset
    isEqualToOrderedSet(other: cocoascript.NSOrderedSet):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1414364-intersectsorderedset
    intersectsOrderedSet(other: cocoascript.NSOrderedSet):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1408625-intersectsset
    intersectsSet(set: cocoascript.NSSet):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411496-issubsetoforderedset
    isSubsetOfOrderedSet(other: cocoascript.NSOrderedSet):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1418464-issubsetofset
    isSubsetOfSet(set: cocoascript.NSSet):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1409953-sortedarrayusingdescriptors
    sortedArrayUsingDescriptors(sortDescriptors: cocoascript.NSSortDescriptor):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1413383-sortedarrayusingcomparator
    sortedArrayUsingComparator(cmptr: cocoascript.NSComparator):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1414806-sortedarraywithoptions
    sortedArrayWithOptions_usingComparator(opts: cocoascript.NSSortOptions, cmptr: cocoascript.NSComparator):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1415807-filteredorderedsetusingpredicate
    filteredOrderedSetUsingPredicate(p: cocoascript.NSPredicate):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1415872-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1417325-descriptionwithlocale
    descriptionWithLocale(locale: cocoascript.NSOrderedSet):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1416761-descriptionwithlocale
    descriptionWithLocale_indent(locale: cocoascript.NSOrderedSet, level: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1411531-array
    array(): any;
    setArray(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1413944-set
    set(): any;
    setSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/3152195-differencefromorderedset
    differenceFromOrderedSet(other: cocoascript.NSOrderedSet):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/3152196-differencefromorderedset
    differenceFromOrderedSet_withOptions(other: cocoascript.NSOrderedSet, options: cocoascript.NSOrderedCollectionDifferenceCalculationOptions):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/3152197-differencefromorderedset
    differenceFromOrderedSet_withOptions_usingEquivalenceTest(other: cocoascript.NSOrderedSet, options: cocoascript.NSOrderedCollectionDifferenceCalculationOptions, block: cocoascript.BOOL):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/1417543-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSOrderedSet;
    // doc://com.apple.documentation/documentation/foundation/nsorderedset/3152198-orderedsetbyapplyingdifference
    orderedSetByApplyingDifference(difference: cocoascript.NSOrderedCollectionDifference):cocoascript.NSOrderedSet;
    //
    alloc():cocoascript.NSOrderedSet;
    //
    init():cocoascript.NSOrderedSet;
  }
}

declare const NSOrderedSet: cocoascript.NSOrderedSet;
