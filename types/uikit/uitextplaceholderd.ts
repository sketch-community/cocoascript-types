declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/uikit/uitextplaceholder
   */
  interface UITextPlaceholder extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitextplaceholder/3213957-rects
    rects(): cocoascript.UITextSelectionRect;
    setRects(): void;
    //
    alloc():cocoascript.UITextPlaceholder;
    //
    init():cocoascript.UITextPlaceholder;
  }
}

declare const UITextPlaceholder: cocoascript.UITextPlaceholder;
