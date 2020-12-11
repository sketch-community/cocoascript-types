declare namespace cocoascript {
  /**
   * A set of methods that define the interface for configuring a previewing view controller on devices that support 3D Touch.
   * doc://com.apple.documentation/documentation/uikit/uiviewcontrollerpreviewing
   */
  interface UIViewControllerPreviewing extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrollerpreviewing/1621431-sourcerect
    sourceRect(): cocoascript.CGRect;
    setSourceRect(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrollerpreviewing/1621467-previewinggesturerecognizerforfa
    previewingGestureRecognizerForFailureRelationship(): cocoascript.UIGestureRecognizer;
    setPreviewingGestureRecognizerForFailureRelationship(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrollerpreviewing/1621422-delegate
    delegate(): cocoascript.UIViewControllerPreviewingDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrollerpreviewing/1621436-sourceview
    sourceView(): cocoascript.UIView;
    setSourceView(): void;
  }
}
