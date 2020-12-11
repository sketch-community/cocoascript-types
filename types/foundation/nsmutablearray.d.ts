declare namespace cocoascript {
  /**
   * A dynamic ordered collection of objects.
   * doc://com.apple.documentation/documentation/foundation/nsmutablearray
   */
  interface NSMutableArray extends NSArray {
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1407556-init
    init():cocoascript.NSMutableArray;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1415811-initwithcapacity
    initWithCapacity(numItems: cocoascript.NSUInteger):cocoascript.NSMutableArray;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1414670-initwithcontentsoffile
    initWithContentsOfFile(path: cocoascript.NSString):cocoascript.NSMutableArray;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1411688-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSMutableArray;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1411274-addobject
    addObject(anObject: cocoascript.):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1408963-addobjectsfromarray
    addObjectsFromArray(otherArray: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1416682-insertobject
    insertObject(anObject: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1416482-insertobjects
    insertObjects_atIndexes(objects: cocoascript.NSArray, indexes: cocoascript.NSIndexSet):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1410618-removeallobjects
    removeAllObjects():void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1409708-removelastobject
    removeLastObject():void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1410689-removeobject
    removeObject(anObject: cocoascript.):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1411366-removeobject
    removeObject(anObject: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1416616-removeobjectatindex
    removeObjectAtIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1410154-removeobjectsatindexes
    removeObjectsAtIndexes(indexes: cocoascript.NSIndexSet):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1417759-removeobjectidenticalto
    removeObjectIdenticalTo(anObject: cocoascript.):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1415225-removeobjectidenticalto
    removeObjectIdenticalTo(anObject: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1460142-removeobjectsfromindices
    removeObjectsFromIndices_numIndices(indices: cocoascript.NSUInteger, cnt: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1413942-removeobjectsinarray
    removeObjectsInArray(otherArray: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1407586-removeobjectsinrange
    removeObjectsInRange(range: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1414510-replaceobjectatindex
    replaceObjectAtIndex_withObject(index: cocoascript.NSUInteger, anObject: cocoascript.):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1460093-setobject
    setObject(obj: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1418287-replaceobjectsatindexes
    replaceObjectsAtIndexes_withObjects(indexes: cocoascript.NSIndexSet, objects: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1409073-replaceobjectsinrange
    replaceObjectsInRange_withObjectsFromArray_range(range: cocoascript.NSRange, otherArray: cocoascript.NSArray, otherRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1416902-replaceobjectsinrange
    replaceObjectsInRange_withObjectsFromArray(range: cocoascript.NSRange, otherArray: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1417821-setarray
    setArray(otherArray: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1412085-filterusingpredicate
    filterUsingPredicate(predicate: cocoascript.NSPredicate):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1411160-exchangeobjectatindex
    exchangeObjectAtIndex_withObjectAtIndex(idx1: cocoascript.NSUInteger, idx2: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1410745-sortusingdescriptors
    sortUsingDescriptors(sortDescriptors: cocoascript.NSSortDescriptor):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1414904-sortusingcomparator
    sortUsingComparator(cmptr: cocoascript.NSComparator):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1414396-sortwithoptions
    sortWithOptions_usingComparator(opts: cocoascript.NSSortOptions, cmptr: cocoascript.NSComparator):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1408332-sortusingfunction
    sortUsingFunction_context(compare: void, context: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1412273-sortusingselector
    sortUsingSelector(comparator: cocoascript.SEL):void;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/1409527-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSMutableArray;
    // doc://com.apple.documentation/documentation/foundation/nsmutablearray/3152169-applydifference
    applyDifference(difference: cocoascript.NSOrderedCollectionDifference):void;
    //
    alloc():cocoascript.NSMutableArray;
    //
    init():cocoascript.NSMutableArray;
  }
}

declare const NSMutableArray: cocoascript.NSMutableArray;
