declare namespace cocoascript {
  /**
   * A protocol that enables an object to be encoded and decoded for archiving and distribution.
   * doc://com.apple.documentation/documentation/foundation/nscoding
   */
  interface NSCoding {
    // doc://com.apple.documentation/documentation/foundation/nscoding/1416145-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSCoding;
    // doc://com.apple.documentation/documentation/foundation/nscoding/1413933-encodewithcoder
    encodeWithCoder(coder: cocoascript.NSCoder):void;
  }
}
