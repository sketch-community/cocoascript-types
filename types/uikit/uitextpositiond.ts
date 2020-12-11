declare namespace cocoascript {
  /**
   * A position in a text container—that is, an index into the backing string in a text-display view.
   * doc://com.apple.documentation/documentation/uikit/uitextposition
   */
  interface UITextPosition extends NSObject {
    //
    alloc():cocoascript.UITextPosition;
    //
    init():cocoascript.UITextPosition;
  }
}

declare const UITextPosition: cocoascript.UITextPosition;
