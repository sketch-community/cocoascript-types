declare namespace cocoascript {
/**
 * An immutable collection of unique integer values that represent indexes in another collection.
 * doc://com.apple.documentation/documentation/foundation/nsindexset
 */
interface NSIndexSet extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1416501-initwithindex
  initWithIndex(value: cocoascript.NSUInteger):cocoascript.NSIndexSet;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1414013-initwithindexesinrange
  initWithIndexesInRange(range: cocoascript.NSRange):cocoascript.NSIndexSet;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1415602-initwithindexset
  initWithIndexSet(indexSet: cocoascript.NSIndexSet):cocoascript.NSIndexSet;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1410176-containsindex
  containsIndex(value: cocoascript.NSUInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1414823-containsindexes
  containsIndexes(indexSet: cocoascript.NSIndexSet):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1408511-containsindexesinrange
  containsIndexesInRange(range: cocoascript.NSRange):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1413352-intersectsindexesinrange
  intersectsIndexesInRange(range: cocoascript.NSRange):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1409648-count
  count(): cocoascript.NSUInteger;
  setCount(): void;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1410114-countofindexesinrange
  countOfIndexesInRange(range: cocoascript.NSRange):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1408471-indexpassingtest
  indexPassingTest(predicate: cocoascript.BOOL):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1407357-indexespassingtest
  indexesPassingTest(predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1415860-indexwithoptions
  indexWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1412401-indexeswithoptions
  indexesWithOptions_passingTest(opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1415301-indexinrange
  indexInRange_options_passingTest(range: cocoascript.NSRange, opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1412153-indexesinrange
  indexesInRange_options_passingTest(range: cocoascript.NSRange, opts: cocoascript.NSEnumerationOptions, predicate: cocoascript.BOOL):cocoascript.NSIndexSet;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1416352-enumeraterangesinrange
  enumerateRangesInRange_options_usingBlock(range: cocoascript.NSRange, opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1409668-enumeraterangesusingblock
  enumerateRangesUsingBlock(block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1412673-enumeraterangeswithoptions
  enumerateRangesWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1412212-isequaltoindexset
  isEqualToIndexSet(indexSet: cocoascript.NSIndexSet):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1410814-firstindex
  firstIndex(): cocoascript.NSUInteger;
  setFirstIndex(): void;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1415020-lastindex
  lastIndex(): cocoascript.NSUInteger;
  setLastIndex(): void;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1417609-indexlessthanindex
  indexLessThanIndex(value: cocoascript.NSUInteger):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1412299-indexlessthanorequaltoindex
  indexLessThanOrEqualToIndex(value: cocoascript.NSUInteger):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1407870-indexgreaterthanorequaltoindex
  indexGreaterThanOrEqualToIndex(value: cocoascript.NSUInteger):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1407192-indexgreaterthanindex
  indexGreaterThanIndex(value: cocoascript.NSUInteger):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1409332-getindexes
  getIndexes_maxCount_inIndexRange(indexBuffer: cocoascript.NSUInteger, bufferSize: cocoascript.NSUInteger, range: cocoascript.NSRangePointer):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1411395-enumerateindexesusingblock
  enumerateIndexesUsingBlock(block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1414545-enumerateindexeswithoptions
  enumerateIndexesWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsindexset/1408162-enumerateindexesinrange
  enumerateIndexesInRange_options_usingBlock(range: cocoascript.NSRange, opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
  // 
  alloc():cocoascript.NSIndexSet;
  // 
  init():cocoascript.NSIndexSet;
}
}
declare const NSIndexSet: cocoascript.NSIndexSet;

