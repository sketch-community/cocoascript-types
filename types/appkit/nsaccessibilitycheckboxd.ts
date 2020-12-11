declare namespace cocoascript {
  /**
   * A role-based protocol that declares the minimum interface required for an accessibility element to act as a checkbox.
   * doc://com.apple.documentation/documentation/appkit/nsaccessibilitycheckbox
   */
  interface NSAccessibilityCheckBox extends NSAccessibilityButton {
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycheckbox/1524299-accessibilityvalue
    accessibilityValue():cocoascript.NSNumber;
  }
}
