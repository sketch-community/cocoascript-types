declare namespace cocoascript {
  /**
   * A role-based protocol that declares the minimum interface required for an accessibility element to act as a stepper.
   * doc://com.apple.documentation/documentation/appkit/nsaccessibilitystepper
   */
  interface NSAccessibilityStepper extends NSAccessibilityElement {
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitystepper/1528702-accessibilitylabel
    accessibilityLabel():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitystepper/1525327-accessibilityperformdecrement
    accessibilityPerformDecrement():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitystepper/1533764-accessibilityperformincrement
    accessibilityPerformIncrement():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitystepper/1528167-accessibilityvalue
    accessibilityValue():cocoascript.NSAccessibilityStepper;
  }
}
