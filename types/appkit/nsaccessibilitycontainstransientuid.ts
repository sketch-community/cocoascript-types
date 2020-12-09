declare namespace cocoascript {
/**
 * A set of methods that support accessibility in a UI that changes dynamically—usually in response to mouse-hover events.
 * doc://com.apple.documentation/documentation/appkit/nsaccessibilitycontainstransientui
 */
interface NSAccessibilityContainsTransientUI extends NSAccessibilityElement {
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycontainstransientui/1535134-accessibilityperformshowalternat
  accessibilityPerformShowAlternateUI():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycontainstransientui/1529235-accessibilityperformshowdefaultu
  accessibilityPerformShowDefaultUI():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycontainstransientui/1526272-isaccessibilityalternateuivisibl
  isAccessibilityAlternateUIVisible():cocoascript.BOOL;
}
}

