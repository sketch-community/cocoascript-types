declare namespace cocoascript {
  /**
   * A protocol that objects adopt to provide functional copies of themselves.
   * doc://com.apple.documentation/documentation/foundation/nscopying
   */
  interface NSCopying {
    // doc://com.apple.documentation/documentation/foundation/nscopying/1410311-copywithzone
    copyWithZone(zone: cocoascript.NSZone):cocoascript.NSCopying;
  }
}
