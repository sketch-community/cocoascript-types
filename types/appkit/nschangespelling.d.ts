declare namespace cocoascript {
  /**
   * A protocol that responder objects can implement to correct a misspelled word.
   * doc://com.apple.documentation/documentation/appkit/nschangespelling
   */
  interface NSChangeSpelling {
    // doc://com.apple.documentation/documentation/appkit/nschangespelling/1526512-changespelling
    changeSpelling(sender: cocoascript.NSChangeSpelling):void;
  }
}
