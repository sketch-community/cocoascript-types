declare namespace cocoascript {
  /**
   * An encapsulation of information about a selected range of text in a document.
   * doc://com.apple.documentation/documentation/uikit/uitextselectionrect
   */
  interface UITextSelectionRect extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitextselectionrect/1614461-rect
    rect(): cocoascript.CGRect;
    setRect(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextselectionrect/1614569-writingdirection
    writingDirection(): cocoascript.NSWritingDirection;
    setWritingDirection(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextselectionrect/1614561-isvertical
    isVertical(): cocoascript.BOOL;
    setIsVertical(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextselectionrect/1614560-containsstart
    containsStart(): cocoascript.BOOL;
    setContainsStart(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextselectionrect/1614516-containsend
    containsEnd(): cocoascript.BOOL;
    setContainsEnd(): void;
    //
    alloc():cocoascript.UITextSelectionRect;
    //
    init():cocoascript.UITextSelectionRect;
  }
}

declare const UITextSelectionRect: cocoascript.UITextSelectionRect;
