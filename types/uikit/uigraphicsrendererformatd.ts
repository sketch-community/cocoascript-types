declare namespace cocoascript {
  /**
   * A set of drawing attributes that represents the configuration of a graphics renderer context.
   * doc://com.apple.documentation/documentation/uikit/uigraphicsrendererformat
   */
  interface UIGraphicsRendererFormat extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uigraphicsrendererformat/1648563-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    //
    alloc():cocoascript.UIGraphicsRendererFormat;
    //
    init():cocoascript.UIGraphicsRendererFormat;
  }
}

declare const UIGraphicsRendererFormat: cocoascript.UIGraphicsRendererFormat;
