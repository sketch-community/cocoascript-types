declare namespace cocoascript {
/**
 * A structure used to describe a portion of a series, such as characters in a string or objects in an array.
 * doc://com.apple.documentation/documentation/foundation/nsrange
 */
interface NSRange {
  // doc://com.apple.documentation/documentation/foundation/1413065-nsintersectionrange
  NSIntersectionRange(): cocoascript.NSRange;
  setNSIntersectionRange(): void;
  // doc://com.apple.documentation/documentation/foundation/1417188-nsmakerange
  NSMakeRange(): cocoascript.NSUInteger;
  setNSMakeRange(): void;
  // doc://com.apple.documentation/documentation/foundation/1407494-nsmaxrange
  NSMaxRange(): cocoascript.NSRange;
  setNSMaxRange(): void;
  // doc://com.apple.documentation/documentation/foundation/1408420-nsrangefromstring
  NSRangeFromString(): cocoascript.NSString;
  setNSRangeFromString(): void;
  // doc://com.apple.documentation/documentation/foundation/1415155-nsstringfromrange
  NSStringFromRange(): cocoascript.NSRange;
  setNSStringFromRange(): void;
  // doc://com.apple.documentation/documentation/foundation/1412317-nsunionrange
  NSUnionRange(): cocoascript.NSRange;
  setNSUnionRange(): void;
  // doc://com.apple.documentation/documentation/foundation/nsrange/1459537-length
  length(): cocoascript.NSUInteger;
  setLength(): void;
  // doc://com.apple.documentation/documentation/foundation/nsrange/1459533-location
  location(): cocoascript.NSUInteger;
  setLocation(): void;
}
}

