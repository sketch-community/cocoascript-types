declare namespace cocoascript {
  /**
   * A role-based protocol that declares the minimum interface required to interact with an accessibility client.
   * doc://com.apple.documentation/documentation/appkit/1534023-nsaccessibilityelement
   */
  interface NSAccessibilityElement extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/1534023-nsaccessibilityelement/1528055-accessibilityframe
    accessibilityFrame():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/1534023-nsaccessibilityelement/1533707-accessibilityidentifier
    accessibilityIdentifier():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/1534023-nsaccessibilityelement/1529078-accessibilityparent
    accessibilityParent():cocoascript.NSAccessibilityElement;
    // doc://com.apple.documentation/documentation/appkit/1534023-nsaccessibilityelement/1525133-isaccessibilityfocused
    isAccessibilityFocused():cocoascript.BOOL;
  }
}
