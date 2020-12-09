declare namespace cocoascript {
/**
 * A role-based protocol that declares the minimum interface required for an accessibility element to act as a slider. 
 * doc://com.apple.documentation/documentation/appkit/nsaccessibilityslider
 */
interface NSAccessibilitySlider extends NSAccessibilityElement {
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilityslider/1530176-accessibilitylabel
  accessibilityLabel():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilityslider/1534967-accessibilityperformdecrement
  accessibilityPerformDecrement():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilityslider/1528478-accessibilityperformincrement
  accessibilityPerformIncrement():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilityslider/1530335-accessibilityvalue
  accessibilityValue():cocoascript.NSAccessibilitySlider;
}
}

