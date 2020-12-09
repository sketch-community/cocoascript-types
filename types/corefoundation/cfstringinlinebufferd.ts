declare namespace cocoascript {
/**
 * Defines the buffer and related fields used for in-line buffer access of characters in CFString objects.
 * doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer
 */
interface CFStringInlineBuffer {
  // doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer/1542009-buffer
  buffer(): cocoascript.UniChar;
  setBuffer(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer/1541907-bufferedrangeend
  bufferedRangeEnd(): cocoascript.CFIndex;
  setBufferedRangeEnd(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer/1542413-bufferedrangestart
  bufferedRangeStart(): cocoascript.CFIndex;
  setBufferedRangeStart(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer/1542857-rangetobuffer
  rangeToBuffer(): cocoascript.CFRange;
  setRangeToBuffer(): void;
  // doc://com.apple.documentation/documentation/corefoundation/cfstringinlinebuffer/1543299-thestring
  theString(): cocoascript.CFStringRef;
  setTheString(): void;
}
}

