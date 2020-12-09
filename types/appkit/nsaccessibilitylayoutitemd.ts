declare namespace cocoascript {
/**
 * A role-based protocol that declares the minimum interface required for an accessibility element to act as a layout item. 
 * doc://com.apple.documentation/documentation/appkit/nsaccessibilitylayoutitem
 */
interface NSAccessibilityLayoutItem extends NSAccessibilityGroup {
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilitylayoutitem/1533160-setaccessibilityframe
  setAccessibilityFrame(frame: cocoascript.NSRect):void;
}
}

