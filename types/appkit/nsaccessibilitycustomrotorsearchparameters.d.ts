declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotorsearchparameters
   */
  interface NSAccessibilityCustomRotorSearchParameters extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotorsearchparameters/2876332-currentitem
    currentItem(): cocoascript.NSAccessibilityCustomRotorItemResult;
    setCurrentItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotorsearchparameters/2876328-filterstring
    filterString(): cocoascript.NSString;
    setFilterString(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotorsearchparameters/2876322-searchdirection
    searchDirection(): cocoascript.NSAccessibilityCustomRotorSearchDirection;
    setSearchDirection(): void;
    //
    alloc():cocoascript.NSAccessibilityCustomRotorSearchParameters;
    //
    init():cocoascript.NSAccessibilityCustomRotorSearchParameters;
  }
}

declare const NSAccessibilityCustomRotorSearchParameters: cocoascript.NSAccessibilityCustomRotorSearchParameters;
