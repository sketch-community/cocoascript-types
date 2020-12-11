declare namespace cocoascript {
  /**
   * A role-based protocol that declares the minimum interface required for an accessibility element to act as navigable static text.
   * doc://com.apple.documentation/documentation/appkit/nsaccessibilitynavigablestatictext
   */
  interface NSAccessibilityNavigableStaticText extends NSAccessibilityStaticText {
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitynavigablestatictext/1524702-accessibilityframeforrange
    accessibilityFrameForRange(range: cocoascript.NSRange):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitynavigablestatictext/1534931-accessibilitylineforindex
    accessibilityLineForIndex(index: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitynavigablestatictext/1527015-accessibilityrangeforline
    accessibilityRangeForLine(lineNumber: cocoascript.NSInteger):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitynavigablestatictext/1525402-accessibilitystringforrange
    accessibilityStringForRange(range: cocoascript.NSRange):cocoascript.NSString;
  }
}
