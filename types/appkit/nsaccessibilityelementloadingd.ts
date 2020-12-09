declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/appkit/nsaccessibilityelementloading
 */
interface NSAccessibilityElementLoading extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilityelementloading/2890815-accessibilityelementwithtoken
  accessibilityElementWithToken(token: cocoascript.NSAccessibilityLoadingToken):cocoascript.NSAccessibilityElement;
  // doc://com.apple.documentation/documentation/appkit/nsaccessibilityelementloading/2890818-accessibilityrangeintargetelemen
  accessibilityRangeInTargetElementWithToken(token: cocoascript.NSAccessibilityLoadingToken):cocoascript.NSRange;
}
}

