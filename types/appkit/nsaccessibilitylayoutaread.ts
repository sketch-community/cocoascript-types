declare namespace cocoascript {
/**
 * A role-based protocol that declares the minimum interface required for an accessibility element to act as a layout area. 
 * doc://com.apple.documentation/documentation/appkit/nsaccessibilitylayoutarea
 */
interface NSAccessibilityLayoutArea extends NSAccessibilityGroup {
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilitylayoutarea/1534997-accessibilitychildren
  accessibilityChildren():cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilitylayoutarea/1533902-accessibilityfocuseduielement
  accessibilityFocusedUIElement(): cocoascript.id;
  setAccessibilityFocusedUIElement(): void;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilitylayoutarea/1527051-accessibilitylabel
  accessibilityLabel():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilitylayoutarea/1528883-accessibilityselectedchildren
  accessibilitySelectedChildren():cocoascript.NSArray;
}
}

