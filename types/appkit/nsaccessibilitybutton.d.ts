declare namespace cocoascript {
  /**
   * A role-based protocol that declares the minimum interface required for an accessibility element to act as a button.
   * doc://com.apple.documentation/documentation/appkit/nsaccessibilitybutton
   */
  interface NSAccessibilityButton extends NSAccessibilityElement {
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitybutton/1524910-accessibilitylabel
    accessibilityLabel():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitybutton/1525542-accessibilityperformpress
    accessibilityPerformPress():cocoascript.BOOL;
  }
}
