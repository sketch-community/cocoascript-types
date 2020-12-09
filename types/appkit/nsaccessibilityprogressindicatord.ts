declare namespace cocoascript {
/**
 * A role-based protocol that declares the minimum interface required for an accessibility element to act as a progress indicator. 
 * doc://com.apple.documentation/documentation/appkit/nsaccessibilityprogressindicator
 */
interface NSAccessibilityProgressIndicator extends NSAccessibilityGroup {
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilityprogressindicator/1531500-accessibilityvalue
  accessibilityValue():cocoascript.NSNumber;
}
}

