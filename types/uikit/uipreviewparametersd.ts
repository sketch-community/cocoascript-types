declare namespace cocoascript {
  /**
   * Additional parameters to use when animating a preview interface.
   * doc://com.apple.documentation/documentation/uikit/uipreviewparameters
   */
  interface UIPreviewParameters extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uipreviewparameters/3295951-init
    init():cocoascript.UIPreviewParameters;
    // doc://com.apple.documentation/documentation/uikit/uipreviewparameters/3295952-initwithtextlinerects
    initWithTextLineRects(textLineRects: cocoascript.NSValue):cocoascript.UIPreviewParameters;
    // doc://com.apple.documentation/documentation/uikit/uipreviewparameters/3295950-backgroundcolor
    backgroundColor(): cocoascript.UIColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uipreviewparameters/3295953-visiblepath
    visiblePath(): cocoascript.UIBezierPath;
    setVisiblePath(): void;
    // doc://com.apple.documentation/documentation/uikit/uipreviewparameters/3601230-shadowpath
    shadowPath(): cocoascript.UIBezierPath;
    setShadowPath(): void;
    //
    alloc():cocoascript.UIPreviewParameters;
    //
    init():cocoascript.UIPreviewParameters;
  }
}

declare const UIPreviewParameters: cocoascript.UIPreviewParameters;
