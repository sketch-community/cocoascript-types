declare namespace cocoascript {
  /**
   * Encapsulates information about an item that should be accessible to users with disabilities, but that isn’t accessible by default.
   * doc://com.apple.documentation/documentation/uikit/uiaccessibilityelement
   */
  interface UIAccessibilityElement extends UIResponder {
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilityelement/1619582-initwithaccessibilitycontainer
    initWithAccessibilityContainer(container: cocoascript.UIAccessibilityElement):cocoascript.UIAccessibilityElement;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilityelement/1619581-accessibilitycontainer
    accessibilityContainer(): cocoascript.id;
    setAccessibilityContainer(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilityelement/1619580-isaccessibilityelement
    isAccessibilityElement(): cocoascript.BOOL;
    setIsAccessibilityElement(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilityelement/1619577-accessibilitylabel
    accessibilityLabel(): cocoascript.NSString;
    setAccessibilityLabel(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilityelement/1619585-accessibilityhint
    accessibilityHint(): cocoascript.NSString;
    setAccessibilityHint(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilityelement/1619583-accessibilityvalue
    accessibilityValue(): cocoascript.NSString;
    setAccessibilityValue(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilityelement/1619579-accessibilityframe
    accessibilityFrame(): cocoascript.CGRect;
    setAccessibilityFrame(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilityelement/1649543-accessibilityframeincontainerspa
    accessibilityFrameInContainerSpace(): cocoascript.CGRect;
    setAccessibilityFrameInContainerSpace(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilityelement/1619584-accessibilitytraits
    accessibilityTraits(): cocoascript.UIAccessibilityTraits;
    setAccessibilityTraits(): void;
    //
    alloc():cocoascript.UIAccessibilityElement;
    //
    init():cocoascript.UIAccessibilityElement;
  }
}

declare const UIAccessibilityElement: cocoascript.UIAccessibilityElement;
