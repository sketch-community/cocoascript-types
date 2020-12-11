declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/uikit/uilargecontentviewerinteraction
   */
  interface UILargeContentViewerInteraction extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uilargecontentviewerinteraction/3183925-initwithdelegate
    initWithDelegate(delegate: cocoascript.UILargeContentViewerInteractionDelegate):cocoascript.UILargeContentViewerInteraction;
    // doc://com.apple.documentation/documentation/uikit/uilargecontentviewerinteraction/3183922-delegate
    delegate(): cocoascript.UILargeContentViewerInteractionDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uilargecontentviewerinteraction/3183924-gesturerecognizerforexclusionrel
    gestureRecognizerForExclusionRelationship(): cocoascript.UIGestureRecognizer;
    setGestureRecognizerForExclusionRelationship(): void;
    // doc://com.apple.documentation/documentation/uikit/uilargecontentviewerinteraction/3183923-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    //
    alloc():cocoascript.UILargeContentViewerInteraction;
    //
    init():cocoascript.UILargeContentViewerInteraction;
  }
}

declare const UILargeContentViewerInteraction: cocoascript.UILargeContentViewerInteraction;
