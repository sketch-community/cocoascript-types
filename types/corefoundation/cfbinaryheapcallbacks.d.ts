declare namespace cocoascript {
  /**
   * Structure containing the callbacks for values for a
   * doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcallbacks
   */
  interface CFBinaryHeapCallBacks {
    // doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcallbacks/1509307-compare
    compare(): void;
    setCompare(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcallbacks/1509329-copydescription
    copyDescription(): void;
    setCopyDescription(): void;
    // doc://com.apple.documentation/documentation/corefoundation/cfbinaryheapcallbacks/1509306-version
    version(): cocoascript.CFIndex;
    setVersion(): void;
  }
}
