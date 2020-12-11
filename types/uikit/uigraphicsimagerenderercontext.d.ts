declare namespace cocoascript {
  /**
   * The drawing environment for an image renderer.
   * doc://com.apple.documentation/documentation/uikit/uigraphicsimagerenderercontext
   */
  interface UIGraphicsImageRendererContext extends UIGraphicsRendererContext {
    // doc://com.apple.documentation/documentation/uikit/uigraphicsimagerenderercontext/1649237-currentimage
    currentImage(): cocoascript.UIImage;
    setCurrentImage(): void;
    //
    alloc():cocoascript.UIGraphicsImageRendererContext;
    //
    init():cocoascript.UIGraphicsImageRendererContext;
  }
}

declare const UIGraphicsImageRendererContext: cocoascript.UIGraphicsImageRendererContext;
