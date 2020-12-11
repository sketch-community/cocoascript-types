declare namespace cocoascript {
  /**
   * A role-based protocol that declares the minimum interface required for an accessibility element to act as a row for a table, list, or outline view.
   * doc://com.apple.documentation/documentation/appkit/nsaccessibilityrow
   */
  interface NSAccessibilityRow extends NSAccessibilityGroup {
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilityrow/1531837-accessibilitydisclosurelevel
    accessibilityDisclosureLevel():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilityrow/1526746-accessibilityindex
    accessibilityIndex():cocoascript.NSInteger;
  }
}
