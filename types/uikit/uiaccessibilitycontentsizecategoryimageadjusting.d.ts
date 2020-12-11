declare namespace cocoascript {
  /**
   * Methods to determine when to adjust images for different content size categories.
   * doc://com.apple.documentation/documentation/uikit/uiaccessibilitycontentsizecategoryimageadjusting
   */
  interface UIAccessibilityContentSizeCategoryImageAdjusting extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycontentsizecategoryimageadjusting/2890929-adjustsimagesizeforaccessibility
    adjustsImageSizeForAccessibilityContentSizeCategory(): cocoascript.BOOL;
    setAdjustsImageSizeForAccessibilityContentSizeCategory(): void;
  }
}
