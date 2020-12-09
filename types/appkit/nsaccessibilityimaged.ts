declare namespace cocoascript {
/**
 * A role-based protocol that declares the minimum interface required for an accessibility element to act as an image.
 * doc://com.apple.documentation/documentation/appkit/nsaccessibilityimage
 */
interface NSAccessibilityImage extends NSAccessibilityElement {
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilityimage/1531608-accessibilitylabel
  accessibilityLabel():cocoascript.NSString;
}
}

