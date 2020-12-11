declare namespace cocoascript {
  /**
   * A structure representing a range of sequential items in a container, such as characters in a buffer or elements in a collection.
   * doc://com.apple.documentation/documentation/corefoundation/cfrange
   */
  interface CFRange {
    // doc://com.apple.documentation/documentation/corefoundation/cfrange/1521165-length
    length(): cocoascript.CFIndex;
    setLength(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfrange/1521333-location
    location(): cocoascript.CFIndex;
    setLocation(): void;
  }
}
