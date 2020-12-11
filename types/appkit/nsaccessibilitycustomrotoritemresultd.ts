declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotoritemresult
   */
  interface NSAccessibilityCustomRotorItemResult extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotoritemresult/2890782-initwithitemloadingtoken
    initWithItemLoadingToken_customLabel(itemLoadingToken: cocoascript.NSAccessibilityLoadingToken, customLabel: cocoascript.NSString):cocoascript.NSAccessibilityCustomRotorItemResult;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotoritemresult/2876308-initwithtargetelement
    initWithTargetElement(targetElement: cocoascript.NSAccessibilityElement):cocoascript.NSAccessibilityCustomRotorItemResult;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotoritemresult/2876298-customlabel
    customLabel(): cocoascript.NSString;
    setCustomLabel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotoritemresult/2890781-itemloadingtoken
    itemLoadingToken(): cocoascript.NSAccessibilityLoadingToken;
    setItemLoadingToken(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotoritemresult/2876335-targetelement
    targetElement(): cocoascript.NSAccessibilityElement;
    setTargetElement(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotoritemresult/2876323-targetrange
    targetRange(): cocoascript.NSRange;
    setTargetRange(): void;
    //
    alloc():cocoascript.NSAccessibilityCustomRotorItemResult;
    //
    init():cocoascript.NSAccessibilityCustomRotorItemResult;
  }
}

declare const NSAccessibilityCustomRotorItemResult: cocoascript.NSAccessibilityCustomRotorItemResult;
