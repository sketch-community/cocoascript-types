declare namespace cocoascript {
  /**
   * A role-based protocol that declares the minimum interface required for an accessibility element to act as a radio button.
   * doc://com.apple.documentation/documentation/appkit/nsaccessibilityradiobutton
   */
  interface NSAccessibilityRadioButton extends NSAccessibilityButton {
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilityradiobutton/1526534-accessibilityvalue
    accessibilityValue():cocoascript.NSNumber;
  }
}
