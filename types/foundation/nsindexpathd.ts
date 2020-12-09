declare namespace cocoascript {
/**
 * A list of indexes that together represent the path to a specific location in a tree of nested arrays.
 * doc://com.apple.documentation/documentation/foundation/nsindexpath
 */
interface NSIndexPath extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsindexpath/1416855-initwithindex
  initWithIndex(index: cocoascript.NSUInteger):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/foundation/nsindexpath/1416906-initwithindexes
  initWithIndexes_length(indexes: cocoascript.NSUInteger, length: cocoascript.NSUInteger):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/foundation/nsindexpath/1528298-section
  section(): cocoascript.NSInteger;
  setSection(): void;
  // doc://com.apple.documentation/documentation/foundation/nsindexpath/1614853-row
  row(): cocoascript.NSInteger;
  setRow(): void;
  // doc://com.apple.documentation/documentation/foundation/nsindexpath/1528293-item
  item(): cocoascript.NSInteger;
  setItem(): void;
  // doc://com.apple.documentation/documentation/foundation/nsindexpath/1412001-length
  length(): cocoascript.NSUInteger;
  setLength(): void;
  // doc://com.apple.documentation/documentation/foundation/nsindexpath/1417553-indexpathbyaddingindex
  indexPathByAddingIndex(index: cocoascript.NSUInteger):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/foundation/nsindexpath/1415624-indexpathbyremovinglastindex
  indexPathByRemovingLastIndex():cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/foundation/nsindexpath/1407552-compare
  compare(otherObject: cocoascript.NSIndexPath):cocoascript.NSComparisonResult;
  // doc://com.apple.documentation/documentation/foundation/nsindexpath/1414179-indexatposition
  indexAtPosition(position: cocoascript.NSUInteger):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsindexpath/1413360-getindexes
  getIndexes_range(indexes: cocoascript.NSUInteger, positionRange: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsindexpath/1417753-getindexes
  getIndexes(indexes: cocoascript.NSUInteger):void;
  // 
  alloc():cocoascript.NSIndexPath;
  // 
  init():cocoascript.NSIndexPath;
}
}
declare const NSIndexPath: cocoascript.NSIndexPath;

