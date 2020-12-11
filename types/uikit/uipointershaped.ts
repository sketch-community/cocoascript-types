declare namespace cocoascript {
  /**
   * An object that defines the shape of custom pointers.
   * doc://com.apple.documentation/documentation/uikit/uipointershape
   */
  interface UIPointerShape extends NSObject {
    //
    alloc():cocoascript.UIPointerShape;
    //
    init():cocoascript.UIPointerShape;
  }
}

declare const UIPointerShape: cocoascript.UIPointerShape;
