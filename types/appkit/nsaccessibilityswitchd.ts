declare namespace cocoascript {
/**
 * A role-based protocol that declares the minimum interface required for an accessibility element to act as a switch. 
 * doc://com.apple.documentation/documentation/appkit/nsaccessibilityswitch
 */
interface NSAccessibilitySwitch extends NSAccessibilityButton {
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilityswitch/1528290-accessibilityperformdecrement
  accessibilityPerformDecrement():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilityswitch/1533985-accessibilityperformincrement
  accessibilityPerformIncrement():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilityswitch/1533946-accessibilityvalue
  accessibilityValue():cocoascript.NSString;
}
}

