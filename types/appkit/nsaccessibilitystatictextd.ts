declare namespace cocoascript {
  /**
   * A role-based protocol that declares the minimum interface required for an accessibility element to act as static text.
   * doc://com.apple.documentation/documentation/appkit/nsaccessibilitystatictext
   */
  interface NSAccessibilityStaticText extends NSAccessibilityElement {
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitystatictext/1535001-accessibilityattributedstringfor
    accessibilityAttributedStringForRange(range: cocoascript.NSRange):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitystatictext/1528730-accessibilityvalue
    accessibilityValue():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitystatictext/1532230-accessibilityvisiblecharacterran
    accessibilityVisibleCharacterRange():cocoascript.NSRange;
  }
}
