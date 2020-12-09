declare namespace cocoascript {
/**
 * A mutable collection of unique integer values that represent indexes in another collection. 
 * doc://com.apple.documentation/documentation/foundation/nsmutableindexset
 */
interface NSMutableIndexSet extends NSIndexSet {
  // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1410712-addindex
  addIndex(value: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1414594-addindexes
  addIndexes(indexSet: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1408251-addindexesinrange
  addIndexesInRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1410650-removeindex
  removeIndex(value: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1412018-removeindexes
  removeIndexes(indexSet: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1408738-removeallindexes
  removeAllIndexes():void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1415791-removeindexesinrange
  removeIndexesInRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableindexset/1416951-shiftindexesstartingatindex
  shiftIndexesStartingAtIndex_by(index: cocoascript.NSUInteger, delta: cocoascript.NSInteger):void;
  // 
  alloc():cocoascript.NSMutableIndexSet;
  // 
  init():cocoascript.NSMutableIndexSet;
}
}
declare const NSMutableIndexSet: cocoascript.NSMutableIndexSet;

