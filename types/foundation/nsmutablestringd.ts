declare namespace cocoascript {
/**
 * A dynamic plain-text Unicode string object.
 * doc://com.apple.documentation/documentation/foundation/nsmutablestring
 */
interface NSMutableString extends NSString {
  // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1416610-initwithcapacity
  initWithCapacity(capacity: cocoascript.NSUInteger):cocoascript.NSMutableString;
  // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1497308-appendformat
  appendFormat(format: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1417883-appendstring
  appendString(aString: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1415742-applytransform
  applyTransform_reverse_range_updatedRange(transform: cocoascript.NSStringTransform, reverse: cocoascript.BOOL, range: cocoascript.NSRange, resultingRange: cocoascript.NSRangePointer):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1415003-deletecharactersinrange
  deleteCharactersInRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1410999-insertstring
  insertString_atIndex(aString: cocoascript.NSString, loc: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1416524-replacecharactersinrange
  replaceCharactersInRange_withString(range: cocoascript.NSRange, aString: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1412453-replaceoccurrencesofstring
  replaceOccurrencesOfString_withString_options_range(target: cocoascript.NSString, replacement: cocoascript.NSString, options: cocoascript.NSStringCompareOptions, searchRange: cocoascript.NSRange):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsmutablestring/1409483-setstring
  setString(aString: cocoascript.NSString):void;
  // 
  alloc():cocoascript.NSMutableString;
  // 
  init():cocoascript.NSMutableString;
}
}
declare const NSMutableString: cocoascript.NSMutableString;

