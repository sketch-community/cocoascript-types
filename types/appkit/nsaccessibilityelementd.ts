declare namespace cocoascript {
  /**
   * The basic infrastructure required to interact with an accessibility client.
   * doc://com.apple.documentation/documentation/appkit/nsaccessibilityelement
   */
  interface NSAccessibilityElement extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilityelement/1533717-accessibilityaddchildelement
    accessibilityAddChildElement(childElement: cocoascript.NSAccessibilityElement):void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilityelement/1569648-accessibilityframeinparentspace
    accessibilityFrameInParentSpace(): cocoascript.NSRect;
    setAccessibilityFrameInParentSpace(): void;
    //
    alloc():cocoascript.NSAccessibilityElement;
    //
    init():cocoascript.NSAccessibilityElement;
  }
}

declare const NSAccessibilityElement: cocoascript.NSAccessibilityElement;
