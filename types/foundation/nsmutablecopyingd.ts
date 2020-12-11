declare namespace cocoascript {
  /**
   * A protocol that mutable objects adopt to provide functional copies of themselves.
   * doc://com.apple.documentation/documentation/foundation/nsmutablecopying
   */
  interface NSMutableCopying {
    // doc://com.apple.documentation/documentation/foundation/nsmutablecopying/1414175-mutablecopywithzone
    mutableCopyWithZone(zone: cocoascript.NSZone):cocoascript.NSMutableCopying;
  }
}
