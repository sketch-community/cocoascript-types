declare namespace cocoascript {
  /**
   * A specialized regular expression object that matches natural language text for predefined data patterns.
   * doc://com.apple.documentation/documentation/foundation/nsdatadetector
   */
  interface NSDataDetector extends NSRegularExpression {
    // doc://com.apple.documentation/documentation/foundation/nsdatadetector/1409829-initwithtypes
    initWithTypes_error(checkingTypes: cocoascript.NSTextCheckingTypes, error: cocoascript._Nullable):cocoascript.NSDataDetector;
    // doc://com.apple.documentation/documentation/foundation/nsdatadetector/1412372-checkingtypes
    checkingTypes(): cocoascript.NSTextCheckingTypes;
    setCheckingTypes(): void;
    //
    alloc():cocoascript.NSDataDetector;
    //
    init():cocoascript.NSDataDetector;
  }
}

declare const NSDataDetector: cocoascript.NSDataDetector;
